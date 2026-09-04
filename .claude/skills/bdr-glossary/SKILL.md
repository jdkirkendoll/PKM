---
name: bdr-glossary
description: Research every unique BDR data point in one area's BDR file, write a short glossary entry for each in 3-Resources/Glossary/, and link that area's BDR table to them. Checks the local IFS docs corpus before the live web, and supplements existing entries when it turns up real new information. Processes exactly one area per invocation — pick the area explicitly, or leave it out to auto-pick the next area that still needs glossary coverage (this is what the daily scheduled run does). Use when the user asks to build out the BDR glossary, or runs /bdr-glossary.
---

# BDR Glossary

Turn every unique "Data Point" in one area's BDR table into a short glossary entry under `3-Resources/Glossary/`, then link that BDR table's `Data Point` column to the entries. Processes **exactly one area per run** — never multiple areas in a single invocation, even in unattended/scheduled mode.

## Picking the area

- If invoked with an area name, use that area's file at `3-Resources/BDR/<Area>.md`.
- If invoked with no argument (this is how the daily schedule calls it), **first check whether any area still needs work at all**: go through `3-Resources/BDR/*.md` in alphabetical order and look for the first area that has at least one unique Data Point whose `Data Point` cell isn't already a `[[3-Resources/Glossary/...]]` link. This makes the vault itself the source of truth for "what's next" — no separate progress-tracking file to fall out of sync.
  - If such an area exists, process only that one area.
  - If every area's every row is already linked, **do nothing** — don't re-research, don't rewrite any file, don't touch git. Just report "all areas already have full glossary coverage" and stop. This check must run before any research or writing starts, every time, including on the daily scheduled run — the whole point is that once the glossary is complete, the daily job becomes a no-op instead of redoing finished work.

## Processing one area

1. Read the area's BDR file(s) — the merged Human Capital Management file has two tables (Payroll, HR/T&A/Expenses); process both when that area comes up.
2. Collect the unique Data Point values across its table(s) (the same activity name can appear more than once in one area, e.g. under different `Name`/sub-category rows — dedupe those).
3. To keep this efficient, group data points by their `Name`/sub-category column (e.g. all "BDR for FMEA" rows) before researching — related data points are usually explained together on the same doc page or corpus file, so one lookup can inform several entries instead of one each.
4. For each group, check the local corpus first (below), then research each unique Data Point in it per "Writing/updating a glossary entry."

## Check the local corpus first

Before any live web research, check the local IFS docs mirror at `~/Library/Mobile Documents/com~apple~CloudDocs/ERP Companion/parsed_markdown/` — roughly 4,100 files of IFS Cloud's own documentation, organized into folders by functional area (`IFS Functional Area Models/<Area>/`, `Topics in IFS Cloud/<Sub-process>/`, plus a few product-specific trees). It's frequently the single best source for a data point — official, already covers most areas' basic-data setup, and several "BDR for `<Sub-process>`" pages in it look like IFS's own source material for exactly this kind of activity list.

1. **Filename match first**: `find "<corpus>" -iname "*<data point term>*"`.
2. **Fall back to a content search** if the filename doesn't match: `grep -rli "<term>" "<corpus>"` — many data points are covered inside a broader "About `<X>`" or "BDR for `<X>`" page without the term itself being in the title.
3. When several files match, prefer the one under the area's own natural subfolder (e.g. Purchasing → `Procurement/`, HCM → `Human Resources/` or `Employee Administration/`, Customer Orders → `Sales/`) over an unrelated area that happens to mention the term in passing.
4. Not every area is covered — this corpus is IFS Cloud's own docs, so bolt-on or third-party tooling (e.g. a Scheduling area's iSWB/ADM/IMS/TMS profile data points) won't be in it. If nothing turns up after both a filename and content search, treat it the same as "not found locally" and move on to live web research.

## Writing/updating a glossary entry

For each unique Data Point:

- **No glossary note exists yet** (`3-Resources/Glossary/<sanitized name>.md` doesn't exist): write one.
  - If the local corpus search above found a solid match, write the entry from it. Set `source: local-docs` and cite the corpus file(s) actually read under `## Sources` (their path relative to `parsed_markdown/`, not a URL — they aren't web-fetched).
  - If the corpus had nothing usable, fall back to live web research the same way `/research` does (IFS Community forum, official IFS documentation site, general web). Set `source: web`.
  - If you used both because the corpus only partially covered it, set `source: mixed` and list both kinds of sources.
- **A glossary note already exists**: by default don't re-research it — just make sure the BDR row links to it. But since you're already reading the relevant local corpus file for this data point's group anyway, check whether it contains real new information the existing entry doesn't have — a concrete detail replacing a `Confidence: moderate` guess, an exact field/behavior the entry only inferred before, or a relationship to another data point not yet mentioned. If so, **supplement the existing entry**: fold the new material into its `## Summary`, add the corpus file to its `## Sources`, and only remove or soften an existing `Confidence` callout if the new source actually substantiates what it was hedging. Don't touch an entry just to reword it — only when there's genuinely new substance to add.

File: `3-Resources/Glossary/<Data Point, with any "/" replaced by "-">.md`

```yaml
---
type: glossary
term: <Data Point, exact original text>
source: web | local-docs | mixed
created: <today>
tags: [glossary, ifs, <module tag, e.g. quality, purchasing, hcm>]
---
```

Body: a `## Summary` of 2–5 sentences — what the data point configures and why it matters, not a full guide. Add a `## Related` section linking back to the area's BDR file (`[[3-Resources/BDR/<Area>|<Area> (BDR)]]`) and to any other glossary entries it's naturally grouped with. Add a `## Sources` section with the doc/forum links and/or corpus file paths actually used.

**Be honest about confidence.** If nothing specific to this exact data point turned up and the description is inferred from general domain knowledge or adjacent documentation, say so plainly — e.g. a `> [!note] Confidence: moderate` callout — rather than presenting an inferred description as verified fact. Never fabricate specifics (exact field lists, exact behavior) that weren't actually found.

## Linking the BDR table

In the area's BDR file, replace each `Data Point` cell's plain text with a link to its glossary entry, keeping the original text as the display label:

```
| [[3-Resources/Glossary/<sanitized name>|<original Data Point text>]] |
```

Do this for every row using that data point, including duplicates within the same table.

## When done

Report: which area was processed, how many new glossary entries were written (and how many of those came from the local corpus vs. the web vs. both), how many already existed and just got linked as-is, how many existing entries got supplemented with new information, and which area (if any) will be picked up next time this runs unattended.

If this is an unattended/scheduled run in a git repo, commit and push the changes with a message naming the area processed (e.g. "BDR glossary: process Manufacturing").
