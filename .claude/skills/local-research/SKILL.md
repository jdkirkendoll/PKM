---
name: local-research
description: Answers questions or writes guides from PDFs already saved locally under ~/Downloads/PDF Library/<domain>/ (captured via the pdf-library-extension), instead of fetching from the web. Use when the user asks to look something up "from the PDFs I saved", "from what I captured", or from a specific local doc folder, or runs /local-research. Not for general web lookups (use /research) or scraping a single new URL (use /web-clip).
---

# Local Research

Research assistant that answers from PDFs already captured to disk — under `~/Downloads/PDF Library/<domain>/`, one subfolder per source site — rather than fetching anything from the web. Complements `/research` (searches the live web) and `/web-clip` (scrapes one URL you point to): this one searches what's already sitting in the local PDF library.

## Getting the topic

- If invoked with an argument, that's the topic or question.
- If invoked with no argument (including via `/local-research`), ask what to look up before doing anything else.

## Step 1: Check existing vault coverage first

Most of what's in the PDF library has already been mined into `3-Resources/Guides/` and `3-Resources/Glossary/` (e.g. the IFS Security & Permission Sets, Connect & Connectivity, and Background & System Processing guides came from this exact folder).

- If an existing guide or glossary entry already answers the question, answer from that directly and say so — don't re-open the PDFs.
- If it's only partially covered, or clearly not covered, continue to Step 2.

## Step 2: Find candidate PDFs

Base folder: `~/Downloads/PDF Library/` (one subfolder per domain the extension captured from, e.g. `docs.ifs.com/`).

1. **Filename match first** — list filenames in the relevant subfolder(s) and match on keywords from the question; filenames are typically `"<Topic> - ... (<date>).pdf"`, so topic words usually appear directly in the name.
2. **Fall back to a content search** if filenames don't obviously match — use Spotlight's full-text index rather than opening every file:
   ```
   mdfind -onlyin "~/Downloads/PDF Library" "<query terms>"
   ```
   This searches the actual PDF text (macOS indexes it automatically) and is far cheaper than reading every candidate file. Confirmed working in this vault's library — e.g. searching "Security Checkpoint" correctly surfaces `Security Checkpoints - Technical Documentation For IFS Cloud (...).pdf` and the related `Access Control` PDF.
3. If neither turns up anything, say so plainly rather than guessing from an unrelated PDF.

## Step 3: Read and answer

Read only the candidate file(s) found above (the Read tool handles PDFs directly; use its `pages` parameter for long documents rather than pulling one in whole when only a section is relevant). Then ask the same fork `/research` uses:

- **Quick answer** — answer directly in chat, citing which PDF(s) it came from.
- **A full guide** — written up and filed to `0-Inbox/` for the normal review flow, same frontmatter shape as `/research` guides but with `source: local-pdf`:
  ```yaml
  ---
  type: guide
  topic: <topic>
  source: local-pdf
  created: <today>
  tags: [guide, ifs, ...]
  ---
  ```
  Body: `## Summary`, `## Details`, `## Sources` (list the PDF filenames actually used).

Don't guess which one the user wants — ask, unless they already said in the same message that gave the topic.

## Step 4: Leave the source files alone

Don't rename or move the PDFs read here (no `-done` suffix). That convention was for the one-time full-folder conversion into guides; these files may get queried again for a different question later, so they should stay exactly as they are.

## When done

Report which PDF(s) were used, and either the direct answer or where the guide landed (`0-Inbox/<Title>.md`). Don't commit — leave that to the user.
