---
type: glossary
term: Specify Receive Case and any Inspection Info
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

The receive case set on a purchase part or supplier-for-purchase-part record is the default that determines how goods flow through arrival and receipt — options range from Receive into Inventory (no inspection) through variants with putaway, and inspection either at the arrival location or at a dedicated QA location. If a receive case includes an inspection demand, an inspection code must also be specified, which drives the quantity to inspect (either a fixed quantity or a percentage of the received quantity). This default is fetched onto purchase order lines automatically but can still be overridden per line or at arrival registration.

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/Enter Inspection Location|Enter Inspection Location]]
- [[3-Resources/Glossary/Inspection Codes|Inspection Codes]]
- [[3-Resources/Glossary/Specify Consignment Stock Info|Specify Consignment Stock Info]]

## Sources
- Topics in IFS Cloud/Receipt/Arrival and Receipt.md
