---
type: glossary
term: Change Supplier for Part
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

The Change Supplier for Purchase Parts page lets you replace one supplier with another across many purchase parts at once (optionally filtered by purchase group or a part-number range), rather than editing each supplier-for-part connection individually. Only active current-supplier connections are changed: the old connection is set to Inactive, the new one becomes Active, and if the old supplier was the primary supplier for a part, that primary flag transfers to the new supplier. If no connection existed yet between the new supplier and a part, a new supplier-for-purchase-part record is created automatically (with prices needing review).

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/Supplier for Purch. Part|Supplier for Purch. Part]]
- [[3-Resources/Glossary/Define Multiple-Supplier Ordering|Define Multiple-Supplier Ordering]]

## Sources
- Topics in IFS Cloud/Procurement/Change Supplier for Purchase Parts.md
