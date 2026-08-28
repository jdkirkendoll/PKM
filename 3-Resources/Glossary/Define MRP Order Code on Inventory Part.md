---
type: glossary
term: Define MRP Order Code on Inventory Part
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define MRP Order Code on Inventory Part

## Summary

The MRP Order Code (documented as Planning Method) set on an Inventory Part controls how MRP forms order proposals — lot sizing logic, whether component demand is exploded, and whether the part is even MRP-driven at all. IFS Cloud offers planning methods such as A (Lot for Lot), D (Fixed Lot Size), E (Least Unit Cost), F (Part Period Balancing), G (Order Cover Time), H (Buffered Part, using green/yellow/red zone logic), K/P (Blow Through/Phantom Part), M (Manufacturing Cell Part), N (Next Level Demand, pull-based), and B/C (Order Point/Replenishment Level, which run outside standard MRP). Choosing the wrong method for a part's demand pattern — for example Lot for Lot on a high-volume, low-cost component — undermines MRP's ability to balance setup costs against inventory holding costs.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Enter Lead Time Information on Inventory Part|Enter Lead Time Information on Inventory Part]]
- [[3-Resources/Glossary/Define MRP Message Controller|Define MRP Message Controller]]

## Sources
- [Planning Methods — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MaintainInventory/AboutMRPOrderCodes.htm)
