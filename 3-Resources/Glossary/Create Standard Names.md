---
type: glossary
term: Create Standard Names
source: mixed
created: 2026-09-03
tags: [glossary, ifs, pdm]
---

## Summary
A Standard Name is the lowest level of the engineering-part classification hierarchy in IFS PDM, sitting below Part Class and Main Group. Every engineering part in the system must have a standard name — it is mandatory — and typical examples are things like "hard disk," "relay," or "fuse." Standard names let parts be grouped and retrieved consistently in queries and reports, and multilingual translations can be added through the language table so the correct term displays for each user's language. When creating a new or legacy engineering part, it must be connected to an existing (or newly created) standard name; the local IFS documentation on Engineering Parts also notes that if the part already exists in the part catalog, its unit code and standard name ID must match what's already established there.

## Related
- [[3-Resources/BDR/Product Data Management|Product Data Management (BDR)]]
- [[3-Resources/Glossary/Enter Part Class|Enter Part Class]]
- [[3-Resources/Glossary/Enter Main Groups|Enter Main Groups]]
- [[3-Resources/Glossary/Create Unit Codes and Relationships|Create Unit Codes and Relationships]]

## Sources
- Topics in IFS Cloud/Design Standard Product/About Engineering Parts.md
- https://docs.ifs.com/ifsclouddocs/26r1/DesignStandardProduct/ActivityCreateStdNames.htm
