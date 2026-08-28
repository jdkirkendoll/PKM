---
type: glossary
term: Define Master Schedule Level 1 Part
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Master Schedule Level 1 Part

## Summary

A Master Schedule (MS) Level 1 Part is a tangible end item at the bottom of the planning structure — usually manufactured, but it can also be purchased or remanufactured. To participate in master scheduling a part must be explicitly defined/activated as an MS Level 1 part, which enables it to carry the parameters that drive the Level 1 calculation, including Demand Time Fence and Planning Time Fence. A part does not need a Level 0 family above it to be planned at Level 1; when it does, Level 1 results can be aggregated back up to the Level 0 forecast. This is the master-scheduling counterpart to defining ordinary MRP-planned parts, and its parameters directly control whether Level 1 master schedule proposals are fixed or free to change during calculation.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Master Schedule Level 0 Part|Define Master Schedule Level 0 Part]]
- [[3-Resources/Glossary/Define Planning Structure|Define Planning Structure]]
- [[3-Resources/Glossary/Process Demand Time Fence Changes|Process Demand Time Fence Changes]]

## Sources
- [Master Production Schedule Level 1 — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/AboutMasterScheduleProductionLevel1.htm)
- [Master Scheduling — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/MasterScheduling/AboutMasterScheduling.htm)
