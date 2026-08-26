---
name: organize-inbox
description: Process notes sitting in 0-Inbox/, file each into the right PARA folder (1-Projects/2-Areas/3-Resources/4-Archive), add consistent frontmatter, and link it to related existing notes. Use when the user asks to organize, sort, process, clean up, or file their inbox notes, or runs /organize-inbox.
---

# Organize Inbox

Process every note in `0-Inbox/` (skip `README.md`) and file it into the vault's PARA structure at the repo root (`1-Projects/`, `2-Areas/`, `3-Resources/`, `4-Archive/`).

## Per-note steps

1. Read the note.
2. Decide the destination:
   - **1-Projects/** — has a concrete goal and an end state. Give it its own subfolder: `1-Projects/<Name>/<Name>.md`.
   - **2-Areas/** — an ongoing responsibility with no finish line.
   - **3-Resources/** — reference material. Research write-ups / synthesized guides go in `3-Resources/Guides/`.
   - **4-Archive/** — only if the note is clearly about something already finished/inactive.
3. Search the rest of the vault (grep across the PARA folders) for existing notes on the same topic, project, or entity. Add a `## Related` section to the note linking them with `[[wikilinks]]`.
4. Add or normalize frontmatter:
   ```yaml
   ---
   type: project | area | resource | guide
   tags: [...]
   created: YYYY-MM-DD   # today, unless the note itself states otherwise
   # projects only:
   status: active
   area:
   due:
   # guides only:
   source: web | notes | mixed
   ---
   ```
5. Move the file into place. If it has a generic name (`Untitled`, a timestamp, etc.), rename it to something descriptive based on its content.

## Handling uncertainty

- **Interactive session** (you can talk to the user right now): if a note's destination is genuinely ambiguous, ask directly with a question rather than guessing.
- **Unattended/scheduled run** (no one to ask): never block. Best-guess the destination, then mark it for review:
  - Add `confidence: low` to the frontmatter.
  - Add this callout at the top of the note body, filled in:
    ```
    > [!warning] Needs review
    > Filed here because <one-line reasoning>. Could also fit [[<other candidate>]].
    ```

Flagged notes surface in `Dashboards/Needs Review.md`. When the user confirms or corrects a flagged note, remove `confidence: low` and the callout.

## When done

Report a short summary: what moved where, and what got flagged for review. If this is an unattended run in a git repo, commit and push the changes with a message summarizing what was filed (e.g. "Organize inbox: file 4 notes, flag 1 for review").
