---
name: format-note
description: Clean up the formatting of one markdown note (or file a PDF) sitting in 0-Inbox/, add standard PARA frontmatter, and sort it under the matching Area if its content fits one — creating that Area (following the vault's existing structure) if it doesn't exist yet. Use when the user hands you a specific inbox note or PDF to tidy up or file, or runs /format-note <name>.
---

# Format Note

Take **one** item from `0-Inbox/`, clean it up, give it proper frontmatter, and file/link it correctly. Unlike `/organize-inbox` (which batch-processes everything sitting in the inbox), this works on a single item the user points to by name.

## 1. Identify the target item

- Items to be formatted always live in `0-Inbox/`. If a filename is given as an argument, use `0-Inbox/<name>.md` or `0-Inbox/<name>.pdf`.
- If nothing is given, ask the user which item in `0-Inbox/` they mean (list what's there if it helps).
- Branch based on file type: `.md` notes follow steps 2–5 below as written. `.pdf` files follow the lightweight PDF path instead (see "PDF handling").

## 2. Clean up the formatting

Read the note and tidy its body without changing its meaning or removing content:
- One `#` H1 matching the title, then a sensible heading hierarchy below it (`##`, `###`) — don't skip levels.
- Consistent list markers (`-` for bullets), consistent spacing between sections (one blank line), no trailing whitespace or triple-blank-lines.
- Fix obviously broken markdown (unclosed links, malformed tables) but don't rewrite prose or restructure content the user wrote intentionally.

### PDF handling

Don't extract or read the full document — that wastes tokens on content that's rarely needed in full. Instead:

- Read only as many pages as it takes to reach the **complete table of contents** (usually the first few pages), using the Read tool's page-range option. Stop as soon as you have it — don't keep reading into the body chapters.
- If the PDF has no table of contents, just read the title page and enough of the intro to describe it in a sentence or two — still don't read the full body.
- Write a brief (2–4 sentence) description of what the document covers, based on the title and table of contents/section list.
- The note's body is this description plus a `## Contents` section listing the ToC entries as bullets (if one existed), and a `## Source` line linking to the PDF itself.
- Move the PDF alongside the note into the same destination folder (keep its original filename) so the link resolves; don't rename or otherwise touch the PDF's content.
- Skip straight to step 3 (frontmatter) using `type: resource` (or `guide` if it's clearly reference material) and `source: pdf`.

## 3. Add frontmatter

Use the same frontmatter shape as `/organize-inbox`:
```yaml
---
type: project | area | resource | guide | meeting
tags: [...]
created: YYYY-MM-DD   # today, unless the note itself states otherwise
# projects only:
status: active
area:
due:
# guides/resources only:
source: web | notes | mixed | pdf
---
```
If the note already has frontmatter, normalize it to this shape rather than duplicating fields.

If the note is customer/client engagement work (has a `customer` value, or is a meeting/CRIMS-spec/discovery-session note tied to a specific customer), it doesn't belong in this vault — see "Customer notes don't belong in this vault" in `.claude/skills/organize-inbox/SKILL.md` and flag it the same way instead of filing it here.

## 4. Match it to an Area

Read through `2-Areas/*.md` and judge whether this note's subject matter is the responsibility of one of those existing areas (e.g. a note about audit checklists belongs with `Quality Management`).

- **Match found**: link the note to that area and the area back to the note, using full vault-relative wikilink paths on both sides (e.g. `[[2-Areas/Quality Management|Quality Management]]` and `[[3-Resources/Guides/<Note>|<Note>]]`) — never bare `[[Name]]` links, since several areas and resources in this vault share basenames and bare links resolve ambiguously.
- **No match**: ask the user for the name of the area this belongs to (it may be a brand-new area, or an existing PARA item they know the name of that you didn't recognize as a match).
  - If it's a genuinely new area, create `2-Areas/<Name>.md` following the exact structure of the existing area files: 
    ```yaml
    ---
    type: area
    tags: [area]
    created: YYYY-MM-DD
    ---

    # <Name>
    ```
    Then link the note being processed under it (and back), the same way existing areas cross-link to their resources — mirror whatever section pattern the other area files use (e.g. a `## BDR` section links to a BDR resource; use an analogous heading for whatever kind of note this is, such as `## Guides` or `## Notes`).

## 5. File it in the right PARA folder

Same destination rules as `/organize-inbox`: `1-Projects/` for non-customer notes with a concrete end state, `2-Areas/` for ongoing-responsibility notes, `3-Resources/` (guides under `3-Resources/Guides/`) for reference material, `4-Archive/` only if clearly inactive. Move the file if it isn't already there, and rename it if it has a generic name. For a PDF item, move the original PDF into the same destination folder as its note (per the PDF handling step above).

## When done

Report what changed: the destination path, the frontmatter applied, which area it was linked to (or that a new area was created), and any formatting cleanup worth flagging. Don't commit — leave that to the user unless they explicitly ask you to commit.
