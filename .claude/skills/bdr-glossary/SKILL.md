---
name: bdr-glossary
description: Research every unique BDR data point in one area's BDR file, write a short glossary entry for each in 3-Resources/Glossary/, and link that area's BDR table to them. Processes exactly one area per invocation — pick the area explicitly, or leave it out to auto-pick the next area that still needs glossary coverage (this is what the daily scheduled run does). Use when the user asks to build out the BDR glossary, or runs /bdr-glossary.
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
3. For each unique Data Point:
   - **If a glossary note already exists** for it (`3-Resources/Glossary/<sanitized name>.md`, from this or an earlier area's run), don't re-research it — just make sure the BDR row links to it.
   - **If it doesn't exist yet**, research it (IFS Community forum, official IFS documentation, general web — same sourcing approach as `/research`) and write a new glossary note.
4. To keep this efficient, group data points by their `Name`/sub-category column (e.g. all "BDR for FMEA" rows) before researching — related data points are usually explained together on the same doc page, so one search/fetch can inform several entries instead of one each.

## Writing a glossary entry

File: `3-Resources/Glossary/<Data Point, with any "/" replaced by "-">.md`

```yaml
---
type: glossary
term: <Data Point, exact original text>
source: web
created: <today>
tags: [glossary, ifs, <module tag, e.g. quality, purchasing, hcm>]
---
```

Body: a `## Summary` of 2–5 sentences — what the data point configures and why it matters, not a full guide. Add a `## Related` section linking back to the area's BDR file (`[[3-Resources/BDR/<Area>|<Area> (BDR)]]`) and to any other glossary entries it's naturally grouped with. Add a `## Sources` section with the doc/forum links actually used.

**Be honest about confidence.** If nothing specific to this exact data point turned up and the description is inferred from general domain knowledge or adjacent documentation, say so plainly — e.g. a `> [!note] Confidence: moderate` callout — rather than presenting an inferred description as verified fact. Never fabricate specifics (exact field lists, exact behavior) that weren't actually found.

## Linking the BDR table

In the area's BDR file, replace each `Data Point` cell's plain text with a link to its glossary entry, keeping the original text as the display label:

```
| [[3-Resources/Glossary/<sanitized name>|<original Data Point text>]] |
```

Do this for every row using that data point, including duplicates within the same table.

## When done

Report: which area was processed, how many new glossary entries were written vs. how many already existed and just got linked, and which area (if any) will be picked up next time this runs unattended.

If this is an unattended/scheduled run in a git repo, commit and push the changes with a message naming the area processed (e.g. "BDR glossary: process Manufacturing").
