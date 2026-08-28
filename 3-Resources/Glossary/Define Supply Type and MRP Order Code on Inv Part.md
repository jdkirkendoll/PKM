---
type: glossary
term: Define Supply Type and MRP Order Code on Inv Part
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Supply Type and MRP Order Code on Inv Part

## Summary

Supply Type and Planning Method (MRP order code) are fields set on the Inventory Part / Inventory Part Planning Data page that determine how a part is replenished and, specifically, whether it is eligible to be driven by a Production Schedule. Setting Supply Type to "Schedule" designates the part as production-scheduled: IFS Cloud will then automatically generate a production schedule for every part marked Schedule that is also associated with a manufacturing cell/production line, and MRP/master scheduling produce non-firm schedule quantities rather than shop orders for it. When Supply Type is Schedule, certain planning methods are disallowed — Order Point Planning (B), Replenishment Level (C), Next Level Demand (N), and DOP Part cannot be used. This data point is foundational basic data for repetitive/flow manufacturing since it is what routes a part into Production Schedules rather than discrete shop orders or purchase requisitions.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Schedule Horizons|Define Schedule Horizons]]
- [[3-Resources/Glossary/Define Repetitive Backflush Behaviour|Define Repetitive Backflush Behaviour]]

## Sources
- [Define Supply Type and Planning Method — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/Planning/ActivityDefineSupplyTypeMRPCode.htm)
- [Planning Methods (MRP Order Codes) — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MaintainInventory/AboutMRPOrderCodes.htm)
