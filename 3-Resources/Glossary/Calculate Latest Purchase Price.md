---
type: glossary
term: Calculate Latest Purchase Price
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Calculate Latest Purchase Price

## Summary

This activity calculates the latest (or, alternatively, average) purchase price for a purchase part from its purchase history and writes the result to the Inventory Part Unit Cost page. In IFS Cloud Costing this feeds Cost Element 120 ("latest purchase price on inventory part") into Cost Bucket 120, consumed by Cost Template P-120, which rolls up externally-acquired costs. If the Primary Supplier option is enabled, the calculation is restricted to purchases from a part's designated primary supplier, and parts without one are excluded; currency conversion uses today's Currency Rates page rate, or the rate recorded on the supplier invoice once one has been processed.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Material Cost on Inv. Part|Define Material Cost on Inv. Part]]
- [[3-Resources/Glossary/Define External Work Centre Cost|Define External Work Centre Cost]]

## Sources
- [Calculate Latest Purchase Price / Average Purchase Price — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/ActivityCalcLatestPurchPrice.htm)
- [Costing Basic Data — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/AboutCostingBasicData.htm)
