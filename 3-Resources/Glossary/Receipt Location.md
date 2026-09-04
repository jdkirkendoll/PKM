---
type: glossary
term: Receipt Location
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

Receipt Location covers the three location categories used throughout the receipt flow — arrival locations, inspection locations, and stock locations — and how the system resolves which specific location to use at each step. No-number parts and non-inventory-registered purchase parts don't use locations at all; for everything else, the system checks for a user-entered value first, then part-level defaults, then site-level defaults, then the last location used, with a slightly different chain for shipment orders going to a remote warehouse.

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/Enter Arrival Location|Enter Arrival Location]]
- [[3-Resources/Glossary/Enter Inspection Location|Enter Inspection Location]]
- [[3-Resources/Glossary/Connect Default Location to Site|Connect Default Location to Site]]

## Sources
- Topics in IFS Cloud/Receipt/Arrival and Receipt.md
