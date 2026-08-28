---
type: glossary
term: Define Tool Instance
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Tool Instance

## Summary

Tool Instance is the bottom level of IFS Cloud's tool hierarchy, representing an individual physical tool or piece of equipment (a die, jig, fixture, gauge, or test equipment) that belongs to a Tool Group/Tool Type. Each instance can be tracked and maintained individually, including its own calibration schedule and check-out/check-in tracking, and can be specifically assigned to a shop order operation rather than just satisfying a generic tool-group demand. When shop order operations are scheduled with IFS Manufacturing Scheduling and Optimization (APB/CBS), tools can be treated as finite resources, meaning an operation cannot be scheduled unless a tool instance is actually available during that time.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Manufacturing Tool Type|Define Manufacturing Tool Type]]
- [[3-Resources/Glossary/Define Tool ID|Define Tool ID]]

## Sources
- [Manufacturing Tool — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/MfgStandard/AboutManufacturingTool.htm)
- [Enter Tool/Equipment — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/GeneralIFSApplications/ActivityEnterResourceTooleq.htm)
