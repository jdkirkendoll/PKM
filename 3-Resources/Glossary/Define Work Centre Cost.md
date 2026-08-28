---
type: glossary
term: Define Work Centre Cost
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Work Centre Cost

## Summary

For internal work centres, IFS Cloud stores cost data directly on the Work Center's Costs tab: a fixed cost rate and overhead costs defined per cost set and period. The cost calculation always considers the resource share — if the routing operation defines a resource share per unit, it is multiplied by the standard lot size to determine the machine cost used in the roll-up. These values become Cost Elements 310 (setup) and 320 (runtime), rolled into Cost Bucket 300, and are used both to calculate a manufactured part's standard cost and the actual cost of reported machine time on shop orders.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define External Work Centre Cost|Define External Work Centre Cost]]
- [[3-Resources/Glossary/Define Labour Cost|Define Labour Cost]]
- [[3-Resources/Glossary/Define Material Cost on Inv. Part|Define Material Cost on Inv. Part]]

## Sources
- [Work Center — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MfgStandard/AboutWorkCenter.htm)
- [Costing Basic Data — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/AboutCostingBasicData.htm)
