---
type: glossary
term: Define MRP Message Configuration
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define MRP Message Configuration

## Summary

Beyond filtering which messages a planner sees, IFS Cloud's Perform Site MRP run itself has configuration options that shape which messages/actions are produced in the first place — for example whether MRP stops on error, whether lead-time back-off is added to planned receipts, whether messages for phantom-part dependent demands are suppressed, and how safety-stock replenishment orders are created. Getting this configuration right reduces noise in the resulting MRP action messages (Available Covers, Excess of Orders, Remove Order, alert-zone messages for buffered parts, etc.) so planners and buyers only see actionable proposals.

> [!note] Confidence: low
> No IFS documentation page uses the exact term "MRP Message Configuration." This entry is inferred from the configuration options described for the Perform Site MRP activity (stop-on-error, lead-time back-off, phantom-part message suppression, safety-stock order creation); the precise field names and screen this BDR item refers to were not confirmed.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define MRP Message Controller|Define MRP Message Controller]]
- [[3-Resources/Glossary/Define MRP Order Code on Inventory Part|Define MRP Order Code on Inventory Part]]

## Sources
- [Perform Site MRP — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/Planning/ActivityPerformMRP.htm)
- [Messages from MRP — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/Planning/AboutMessagesFromMRP.htm)
