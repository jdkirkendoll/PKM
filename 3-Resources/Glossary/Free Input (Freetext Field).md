---
type: glossary
term: Free Input (Freetext Field)
source: local-pdf
created: 2026-08-30
tags: [glossary, ifs, technical]
---

# Free Input (Freetext Field)

## Summary

Free Input (also called a freetext field) is a variation of the List of Values (LOV) control that lets the user type any value instead of being restricted to a value that exists in the reference list — the typed text is stored to the target attribute whether or not it matches a suggestion. It's defined identically to a normal LOV, with a `freeinput = [true]` property added (`lov RoomRef with RoomSelector { freeinput = [true]; }`). If the typed or selected value does match an entry in the suggestion list, it still fetches that record's linked keys the way a normal LOV would. Limited to attributes of type Text.

## Related
- [[3-Resources/Guides/IFS Cloud Web Client Controls|IFS Cloud Web Client Controls]]

## Sources
- Free input (freetext field) - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
