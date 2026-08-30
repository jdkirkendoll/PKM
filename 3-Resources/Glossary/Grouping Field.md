---
type: glossary
term: Grouping Field
source: local-pdf
created: 2026-08-30
tags: [glossary, ifs, technical]
---

# Grouping Field

## Summary

Grouping Fields let end users dynamically group and aggregate a list's or page's columns via a "Group Data" slide-out menu, optionally tied to checkboxes in a Context Search pane so a single search-context choice can auto-select a whole set of grouping columns. Defined with a `groupingfieldset` block (optionally scoped `for` a search-context definition), containing individual `groupingfield` entries whose `enabled`/`selected` properties control whether the end user can toggle that column and whether it starts selected — including data-driven expressions like `selected = [not searchcontext.X.NoGrouping]`. A `setgroupingstartup` flag controls whether initial grouping (set via `initialgrouping`) applies as soon as the page opens or only after the user presses Apply. Aggregated columns are declared via `summary = Field1, Field2, ...`.

## Related
- [[3-Resources/Guides/IFS Cloud Web Client Controls|IFS Cloud Web Client Controls]]
- [[3-Resources/Guides/IFS Cloud Web Searching|IFS Cloud Web Searching]]

## Sources
- Grouping Field - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
