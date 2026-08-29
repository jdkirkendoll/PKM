# Local Site

A fully offline, local-only website for this vault: browse every note and every PDF in the local PDF library, and ask questions answered by a small local LLM running through [Ollama](https://ollama.com) — no internet connection, no API tokens, nothing leaves this machine.

## How it works

- **`build/index.mjs`** walks this vault's markdown notes and `~/Downloads/PDF Library/`, extracts text (via `pdftotext`, already installed with Homebrew's `poppler`), splits it into chunks, and embeds each chunk with a local Ollama embedding model. The result is one file: `site/data/corpus.json`.
- **`site/`** is a static site (plain HTML/CSS/JS, no build step, no framework). Opening it in a browser:
  - lets you browse every indexed note/PDF in a sidebar, rendered as readable text.
  - lets you ask a question; the page embeds your question, does a cosine-similarity search over `corpus.json` in-browser, and sends the top matching chunks plus your question to a local Ollama chat model, streaming the answer back.

Everything — embedding and chat — runs against `http://localhost:11434`, which is Ollama's local API server. Nothing is sent anywhere else.

## One-time setup (already done on this machine)

Ollama is installed and running as a background service, and two models are pulled:

```
brew install ollama
brew services start ollama       # runs Ollama in the background permanently
ollama pull nomic-embed-text     # embedding model used to build & query the index
ollama pull llama3.2:3b          # small, fast default chat model
```

You can swap in a different chat model any time — pull it (`ollama pull phi3:mini`, `ollama pull llama3.1:8b`, etc.) and pick it from the model dropdown in the site itself. Bigger models answer better but slower; `llama3.2:3b` is the "portable, runs on anything" default.

## Building/rebuilding the index

Run this whenever vault notes or the PDF library change materially:

```
cd "Local Site"
node build/index.mjs
```

This takes a few minutes the first time (embedding every chunk) and overwrites `site/data/corpus.json`. There's no incremental mode — it's a full rebuild every time, which is fine at this vault's size (a few hundred notes, ~50 PDFs).

## Running the site

Ollama must be running (`brew services start ollama` — it's set to run permanently in the background, so this is usually already true). Then serve the static site from this folder over plain HTTP (not `file://`, since the browser needs a real origin to call Ollama's local API):

```
cd "Local Site/site"
python3 -m http.server 8000
```

Open **http://localhost:8000** in a browser. Stop the server with Ctrl+C when done; it doesn't need to run all the time.

## Notes

- The corpus (`site/data/corpus.json`) is a generated artifact — safe to delete and rebuild, and reasonably large (embeddings for every chunk), so consider whether it belongs in git or `.gitignore`.
- The "Ask" tab only ever answers from indexed content — if nothing relevant was found, the model is instructed to say so rather than fall back on general knowledge.
- To fully stop everything: `brew services stop ollama` (and stop the `http.server` process).
