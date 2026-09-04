---
type: glossary
term: Define Unavailabilities
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

Records periods when a resource is not available to be scheduled — absences, training, project allocations, breaks, and lunches. IFS Cloud documentation confirms these allocation types are transferred to the scheduling engine so the Dynamic Scheduling Engine (DSE) can avoid allocating work during them: "the resource's allocations, such as, absences, training allocations, project allocations, breaks and lunches will be transferred for scheduling to scheduling." Generate Schedules and Capacity on Resource Availability should be run before a scheduling data load, to transfer shift- and break-related data correctly.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define Unavailability Categories|Define Unavailability Categories]]
- [[3-Resources/Glossary/Define Shift Template Breaks|Define Shift Template Breaks]]

## Sources
- Local corpus: `Topics in IFS Cloud/Work Processing/Schedule Work Tasks with Scheduling Engine.md`
