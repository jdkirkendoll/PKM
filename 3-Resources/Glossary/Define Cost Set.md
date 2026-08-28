---
type: glossary
term: Define Cost Set
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Cost Set

## Summary

A Cost Set is basic data in IFS Cloud Costing, defined per site, that acts like a calculation sheet used for cost calculation, rollup, and comparison — each cost set points to a Manufacturing, Purchasing, Produced Part, and Core cost template that governs which cost buckets apply to parts created under it. Every site automatically gets five default cost sets when created: 1 Inventory Value, 2 Estimated Material Cost, 3 Latest Purchase Price, 4 Average Purchase Price, and 5 Planned Purchase Cost. Cost Set 1 holds the standard cost and cannot be calculated directly — costs must be calculated in another cost set and then copied into Cost Set 1 — while sets 2-5, and any custom cost sets you create, can be freely recalculated or deleted. This activity is the entry point for setting up product costing at a new site.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Cost Template|Define Cost Template]]
- [[3-Resources/Glossary/Define Cost Bucket|Define Cost Bucket]]
- [[3-Resources/Glossary/Define Cost Element|Define Cost Element]]

## Sources
- [Define Cost Set — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/ActivityDefineCostSet.htm)
- [Costing Basic Data — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/AboutCostingBasicData.htm)
