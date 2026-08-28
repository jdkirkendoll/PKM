---
type: glossary
term: Assign Cost Template to Part
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Assign Cost Template to Part

## Summary

Every inventory part needs a Cost Template attached so the costing system knows which cost buckets (and therefore which cost elements) to roll up into that part's cost. In IFS Cloud this happens either directly on the part's cost record or, more commonly, by default through the Part Cost Group the part belongs to — a Part Cost Group carries a default Manufacturing Cost Template ID for manufactured parts and a default Purchasing Cost Template ID for purchased parts, which are applied automatically when a new part is created and attached to that group. This is what determines, at a part level, whether manufacturing costs, externally acquired (purchase) costs, or a cost distribution approach is used to build the part's cost.

> [!note] Confidence: moderate
> IFS Community discussion notes that changing a part's cost template after the part already exists does not always behave as expected in the Part Cost screen — a caveat worth validating against the current IFS Cloud release rather than a specific documented field-level procedure.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Assign Cost Buckets to Cost Template|Assign Cost Buckets to Cost Template]]

## Sources
- [Costing Basic Data — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/AboutCostingBasicData.htm)
- [Costing Set Up — IFS Community](https://community.ifs.com/finance-financials-42/costing-set-up-56820)
