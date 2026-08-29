#!/usr/bin/env node
// Builds Local Site/site/data/corpus.json — the offline knowledge base for the
// Ollama-backed local site. Walks this vault's markdown notes and the local
// PDF library, chunks everything, embeds each chunk via a local Ollama model,
// and writes one JSON file the static site loads at runtime. Re-run this
// after any material change to the vault or the PDF library.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VAULT_ROOT = path.resolve(__dirname, "..", "..");
const SITE_DIR = path.resolve(__dirname, "..", "site");
const OUT_FILE = path.join(SITE_DIR, "data", "corpus.json");
const PDF_LIBRARY_ROOT = path.join(process.env.HOME, "Downloads", "PDF Library");

const OLLAMA_HOST = process.env.OLLAMA_HOST || "http://localhost:11434";
const EMBED_MODEL = process.env.EMBED_MODEL || "nomic-embed-text";
const EMBED_BATCH_SIZE = 16;

const CHUNK_SIZE = 1200; // characters
const CHUNK_OVERLAP = 200;

const EXCLUDED_DIR_NAMES = new Set([
  ".git",
  ".obsidian",
  ".claude",
  "Local Site",
  "Attachments",
  "Dashboards",
  "Templates",
  "node_modules",
]);

function chunkText(text, size = CHUNK_SIZE, overlap = CHUNK_OVERLAP) {
  const paragraphs = text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  const chunks = [];
  let current = "";
  for (const para of paragraphs) {
    if ((current + "\n\n" + para).length > size && current.length > 0) {
      chunks.push(current.trim());
      const overlapStart = Math.max(0, current.length - overlap);
      current = current.slice(overlapStart) + "\n\n" + para;
    } else {
      current = current ? current + "\n\n" + para : para;
    }
    // A single paragraph longer than the chunk size on its own: hard-split it.
    while (current.length > size * 1.5) {
      chunks.push(current.slice(0, size).trim());
      current = current.slice(size - overlap);
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks.length ? chunks : [text.trim()].filter(Boolean);
}

function stripFrontmatter(text) {
  const match = text.match(/^---\n[\s\S]*?\n---\n?/);
  return match ? text.slice(match[0].length) : text;
}

// Minimal flat-YAML frontmatter parser: handles `key: value` and `key: [a, b, c]`
// lines, which covers every frontmatter shape actually used in this vault.
function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return {};
  const meta = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1].trim();
    let value = m[2].trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    } else {
      value = value.replace(/^"(.*)"$/, "$1");
    }
    if (value !== "" && !(Array.isArray(value) && value.length === 0)) meta[key] = value;
  }
  return meta;
}

function titleFromMarkdown(text, fallback) {
  const h1 = text.match(/^#\s+(.+)$/m);
  return h1 ? h1[1].trim() : fallback;
}

async function walkMarkdownFiles(dir, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDED_DIR_NAMES.has(entry.name)) continue;
      await walkMarkdownFiles(full, results);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      results.push(full);
    }
  }
  return results;
}

async function walkPdfFiles(dir, results = []) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return results; // library folder may not exist on every machine
  }
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkPdfFiles(full, results);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) {
      results.push(full);
    }
  }
  return results;
}

async function extractPdfText(pdfPath) {
  const { stdout } = await execFileAsync("pdftotext", ["-layout", pdfPath, "-"], {
    maxBuffer: 1024 * 1024 * 50,
  });
  return stdout;
}

function cleanPdfTitle(filename) {
  return filename
    .replace(/\.pdf$/i, "")
    .replace(/-done$/i, "")
    .replace(/\s*\(\d{4}-\d{2}-\d{2}\)\s*$/, "")
    .trim();
}

async function embedBatch(texts) {
  const res = await fetch(`${OLLAMA_HOST}/api/embed`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: EMBED_MODEL, input: texts }),
  });
  if (!res.ok) {
    throw new Error(`Ollama embed request failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.embeddings;
}

async function main() {
  console.log(`Vault root: ${VAULT_ROOT}`);
  console.log(`PDF library: ${PDF_LIBRARY_ROOT}`);

  const docs = [];

  const mdFiles = await walkMarkdownFiles(VAULT_ROOT);
  for (const file of mdFiles) {
    const raw = await fs.readFile(file, "utf8");
    const body = stripFrontmatter(raw).trim();
    if (!body) continue;
    const relPath = path.relative(VAULT_ROOT, file);
    const title = titleFromMarkdown(body, path.basename(file, ".md"));
    const frontmatter = parseFrontmatter(raw);
    const tags = Array.isArray(frontmatter.tags)
      ? frontmatter.tags
      : frontmatter.tags
      ? [frontmatter.tags]
      : [];
    docs.push({
      id: `note:${relPath}`,
      type: "note",
      title,
      relPath,
      text: body,
      tags,
      docType: frontmatter.type || null,
      frontmatter,
    });
  }
  console.log(`Found ${docs.length} vault notes.`);

  const pdfFiles = await walkPdfFiles(PDF_LIBRARY_ROOT);
  let pdfCount = 0;
  for (const file of pdfFiles) {
    let text;
    try {
      text = (await extractPdfText(file)).trim();
    } catch (err) {
      console.warn(`  ! skipped (pdftotext failed): ${file}: ${err.message}`);
      continue;
    }
    if (!text) continue;
    const relPath = path.relative(PDF_LIBRARY_ROOT, file);
    docs.push({
      id: `pdf:${relPath}`,
      type: "pdf",
      title: cleanPdfTitle(path.basename(file)),
      relPath: path.join("PDF Library", relPath),
      text,
    });
    pdfCount++;
  }
  console.log(`Found ${pdfCount} PDFs.`);

  console.log("Chunking documents...");
  const chunkRecords = [];
  for (const doc of docs) {
    const pieces = chunkText(doc.text);
    pieces.forEach((text, i) => {
      chunkRecords.push({ id: `${doc.id}#${i}`, docId: doc.id, text });
    });
  }
  console.log(`Total chunks: ${chunkRecords.length}`);

  console.log(`Embedding chunks via Ollama (${EMBED_MODEL})...`);
  const chunks = [];
  for (let i = 0; i < chunkRecords.length; i += EMBED_BATCH_SIZE) {
    const batch = chunkRecords.slice(i, i + EMBED_BATCH_SIZE);
    const embeddings = await embedBatch(batch.map((c) => c.text));
    batch.forEach((c, j) => {
      chunks.push({ ...c, embedding: embeddings[j] });
    });
    process.stdout.write(
      `\r  embedded ${Math.min(i + EMBED_BATCH_SIZE, chunkRecords.length)}/${chunkRecords.length}`
    );
  }
  console.log("");

  const corpus = {
    generatedAt: new Date().toISOString(),
    embedModel: EMBED_MODEL,
    docs: docs.map(({ id, type, title, relPath, text, tags, docType, frontmatter }) => ({
      id,
      type,
      title,
      relPath,
      text,
      tags: tags || [],
      docType: docType || null,
      frontmatter: frontmatter || {},
    })),
    chunks,
  };

  await fs.mkdir(path.dirname(OUT_FILE), { recursive: true });
  await fs.writeFile(OUT_FILE, JSON.stringify(corpus));
  const sizeMb = (await fs.stat(OUT_FILE)).size / (1024 * 1024);
  console.log(`Wrote ${OUT_FILE} (${sizeMb.toFixed(1)} MB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
