---
name: 101-guide
description: Write a "<Area> 101" introductory guide for one functional area, weaving its already-written BDR glossary entries into a narrative that explains how the pieces fit together (e.g. Costing 101, Resource Requirements Planning 101). Use when the user asks for a 101/intro/overview guide for an area, or runs /101-guide.
---

# 101 Guide

Turn one area's scattered BDR glossary entries into a single connected "101" guide — the read-first primer that explains *how the pieces relate* before someone works through the raw BDR table row by row. Glossary entries hold atomic, sourced facts about one term each; a 101 guide holds the narrative hierarchy that stitches them together. Processes **exactly one area per run**.

## Picking the area

- If invoked with an area name, use that area's BDR file(s) at `3-Resources/BDR/<Area>.md`.
- If invoked with no argument, ask which area.

## Prerequisite: glossary coverage

A 101 guide is only as good as the glossary entries it links to, so check coverage first: in the area's BDR file(s), count Data Point rows whose cell is already a `[[3-Resources/Glossary/...]]` link vs. not.

- **Fully or mostly linked already** — proceed.
- **Little or no glossary coverage yet** — don't write a guide from scratch without sourced entries to lean on. Tell the user and offer to run `/bdr-glossary <Area>` first (it may take several passes for a large area), then come back to this once coverage exists. Don't silently invoke it yourself unless the user says to.

## Researching the structure

Reading the glossary entries alone gives facts but not relationships. Before writing:

1. Read every glossary entry the area's BDR table links to.
2. Read (or re-read) the 1-2 broadest official IFS doc pages for the area (e.g. an "About <Area>" or "About <Sub-process>" overview page) — this is usually where the actual hierarchy/order of setup is explained, which individual data-point-level glossary entries won't spell out on their own. Use WebSearch/WebFetch the same way `/research` does.
3. From that, work out the area's own natural structure — most IFS Cloud functional areas decompose into a small number of layers or phases (Costing's was Cost Set → Cost Template → Cost Bucket → Cost Element, then ABC, then Object Costing; RRP's was work centers → resources → resource routings → period templates). Don't force-fit another area's shape onto this one — find the grouping that this area's own setup order actually implies.

## Writing the guide

File: `3-Resources/Guides/<Area> 101.md`

```yaml
---
type: guide
topic: <Area> 101
source: web
created: <today>
tags: [guide, ifs, <module tag, matching the area's glossary tag>]
---
```

Body, matching the shape of `3-Resources/Guides/Costing 101.md` and `3-Resources/Guides/Resource Requirements Planning 101.md`:

- **Opening paragraph** (no heading, right under the H1): what the area is for in plain terms, and a link to `[[3-Resources/BDR/<Area>|<Area> BDR]]` framed as "read this before working through the BDR."
- `## Summary` — one dense paragraph naming the core structure end-to-end (the layers/phases identified above and how they connect), written to stand alone if that's the only part someone reads.
- `## Details` — one `###` subsection per layer/phase, in setup order. Within each, **bold** each key term the first time it's introduced and wikilink it to its glossary entry (`[[3-Resources/Glossary/<Entry>|<display text>]]`). **Default to a short intro sentence (or none) followed by a bulleted list, one bullet per term or tightly-related pair of terms** — not a long prose paragraph. Reserve a full paragraph for the rare case where the connective "why/how this depends on that" reasoning genuinely can't be said in a bullet's trailing clause; a subsection with more than 4-5 terms should almost always be a list, not a paragraph. If a subsection's bullets naturally split into sub-groups (e.g. a set of access levels vs. a set of classification codes vs. compensation-adjacent fields, all within one large sub-area), use a one-line intro per sub-group followed by its own short bullet list rather than one long undifferentiated list or a dense paragraph.
- A closing subsection (e.g. "How it fits together") is optional but useful when the area has enough steps that a short end-to-end recap earns its place — RRP 101 does this, Costing 101 doesn't need it.
- `## Related` — links to `[[2-Areas/<Area>|<Area>]]` and `[[3-Resources/BDR/<Area>|<Area> (BDR)]]`.
- `## Sources` — the doc/forum URLs actually fetched in the "Researching the structure" step (not a repeat of every glossary entry's sources), ending with the line: `Full source list per data point: see each linked glossary entry's own Sources section.`

**Be honest about confidence**, same standard as glossary entries: don't present an inferred structure as officially documented if it isn't — if the layering is your own synthesis rather than something IFS's docs state outright, that's fine (it's still useful), just don't cite a source for a claim it doesn't make.

## When done

Report: which area, the file path written, how many glossary entries it links to, and whether any part of the structure was inferred rather than found stated directly in IFS's own docs. Don't commit — leave that to the user unless they explicitly ask.
