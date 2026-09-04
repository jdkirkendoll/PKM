---
type: glossary
term: Supplier for Purch. Part
source: mixed
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

The Supplier for Purchase Part record connects a specific supplier to a purchase part and captures the buying relationship: price, purchase unit of measure, lead time, receive case default, and whether this supplier is the primary source for the part. It's the last link in the standard setup chain (Inventory Part → Purchase Part → Supplier for Purchase Part) and is what a purchase requisition or order line actually looks up to price and default a purchase part to a supplier; a part can have multiple such records when it is sourced from more than one supplier (including for multi-supplier ordering splits).

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/Purchase Part|Purchase Part]]
- [[3-Resources/Glossary/Change Supplier for Part|Change Supplier for Part]]
- [[3-Resources/Glossary/Define Multiple-Supplier Ordering|Define Multiple-Supplier Ordering]]

## Sources
- Topics in IFS Cloud/Maintain Inventory/Lead Time/Lead Times in Supplier for Purchase Part.md
- Web: [Creating Supplier for Purchase Part in Cloud — IFS Community](https://community.ifs.com/buying-procurement-demand-planner-asc-srm-41/creating-supplier-for-purchase-part-in-cloud-55972)
