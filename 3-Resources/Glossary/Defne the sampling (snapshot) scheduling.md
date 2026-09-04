---
type: glossary
term: Defne the sampling (snapshot) scheduling
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

(Note: "Defne" appears to be a typo for "Define" in the original BDR row; the filename/term preserves the original text.) This data point schedules how often PSO's archiving service takes a snapshot of completed-task data for its Predictive Durations feature. IFS Cloud documentation lays out the underlying steps: create timetables in the scheduling engine (Archive/Timetables), configure how those timetables are used (Archive/Timetable Usages), and monitor the snapshots being created (Archive/Snapshots) — the archiving service then analyzes accumulated snapshot data over time to calculate historical average durations, which can be applied to new tasks via the "Adjust Duration" option on a Work Task.

> [!note] Confidence: moderate
> The overall snapshot/timetable/archiving mechanism is confirmed in IFS Cloud documentation. The specific screen for scheduling the sampling cadence itself was referenced at a summary level rather than fully documented.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define modelling datasets|Define modelling datasets]]
- [[3-Resources/Glossary/Define entities and attributes to be sampled|Define entities and attributes to be sampled]]

## Sources
- Local corpus: `Topics in IFS Cloud/Work Processing/Schedule Work Tasks with Scheduling Engine.md` (Predictive Durations section)
