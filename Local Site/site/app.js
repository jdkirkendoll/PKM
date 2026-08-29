const OLLAMA_HOST = `http://${window.location.hostname}:11434`;
const DEFAULT_CHAT_MODEL = "llama3.2:3b";
const TOP_K = 6;

const SHARED_RULES = `Rules:
- Answer only from the CONTEXT provided below the question. If the context doesn't cover the question, say so plainly instead of guessing or using outside knowledge.
- Keep answers concise and practical.
- After the answer, do not repeat the source list yourself — it is appended separately by the interface.`;

const PERSONAS = {
  functional: {
    label: "Functional Consultant",
    prompt: `You are an experienced IFS Cloud functional/business consultant answering questions about this Obsidian vault, which documents IFS Cloud setup, configuration, and business processes (security, connectivity, background processing, costing, resource requirements planning) and related saved reference PDFs.

Focus entirely on the steps a functional consultant performs in the IFS Cloud application UI: menu/navigation paths, page and tab names, field names, checkboxes, and the order to do things in. Do not mention PL/SQL, SQL, database tables/columns, or code unless the CONTEXT explicitly ties the question to a technical/developer task.

For "how do I / how to" questions, answer as numbered step-by-step instructions matching how the steps would actually be clicked through in the application, with a one-sentence intro at most. Prefer a short numbered list over prose.

${SHARED_RULES}`,
  },
  technical: {
    label: "Technical / Developer",
    prompt: `You are a certified Oracle PL/SQL & SQL developer and IFS Cloud technical consultant answering questions about this Obsidian vault, which documents IFS Cloud technical topics (security, connectivity, background processing, costing, resource requirements planning, PL/SQL and SQL development) and related saved reference PDFs.

Focus on the technical/developer angle: relevant packages, procedures, tables/views, PL/SQL patterns, and code-level detail. For "how do I / how to" questions, give a brief 1-3 sentence description of the approach, then bulleted or numbered steps, including code snippets where the context supports them.

${SHARED_RULES}`,
  },
};
const DEFAULT_PERSONA = "functional";

let corpus = null;

const state = {
  activeTab: "chat",
  viewMode: "nerd", // "normal" | "nerd"
};

function $(sel) { return document.querySelector(sel); }

// ---------- tiny markdown renderer (headers, lists, bold/italic, code, tables, blockquotes, wikilinks) ----------
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderInline(text) {
  let t = escapeHtml(text);
  // wikilinks [[path|alias]] or [[path]] -> plain styled span (not clickable across docs, just readable)
  t = t.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '<a href="#" class="wikilink" data-target="$1">$2</a>');
  t = t.replace(/\[\[([^\]]+)\]\]/g, '<a href="#" class="wikilink" data-target="$1">$1</a>');
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return t;
}

function splitTableRow(row) {
  const cells = [];
  let current = "";
  for (let i = 0; i < row.length; i++) {
    if (row[i] === "\\" && row[i + 1] === "|") {
      current += "|";
      i++;
    } else if (row[i] === "|") {
      cells.push(current);
      current = "";
    } else {
      current += row[i];
    }
  }
  cells.push(current);
  return cells
    .map((c) => c.trim())
    .filter((c, i, arr) => !(i === 0 && c === "") && !(i === arr.length - 1 && c === ""));
}

function renderMarkdown(md) {
  const lines = md.split("\n");
  let html = "";
  let inCode = false;
  let listType = null; // 'ul' | 'ol'
  let inTable = false;
  let tableRows = [];
  let inQuote = false;
  let quoteLines = [];

  function closeList() {
    if (listType) { html += `</${listType}>`; listType = null; }
  }
  function flushTable() {
    if (!inTable) return;
    const [headerRow, sepRow, ...bodyRows] = tableRows;
    html += "<table><thead><tr>";
    splitTableRow(headerRow).forEach((c) => {
      html += `<th>${renderInline(c)}</th>`;
    });
    html += "</tr></thead><tbody>";
    bodyRows.forEach((row) => {
      html += "<tr>";
      splitTableRow(row).forEach((c) => {
        html += `<td>${renderInline(c)}</td>`;
      });
      html += "</tr>";
    });
    html += "</tbody></table>";
    inTable = false;
    tableRows = [];
  }
  function flushQuote() {
    if (!inQuote) return;
    const calloutMatch = quoteLines[0].match(/^\[!(\w+)\][-+]?\s*(.*)$/i);
    if (calloutMatch) {
      const type = calloutMatch[1].toLowerCase();
      const titleText = calloutMatch[2].trim() || calloutMatch[1].charAt(0).toUpperCase() + calloutMatch[1].slice(1);
      const bodyLines = quoteLines.slice(1);
      html += `<div class="callout callout-${type}"><div class="callout-title">${renderInline(titleText)}</div>`;
      if (bodyLines.length) html += `<div class="callout-body">${renderMarkdown(bodyLines.join("\n"))}</div>`;
      html += "</div>";
    } else {
      html += `<blockquote>${quoteLines.map((l) => renderInline(l)).join("<br>")}</blockquote>`;
    }
    inQuote = false;
    quoteLines = [];
  }

  let codeLang = "";
  let dataviewLines = [];

  for (const rawLine of lines) {
    const line = rawLine;
    if (line.trim().startsWith("```")) {
      closeList(); flushTable(); flushQuote();
      if (!inCode) {
        codeLang = line.trim().slice(3).trim().toLowerCase();
        inCode = true;
        if (codeLang === "dataview") dataviewLines = [];
        else html += "<pre><code>";
      } else {
        if (codeLang === "dataview") html += renderDataviewQuery(dataviewLines.join("\n"));
        else html += "</code></pre>";
        inCode = false;
        codeLang = "";
      }
      continue;
    }
    if (inCode) {
      if (codeLang === "dataview") dataviewLines.push(line);
      else html += escapeHtml(line) + "\n";
      continue;
    }

    const bq = line.match(/^>\s?(.*)$/);
    if (bq) {
      closeList(); flushTable();
      inQuote = true;
      quoteLines.push(bq[1]);
      continue;
    } else if (inQuote) {
      flushQuote();
    }

    if (/^\s*\|.*\|\s*$/.test(line)) {
      inTable = true;
      tableRows.push(line.trim());
      continue;
    } else if (inTable) {
      flushTable();
    }

    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      closeList();
      const level = h[1].length;
      html += `<h${level}>${renderInline(h[2])}</h${level}>`;
      continue;
    }

    const ul = line.match(/^\s*[-*+]\s+(.*)$/);
    if (ul) {
      if (listType !== "ul") { closeList(); html += "<ul>"; listType = "ul"; }
      html += `<li>${renderInline(ul[1])}</li>`;
      continue;
    }

    const ol = line.match(/^\s*\d+\.\s+(.*)$/);
    if (ol) {
      if (listType !== "ol") { closeList(); html += "<ol>"; listType = "ol"; }
      html += `<li>${renderInline(ol[1])}</li>`;
      continue;
    }

    closeList();
    if (line.trim() === "") { continue; }
    html += `<p>${renderInline(line)}</p>`;
  }
  closeList();
  flushTable();
  flushQuote();
  return html;
}

// ---------- dataview query rendering (minimal: TABLE/LIST, FROM "path" or FROM #tag, WHERE field = "v", SORT, LIMIT) ----------
function fieldValue(doc, field) {
  if (field === "file.name" || field === "file.link") return doc.title;
  return doc.frontmatter ? doc.frontmatter[field] : undefined;
}

function parseDataviewQuery(query) {
  const lines = query.split("\n").map((l) => l.trim()).filter(Boolean);
  if (!lines.length) return null;
  const head = lines[0].match(/^(TABLE|LIST)\b\s*(WITHOUT ID)?\s*(.*)$/i);
  if (!head) return { unsupported: true };
  const qtype = head[1].toUpperCase();
  const withoutId = !!head[2];
  let fieldsRaw = head[3].trim();

  let i = 1;
  while (i < lines.length && !/^(FROM|WHERE|SORT|GROUP BY|FLATTEN|LIMIT)\b/i.test(lines[i])) {
    fieldsRaw += " " + lines[i];
    i++;
  }

  let from = null;
  let where = null;
  let sort = null;
  let limit = null;
  let unsupported = false;

  for (; i < lines.length; i++) {
    const l = lines[i];
    let m;
    if ((m = l.match(/^FROM\s+"([^"]+)"\s*$/i))) {
      from = { type: "folder", value: m[1] };
    } else if ((m = l.match(/^FROM\s+#(\S+)\s*$/i))) {
      from = { type: "tag", value: m[1] };
    } else if ((m = l.match(/^WHERE\s+(\S+)\s*(=|!=)\s*"([^"]+)"\s*$/i))) {
      where = { field: m[1], op: m[2], value: m[3] };
    } else if ((m = l.match(/^SORT\s+(\S+)\s*(ASC|DESC)?\s*$/i))) {
      sort = { field: m[1], dir: (m[2] || "ASC").toUpperCase() };
    } else if ((m = l.match(/^LIMIT\s+(\d+)\s*$/i))) {
      limit = parseInt(m[1], 10);
    } else {
      unsupported = true;
    }
  }

  if (!from || unsupported) return { unsupported: true };

  const fields =
    qtype === "TABLE"
      ? fieldsRaw
          .split(",")
          .map((f) => {
            const am = f.trim().match(/^(\S+)\s+AS\s+"([^"]+)"$/i);
            if (am) return { field: am[1], label: am[2] };
            const f2 = f.trim();
            return f2 ? { field: f2, label: f2 } : null;
          })
          .filter(Boolean)
      : [];

  return { qtype, withoutId, fields, from, where, sort, limit };
}

function renderDataviewQuery(query) {
  const parsed = parseDataviewQuery(query);
  if (!parsed || parsed.unsupported || !corpus) {
    return `<div class="dataview-fallback"><div class="dataview-fallback-label">Dataview query (live view not available in this reader)</div><pre><code>${escapeHtml(query)}</code></pre></div>`;
  }

  let docs = corpus.docs.filter((d) => {
    if (d.type !== "note") return false;
    if (parsed.from.type === "folder") {
      return d.relPath.startsWith(`${parsed.from.value}/`);
    }
    return (d.tags || []).includes(parsed.from.value);
  });

  if (parsed.where) {
    const { field, op, value } = parsed.where;
    docs = docs.filter((d) => {
      const match = String(fieldValue(d, field) ?? "") === value;
      return op === "=" ? match : !match;
    });
  }

  if (parsed.sort) {
    const { field, dir } = parsed.sort;
    docs = [...docs].sort((a, b) => {
      const av = String(fieldValue(a, field) ?? "");
      const bv = String(fieldValue(b, field) ?? "");
      return dir === "DESC" ? bv.localeCompare(av) : av.localeCompare(bv);
    });
  }

  if (parsed.limit) docs = docs.slice(0, parsed.limit);
  if (!docs.length) return `<p class="dataview-empty placeholder">No results.</p>`;

  const linkFor = (doc) =>
    `<a href="#" class="wikilink" data-target="${escapeHtml(doc.relPath.replace(/\.md$/, ""))}">${renderInline(doc.title)}</a>`;

  if (parsed.qtype === "LIST") {
    return `<ul class="dataview-list">${docs.map((d) => `<li>${linkFor(d)}</li>`).join("")}</ul>`;
  }

  const headerCells = (parsed.withoutId ? "" : "<th>File</th>") + parsed.fields.map((f) => `<th>${escapeHtml(f.label)}</th>`).join("");
  const rows = docs
    .map((d) => {
      const cells = parsed.fields.map((f) => `<td>${renderInline(String(fieldValue(d, f.field) ?? ""))}</td>`).join("");
      return `<tr>${parsed.withoutId ? "" : `<td>${linkFor(d)}</td>`}${cells}</tr>`;
    })
    .join("");
  return `<table class="dataview-table"><thead><tr>${headerCells}</tr></thead><tbody>${rows}</tbody></table>`;
}

// ---------- corpus loading & search ----------
async function loadCorpus() {
  const res = await fetch("data/corpus.json", { cache: "no-store" });
  corpus = await res.json();
  $("#corpus-status").textContent =
    `${corpus.docs.length} docs, ${corpus.chunks.length} chunks (built ${new Date(corpus.generatedAt).toLocaleDateString()})`;
  renderDocList();
}

function cosineSim(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-8);
}

async function embedQuery(text) {
  const res = await fetch(`${OLLAMA_HOST}/api/embed`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: corpus.embedModel, input: text }),
  });
  if (!res.ok) throw new Error(`Embedding request failed: ${res.status}`);
  const data = await res.json();
  return data.embeddings[0];
}

function topChunks(queryEmbedding, k = TOP_K) {
  const scored = corpus.chunks.map((c) => ({ c, score: cosineSim(queryEmbedding, c.embedding) }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k);
}

function docById(id) {
  return corpus.docs.find((d) => d.id === id);
}

// ---------- docs panel: topical grouping + search ----------
// The vault's own folder layout (PARA: 0-Inbox/1-Projects/2-Areas/3-Resources/...)
// is organized for maintaining the vault, not for a visitor looking for "everything
// about Manufacturing." Group by the module/topic tags already on each note instead,
// falling back to the note's kind for anything untagged.
const MODULE_LABELS = {
  manufacturing: "Manufacturing",
  costing: "Costing",
  "asset-management": "Asset Management",
  quality: "Quality Management",
  integration: "Connectivity & Integration",
  security: "Security & Permissions",
  technical: "Technical / PL-SQL",
  rrp: "Resource Requirements Planning",
  hcm: "Human Capital Management",
  purchasing: "Purchasing",
  "business-reporter": "Business Reporter",
  api: "API",
  ai: "AI / Copilot",
  "supply-chain": "Supply Chain",
  finance: "Finance",
  projects: "Projects (Module)",
  crm: "Customer Relationship Management",
  inventory: "Inventory Management",
  scheduling: "Scheduling",
  policy: "Policy",
};

const KIND_ORDER = ["Guides", "Glossary", "BDR Items", "Resources", "Areas", "Customer Engagements", "Other", "PDFs"];

function topicForDoc(doc) {
  if (doc.type === "pdf") return "PDF Library";
  for (const t of doc.tags || []) {
    if (MODULE_LABELS[t]) return MODULE_LABELS[t];
  }
  if (doc.docType === "bdr") return "BDR Reference";
  if (doc.docType === "area") return "Areas & Responsibilities";
  if (["project", "discovery-session", "crims-spec", "meeting"].includes(doc.docType)) return "Customer Engagements";
  if (doc.docType === "resource") return "General Resources";
  return "General";
}

function kindForDoc(doc) {
  if (doc.type === "pdf") return "PDFs";
  switch (doc.docType) {
    case "guide": return "Guides";
    case "glossary": return "Glossary";
    case "bdr": return "BDR Items";
    case "resource": return "Resources";
    case "area": return "Areas";
    case "project":
    case "discovery-session":
    case "crims-spec":
    case "meeting":
      return "Customer Engagements";
    default: return "Other";
  }
}

function renderDocList(filter = "") {
  const container = $("#doc-list");
  container.innerHTML = "";
  const f = filter.trim().toLowerCase();
  const topics = new Map(); // topic -> Map(kind -> docs[])
  let total = 0;
  for (const doc of corpus.docs) {
    if (f) {
      const matches =
        doc.title.toLowerCase().includes(f) ||
        doc.relPath.toLowerCase().includes(f) ||
        (doc.text && doc.text.toLowerCase().includes(f));
      if (!matches) continue;
    }
    const topic = topicForDoc(doc);
    const kind = kindForDoc(doc);
    if (!topics.has(topic)) topics.set(topic, new Map());
    const kinds = topics.get(topic);
    if (!kinds.has(kind)) kinds.set(kind, []);
    kinds.get(kind).push(doc);
    total += 1;
  }

  const sortedTopics = [...topics.keys()].sort((a, b) => {
    const pin = (t) => (t === "PDF Library" ? 2 : t === "General" ? 1 : 0);
    const pa = pin(a), pb = pin(b);
    return pa !== pb ? pa - pb : a.localeCompare(b);
  });

  for (const topic of sortedTopics) {
    const kinds = topics.get(topic);
    const topicCount = [...kinds.values()].reduce((n, arr) => n + arr.length, 0);

    const topicEl = document.createElement("div");
    topicEl.className = "topic-group";
    const topicTitle = document.createElement("div");
    topicTitle.className = "topic-title";
    topicTitle.innerHTML = `${escapeHtml(topic)} <span class="topic-count">${topicCount}</span>`;
    topicEl.appendChild(topicTitle);

    const sortedKinds = [...kinds.keys()].sort((a, b) => {
      const ia = KIND_ORDER.indexOf(a), ib = KIND_ORDER.indexOf(b);
      return (ia === -1 ? KIND_ORDER.length : ia) - (ib === -1 ? KIND_ORDER.length : ib);
    });

    for (const kind of sortedKinds) {
      const docs = kinds.get(kind).sort((a, b) => a.title.localeCompare(b.title));
      const kindEl = document.createElement("div");
      kindEl.className = "kind-group";
      if (sortedKinds.length > 1) {
        const kindTitle = document.createElement("div");
        kindTitle.className = "kind-title";
        kindTitle.textContent = kind;
        kindEl.appendChild(kindTitle);
      }
      const itemsEl = document.createElement("div");
      itemsEl.className = "doc-group-items";
      for (const doc of docs) {
        const btn = document.createElement("button");
        btn.className = "doc-item";
        btn.textContent = doc.title;
        btn.addEventListener("click", () => openDoc(doc.id));
        itemsEl.appendChild(btn);
      }
      kindEl.appendChild(itemsEl);
      topicEl.appendChild(kindEl);
    }
    container.appendChild(topicEl);
  }

  if (total === 0) {
    const empty = document.createElement("p");
    empty.className = "placeholder";
    empty.textContent = f ? `No notes or PDFs match "${filter}".` : "No notes or PDFs found.";
    container.appendChild(empty);
  }
}

// ---------- browse canvas: draggable/collapsible note cards ----------
const openCards = new Map(); // docId -> { el, collapsed }
let cardZIndex = 10;

function showBrowsePlaceholder() {
  const canvas = $("#browse-canvas");
  if ($("#browse-placeholder")) return;
  const p = document.createElement("p");
  p.id = "browse-placeholder";
  p.className = "placeholder";
  p.innerHTML = "Select a note or PDF from Docs to open it as a card. Drag cards by their title bar, and use &minus;/&#9633; to collapse or expand.";
  canvas.appendChild(p);
}

function bringToFront(card) {
  cardZIndex += 1;
  card.style.zIndex = cardZIndex;
}

function makeDraggable(card, handle, container) {
  handle.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".doc-card-btn")) return;
    e.preventDefault();
    bringToFront(card);
    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = card.offsetLeft;
    const startTop = card.offsetTop;
    handle.classList.add("dragging");
    handle.setPointerCapture(e.pointerId);

    function onMove(ev) {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      const maxLeft = Math.max(0, container.clientWidth - 80);
      const maxTop = Math.max(0, container.clientHeight - 40);
      card.style.left = `${Math.min(Math.max(0, startLeft + dx), maxLeft)}px`;
      card.style.top = `${Math.min(Math.max(0, startTop + dy), maxTop)}px`;
    }
    function onUp(ev) {
      handle.classList.remove("dragging");
      handle.releasePointerCapture(ev.pointerId);
      handle.removeEventListener("pointermove", onMove);
      handle.removeEventListener("pointerup", onUp);
    }
    handle.addEventListener("pointermove", onMove);
    handle.addEventListener("pointerup", onUp);
  });
}

function createCard(doc) {
  const canvas = $("#browse-canvas");
  $("#browse-placeholder")?.remove();

  const card = document.createElement("div");
  card.className = "doc-card";
  const offset = (openCards.size % 8) * 28;
  card.style.left = `${40 + offset}px`;
  card.style.top = `${30 + offset}px`;

  const header = document.createElement("div");
  header.className = "doc-card-header";

  const titleEl = document.createElement("span");
  titleEl.className = "doc-card-title";
  titleEl.textContent = doc.title;
  titleEl.title = doc.relPath;

  const controls = document.createElement("span");
  controls.className = "doc-card-controls";

  const collapseBtn = document.createElement("button");
  collapseBtn.type = "button";
  collapseBtn.className = "doc-card-btn";
  collapseBtn.textContent = "–";
  collapseBtn.title = "Collapse";

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "doc-card-btn";
  closeBtn.textContent = "×";
  closeBtn.title = "Close";

  controls.appendChild(collapseBtn);
  controls.appendChild(closeBtn);
  header.appendChild(titleEl);
  header.appendChild(controls);

  const body = document.createElement("div");
  body.className = "doc-card-body";
  body.innerHTML = `<p class="doc-card-path">${escapeHtml(doc.relPath)}</p>` +
    (doc.type === "pdf" ? `<pre>${escapeHtml(doc.text)}</pre>` : renderMarkdown(doc.text));

  card.appendChild(header);
  card.appendChild(body);
  canvas.appendChild(card);

  openCards.set(doc.id, { el: card, collapsed: false });
  bringToFront(card);
  makeDraggable(card, header, canvas);

  collapseBtn.addEventListener("click", () => {
    const collapsed = card.classList.toggle("collapsed");
    collapseBtn.textContent = collapsed ? "□" : "–";
    collapseBtn.title = collapsed ? "Expand" : "Collapse";
    const entry = openCards.get(doc.id);
    if (entry) entry.collapsed = collapsed;
  });

  closeBtn.addEventListener("click", () => {
    card.remove();
    openCards.delete(doc.id);
    if (openCards.size === 0) showBrowsePlaceholder();
  });
}

function openDocCard(doc) {
  const existing = openCards.get(doc.id);
  if (existing) {
    bringToFront(existing.el);
    existing.el.scrollIntoView({ block: "nearest", inline: "nearest" });
    return;
  }
  createCard(doc);
}

function openDocNormal(doc) {
  const view = $("#doc-view");
  view.innerHTML = `<h1>${escapeHtml(doc.title)}</h1><p class="doc-card-path">${escapeHtml(doc.relPath)}</p>` +
    (doc.type === "pdf" ? `<pre>${escapeHtml(doc.text)}</pre>` : renderMarkdown(doc.text));
}

function openDoc(id) {
  const doc = docById(id);
  if (!doc) return;
  switchTab("browse");
  if (state.viewMode === "normal") openDocNormal(doc);
  else openDocCard(doc);
}

// ---------- view mode (normal vs nerd) ----------
function setViewMode(mode) {
  state.viewMode = mode;
  document.querySelectorAll(".view-btn").forEach((b) => b.classList.toggle("active", b.dataset.mode === mode));
  $("#browse-normal").classList.toggle("active", mode === "normal");
  $("#browse-canvas").classList.toggle("active", mode === "nerd");
}

document.querySelectorAll(".view-btn").forEach((btn) => {
  btn.addEventListener("click", () => setViewMode(btn.dataset.mode));
});

// resolve a wikilink target by matching relPath (with or without extension)
function findDocByWikilinkTarget(target) {
  const clean = target.replace(/^3-Resources\//, "3-Resources/").trim();
  return corpus.docs.find((d) => {
    const rel = d.relPath.replace(/\.md$/, "");
    return rel === clean || rel.endsWith("/" + clean) || d.title === clean;
  });
}

document.addEventListener("click", (e) => {
  const link = e.target.closest(".wikilink");
  if (!link) return;
  e.preventDefault();
  const doc = findDocByWikilinkTarget(link.dataset.target);
  if (doc) openDoc(doc.id);
});

// ---------- tabs ----------
function switchTab(tab) {
  state.activeTab = tab;
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  $("#chat-panel").classList.toggle("active", tab === "chat");
  $("#browse-panel").classList.toggle("active", tab === "browse");
  $("#docs-panel").classList.toggle("active", tab === "docs");
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});

let searchDebounce;
$("#search").addEventListener("input", (e) => {
  clearTimeout(searchDebounce);
  const value = e.target.value;
  searchDebounce = setTimeout(() => renderDocList(value), 150);
});

if (window.matchMedia("(max-width: 700px)").matches) setViewMode("normal");

// ---------- persona list ----------
function loadPersonas() {
  const select = $("#persona-select");
  select.innerHTML = "";
  for (const [key, persona] of Object.entries(PERSONAS)) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = persona.label;
    select.appendChild(opt);
  }
  select.value = DEFAULT_PERSONA;
}

// ---------- model list ----------
async function loadModels() {
  try {
    const res = await fetch(`${OLLAMA_HOST}/api/tags`);
    const data = await res.json();
    const select = $("#model-select");
    select.innerHTML = "";
    const names = data.models.map((m) => m.name).filter((n) => !n.includes("embed"));
    for (const name of names.length ? names : [DEFAULT_CHAT_MODEL]) {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      select.appendChild(opt);
    }
    if (names.includes(DEFAULT_CHAT_MODEL)) select.value = DEFAULT_CHAT_MODEL;
  } catch {
    const select = $("#model-select");
    select.innerHTML = `<option value="${DEFAULT_CHAT_MODEL}">${DEFAULT_CHAT_MODEL}</option>`;
  }
}

// ---------- chat ----------
function addMessage(role, text) {
  const messages = $("#messages");
  const el = document.createElement("div");
  el.className = `msg ${role}`;
  el.textContent = text;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
  return el;
}

async function handleAsk(question) {
  addMessage("user", question);
  const sendBtn = $("#send-btn");
  sendBtn.disabled = true;

  const assistantEl = addMessage("assistant", "Thinking...");
  try {
    const queryEmbedding = await embedQuery(question);
    const hits = topChunks(queryEmbedding);
    const contextBlocks = hits.map((h, i) => {
      const doc = docById(h.c.docId);
      return `[${i + 1}] ${doc ? doc.title : h.c.docId}\n${h.c.text}`;
    });
    const usedDocs = [...new Set(hits.map((h) => h.c.docId))].map(docById).filter(Boolean);

    const userTurn = `CONTEXT:\n${contextBlocks.join("\n\n---\n\n")}\n\nQUESTION: ${question}`;

    const model = $("#model-select").value || DEFAULT_CHAT_MODEL;
    const persona = PERSONAS[$("#persona-select").value] || PERSONAS[DEFAULT_PERSONA];
    const res = await fetch(`${OLLAMA_HOST}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        stream: true,
        messages: [
          { role: "system", content: persona.prompt },
          { role: "user", content: userTurn },
        ],
      }),
    });
    if (!res.ok || !res.body) throw new Error(`Chat request failed: ${res.status}`);

    assistantEl.innerHTML = "";
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let full = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop();
      for (const line of lines) {
        if (!line.trim()) continue;
        const obj = JSON.parse(line);
        if (obj.message && obj.message.content) {
          full += obj.message.content;
          assistantEl.innerHTML = renderMarkdown(full);
          $("#messages").scrollTop = $("#messages").scrollHeight;
        }
      }
    }

    if (usedDocs.length) {
      const sourcesEl = document.createElement("div");
      sourcesEl.className = "sources";
      sourcesEl.textContent = "Sources: " + usedDocs.map((d) => d.title).join(" · ");
      assistantEl.appendChild(sourcesEl);
    }
  } catch (err) {
    assistantEl.textContent = `Error: ${err.message}. Is Ollama running (ollama serve)?`;
  } finally {
    sendBtn.disabled = false;
  }
}

$("#chat-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("#chat-input");
  const q = input.value.trim();
  if (!q) return;
  input.value = "";
  handleAsk(q);
});

$("#chat-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    $("#chat-form").requestSubmit();
  }
});

loadCorpus();
loadModels();
loadPersonas();
