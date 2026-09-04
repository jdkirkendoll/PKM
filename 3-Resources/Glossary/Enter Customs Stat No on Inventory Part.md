---
type: glossary
term: Enter Customs Stat No on Inventory Part
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

This is the activity of assigning a customs statistics number to a specific inventory part, which is mandatory for that part to be correctly included in the monthly Intrastat report. For exports, IFS Cloud actually looks for the customs statistics number in a priority order — customer invoice line, then customer order line, then the inventory part — and (if the site's "Allow Customs Statistics Number Updates" option is enabled) the value can be overridden at the order/invoice line rather than always falling back to the part.

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/Customs Statistics No|Customs Statistics No]]
- [[3-Resources/Glossary/Inventory Part|Inventory Part]]

## Sources
- IFS Functional Area Models/Procurement/Follow-up and Analysis, Procurement/About Intrastat Report.md
