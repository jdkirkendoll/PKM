---
type: glossary
term: Define Planning Structure
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Planning Structure

## Summary

Planning Structure is the hierarchy that ties together the three tiers of IFS Cloud Master Scheduling: MS Level 0 parts (aggregated product families, MRP Planning Method O) at the top, optional MS phantom parts (Planning Method T) used for sub-grouping families with similar designs in the middle, and MS Level 1 parts (tangible end items, Planning Method A) as the bottommost leaf nodes. Defining the planning structure means establishing which Level 1 parts belong under which phantom/Level 0 families so that forecasts entered at the family level can be disaggregated down to individual end items, and actual demand at Level 1 can be aggregated back up for family-level analysis. A part does not strictly need a Level 0 parent to be planned at Level 1.

> [!note] Confidence: moderate
> No page titled exactly "Define Planning Structure" was found; this is drawn from IFS Cloud's Master Scheduling documentation describing the Level 0/phantom/Level 1 hierarchy generally, not a dedicated activity page for this specific BDR step.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Master Schedule Level 0 Part|Define Master Schedule Level 0 Part]]
- [[3-Resources/Glossary/Define Master Schedule Level 1 Part|Define Master Schedule Level 1 Part]]
- [[3-Resources/Glossary/Define Master Schedule Set|Define Master Schedule Set]]

## Sources
- [Master Scheduling — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/MasterScheduling/AboutMasterScheduling.htm)
- [Master Production Schedule Level 1 — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/AboutMasterScheduleProductionLevel1.htm)
