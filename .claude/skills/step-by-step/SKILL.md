---
name: step-by-step
description: Builds a step-by-step how-to guide for an IFS Cloud task by pulling every relevantly-tagged note and PDF-derived text from the Local Site's corpus index, then asking the local Ollama chat model (not Claude) to write the guide — keeping generation fully offline like the rest of the Local Site project. Use when the user asks for a step-by-step guide, walkthrough, or how-to built from local vault content and written by the local model, or runs /step-by-step.
---

# Step-by-Step Guide Builder

Builds an IFS Cloud how-to guide the way the `research` skills do, except retrieval pulls from this vault's own indexed corpus instead of the web, and the actual writing is done by the local Ollama model — via the same `/api/chat` endpoint the Local Site website's chat uses — not by you. This keeps guide generation fully local/offline, consistent with the rest of the `Local Site` project. Your job in this skill is retrieval, context-assembly, and packaging the result — not authoring the guide.

## Prerequisites

This skill depends on `Local Site/site/data/corpus.json` (built by `Local Site/build/index.mjs`) and a running local Ollama server (default `http://localhost:11434` — check the `OLLAMA_HOST` line in `Local Site/site/app.js` if unsure how this vault resolves it). If the corpus file is missing, or its `generatedAt` field looks clearly stale against recent vault edits, tell the user and offer to run `node "Local Site/build/index.mjs"` first (needs Ollama's embed model running; takes a few minutes for the whole vault).

## Getting the topic

- If invoked with an argument, that's the task (e.g. "set up security checkpoints", "configure a new cost bucket").
- If invoked with no argument, ask what step-by-step guide to build before doing anything else.

## Step 1: Find relevantly-tagged notes and PDFs in the corpus

Every note in `corpus.json`'s `docs[]` array carries `tags` (module tags this vault uses — `manufacturing`, `costing`, `asset-management`, `quality`, `integration`, `security`, `technical`, `rrp`, `hcm`, `purchasing`, `business-reporter`, `api`, `ai`, `supply-chain`, `finance`, `crm`, `inventory`, `scheduling`, `policy` — see `MODULE_LABELS` in `Local Site/site/app.js` for the current full list) and `docType` (`guide`/`glossary`/`bdr`/`area`/`resource`/...). PDFs carry `type: "pdf"` with the full `pdftotext`-extracted text already merged in, but no tags — a keyword pass is the only way to catch those.

1. From the task, infer which module tag(s) it belongs to (e.g. "security checkpoints" → `security`), and pick a few keyword variants from the task wording.
2. Query the corpus for candidates — tag matches plus a keyword pass over title/text for anything relevant that isn't tagged:

   ```bash
   node -e '
   const fs = require("fs");
   const corpus = JSON.parse(fs.readFileSync("Local Site/site/data/corpus.json", "utf8"));
   const modules = ["security"];                      // set from your inference
   const keywords = ["checkpoint", "permission set"];  // set from the task wording
   const hits = corpus.docs.filter(d =>
     modules.some((m) => (d.tags || []).includes(m)) ||
     keywords.some((k) => d.title.toLowerCase().includes(k.toLowerCase()) || d.text.toLowerCase().includes(k.toLowerCase()))
   );
   for (const d of hits) console.log(`${d.type}\t${d.docType || ""}\t${d.text.length}\t${d.relPath}\t${d.title}`);
   '
   ```

3. Read the printed candidate list and judge which ones are actually relevant to *this specific task*, not just the module in general — this is what keeps the guide focused instead of dumping an entire module's glossary into the model. Aim for roughly 5–15 docs: enough to cover the task end to end without blowing past the local model's context window. Prefer guides and the task's own PDF source over loosely-related glossary entries.

## Step 2: Assemble the context

Full note bodies and full PDF text are already sitting in `corpus.json` as each doc's `text` field — there's no separate PDF file to go re-open. Pull the selected docs' `text` by `relPath` into one context file, each section clearly labeled with its source title:

```bash
node -e '
const fs = require("fs");
const corpus = JSON.parse(fs.readFileSync("Local Site/site/data/corpus.json", "utf8"));
const wanted = new Set([/* the relPaths you picked in Step 1 */]);
const selected = corpus.docs.filter((d) => wanted.has(d.relPath));
for (const d of selected) {
  console.log(`\n\n===== SOURCE: ${d.title} (${d.relPath}) =====\n`);
  console.log(d.text);
}
' > /tmp/step-by-step-context.txt
```

Check the resulting file size. As a rough rule of thumb, keep it well under ~6000 words for a small local model (e.g. `llama3.2:3b`) — if it's clearly too big, trim whole low-value sections rather than truncating a document mid-way.

## Step 3: Ask the local Ollama model to write the guide

POST to the same endpoint the website's chat uses — do not write the guide's steps yourself, the point of routing through Ollama is that the answer comes from the local model like the rest of this project. Pick a chat model via `curl -s http://localhost:11434/api/tags` (prefer whatever the user is already using on the site if you can tell, otherwise fall back to `llama3.2:3b`).

Write the request body to a temp JSON file with a small script (don't hand-inline the context into a shell heredoc — vault text can contain quotes/newlines that would break naive JSON construction):

```bash
node -e '
const fs = require("fs");
const context = fs.readFileSync("/tmp/step-by-step-context.txt", "utf8");
const task = "set up security checkpoints"; // the actual task text
const body = {
  model: "llama3.2:3b",
  stream: false,
  options: { num_ctx: 8192 }, // Ollama defaults to a 2048-token window regardless of the model's real limit — an assembled context this size needs it raised explicitly or it gets silently truncated
  messages: [
    { role: "system", content: "You are an IFS Cloud functional consultant. Using ONLY the CONTEXT provided, write a step-by-step how-to guide for the requested task: numbered steps in the order they would actually be performed in the application, covering menu paths, page/tab/field names where the context gives them. If the context leaves a step ambiguous or missing, say so plainly rather than guessing. Do not invent steps the context does not support." },
    { role: "user", content: `CONTEXT:\n${context}\n\nTASK: ${task}` },
  ],
};
fs.writeFileSync("/tmp/step-by-step-request.json", JSON.stringify(body));
'
curl -s http://localhost:11434/api/chat -d @/tmp/step-by-step-request.json > /tmp/step-by-step-response.json
node -e 'console.log(JSON.parse(require("fs").readFileSync("/tmp/step-by-step-response.json","utf8")).message.content)'
```

## Step 4: Save the guide

Save the model's output to `0-Inbox/<Task> — Step-by-Step.md`, same guide frontmatter shape as `/research` but noting the local-model provenance:

```yaml
---
type: guide
topic: <task>
source: local-ollama-synthesis
model: <model used>
created: <today>
tags: [guide, ifs, step-by-step, <module tag(s)>]
---
```

Body: `## Steps` (the model's output — lightly clean up obvious markdown issues but don't rewrite its content or add steps of your own), then `## Sources` listing every note/PDF title actually pulled into the context in Step 2.

## When done

Report: which module(s)/keywords you searched, which docs you selected as context versus discarded, which model generated the guide, and where it was saved (`0-Inbox/<Title>.md`). Don't commit — leave that to the user. Flag plainly that the guide's steps were written by the local model from vault context and haven't been verified by you line-by-line, so it is worth a skim before relying on it for anything customer-facing.
