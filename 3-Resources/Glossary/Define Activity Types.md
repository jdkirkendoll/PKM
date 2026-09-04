---
type: glossary
term: Define Activity Types
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

A Scheduling Activity Type classifies the kind of work a Work Task/Request Task represents, and is one of the most thoroughly documented basic-data concepts in IFS Cloud's Planning and Scheduling Optimization (PSO) suite. Each activity type is connected to a Work Type and carries scheduling-relevant defaults: a scheduling value per hour and optional Initial Base Value (used to calculate the activity's base value/priority for the optimizer), default Primary/Secondary Scheduling SLA Types and their durations, and an Adjust Duration toggle to opt into predictive/historical duration calculation. If an activity type's base value is set to zero, Work Tasks using it will not be scheduled by the engine at all.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define Activity Type Appointment Templates|Define Activity Type Appointment Templates]]
- [[3-Resources/Glossary/Define Activity Type Skills|Define Activity Type Skills]]
- [[3-Resources/Glossary/Define SLA Types|Define SLA Types]]

## Sources
- Local corpus: `Topics in IFS Cloud/Work Processing/Schedule Work Tasks with Scheduling Engine.md` (Activity - Work Task / Request Task, Basic Data section)
- Local corpus: `Topics in IFS Cloud/Work Processing/Appointment Booking with Planning and Scheduling Optimization (PSO).md`
