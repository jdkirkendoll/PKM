---
type: glossary
term: Process Demand Time Fence Changes
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Process Demand Time Fence Changes

## Summary

The Demand Time Fence (DTF) is a date, set on the Master Schedule Level 1 Part, inside of which the production plan is treated as fixed: no forecast consumption occurs, and only existing shop orders (not the master schedule) generate demand for MRP within that window. Because the DTF is a rolling date tied to the current run, it moves forward over time, and "processing" DTF changes covers what happens to forecasts and proposals as dates cross the fence — forecasts reaching the fence are either dropped or rolled forward, and planned MS supplies that fall inside the (related) Planning Time Fence become fixed, potentially generating shop order or purchase requisitions. Reviewing and processing these changes on a regular cadence keeps the master schedule and MRP demand signal consistent as the planning horizon advances.

> [!note] Confidence: moderate
> No documentation page titled exactly "Process Demand Time Fence Changes" was found; this summary combines IFS Cloud's Master Scheduling documentation on Demand Time Fence and Planning Time Fence behavior, which is well documented, with an inferred description of the periodic "processing" activity implied by the BDR step name.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Master Schedule Level 1 Part|Define Master Schedule Level 1 Part]]
- [[3-Resources/Glossary/Define Planning Structure|Define Planning Structure]]

## Sources
- [Master Production Schedule Level 1 — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/AboutMasterScheduleProductionLevel1.htm)
- [Material Requirements Planning — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/Planning/AboutMrp.htm)
