---
type: glossary
term: Define Master Schedule Level 0 Part
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Master Schedule Level 0 Part

## Summary

A Master Schedule (MS) Level 0 Part is the top level of the master scheduling planning structure — an aggregated, family-level forecast entity (e.g. a product family) rather than a physical, orderable item. In IFS Cloud it is defined using MRP Planning Method O, is a form of blow-through part, and cannot carry a balance on hand or be ordered directly; instead it exists so forecasts can be entered and analyzed at the family level and then disaggregated down to individual Level 1 (end item) parts. Setting up Level 0 parts is the starting point for Level 0 Master Scheduling, which sits above Level 1 in the planning hierarchy and optionally above MS phantom (sub-grouping) parts.

> [!note] Confidence: moderate
> No IFS documentation page titled exactly "Define Master Schedule Level 0 Part" was found; this summary is built from IFS Cloud's general Master Scheduling documentation describing Level 0 parts and MRP Planning Method O, plus the "Perform MS Level 0" process model, rather than a single source describing this exact BDR step.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Planning Structure|Define Planning Structure]]
- [[3-Resources/Glossary/Define Master Schedule Set|Define Master Schedule Set]]
- [[3-Resources/Glossary/Connect Level 0 Part to MS Sets|Connect Level 0 Part to MS Sets]]
- [[3-Resources/Glossary/Define Master Schedule Level 1 Part|Define Master Schedule Level 1 Part]]

## Sources
- [Master Scheduling — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/MasterScheduling/AboutMasterScheduling.htm)
- [7.29.2.2 Perform MS Level 0 — IFS Cloud Process Models](https://docs.ifs.com/ifsclouddocs/25r1/ProcessModels/Process_Model/PerformMSLevel0.htm)
- [Project Master Scheduling — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/AboutProjectMS.htm)
