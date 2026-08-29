---
name: organize-inbox
description: Process notes sitting in 0-Inbox/, file each into the right PARA folder (1-Projects/2-Areas/3-Resources/4-Archive), add consistent frontmatter, and link it to related existing notes. Use when the user asks to organize, sort, process, clean up, or file their inbox notes, or runs /organize-inbox.
---

# Organize Inbox

Process every note in `0-Inbox/` (skip `README.md`) and file it into the vault's PARA structure at the repo root (`1-Projects/`, `2-Areas/`, `3-Resources/`, `4-Archive/`).

## Per-note steps

1. Read the note.
2. Decide the destination:
   - **Customer/client engagement work** (the note has, or should have, a `customer` frontmatter value; meeting notes, CRIMS specs, and discovery-session notes almost always fall here) — this note does not belong in this vault at all. It belongs in the separate [PKM-CUST](https://github.com/jdkirkendoll/PKM-CUST) vault. Do not file it here; flag it for the user to move instead (see below).
   - **1-Projects/** — has a concrete goal and an end state, and is not customer work. File it flat: `1-Projects/<Name>/<Name>.md`.
   - **2-Areas/** — an ongoing responsibility with no finish line.
   - **3-Resources/** — reference material. Research write-ups / synthesized guides go in `3-Resources/Guides/`.
   - **4-Archive/** — only if the note is clearly about something already finished/inactive.
3. Search the rest of the vault (grep across the PARA folders) for existing notes on the same topic, project, or entity. Add a `## Related` section to the note linking them with `[[wikilinks]]`.
4. Add or normalize frontmatter. Match the shape used by the relevant template in `Templates/` (`Project.md`, `Guide.md`, `Meeting.md`) — at minimum every note gets:
   ```yaml
   ---
   type: project | area | resource | guide | meeting
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

## Customer notes don't belong in this vault

If a note is customer/client engagement work (has a `customer` value, or is a meeting/CRIMS-spec/discovery-session note tied to a specific customer), leave it in `0-Inbox/` rather than filing it, and add this callout at the top of the note body:

```
> [!warning] Belongs in PKM-CUST
> This is customer engagement work for `<customer>` — move it to the PKM-CUST vault instead of filing it here.
```

This also applies to any note you encounter anywhere in this vault (not just during an inbox run) that turns out to be customer-specific — flag it the same way rather than moving it into a folder here.

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
