---
type: glossary
term: Define Additional Attributes required for sampling
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

This data point relates to PSO's Predictive Durations / archiving feature, in which an archiving service periodically takes snapshots of scheduling data (documented via the Archive/Timetables, Archive/Timetable Usages, and Archive/Snapshots pages) to calculate historical average durations for completed tasks of the same dataset, activity type, and location. "Additional Attributes required for sampling" would define extra data fields that need to be captured on each snapshot so the archiving/analysis process has what it needs beyond the base task/duration data.

> [!note] Confidence: moderate
> The underlying snapshot/archiving mechanism (Predictive Durations) is confirmed in IFS Cloud documentation. The specific "Additional Attributes" configuration screen for it was not separately documented in what was found — inferred as the setup step that feeds that mechanism.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define entities and attributes to be sampled|Define entities and attributes to be sampled]]
- [[3-Resources/Glossary/Defne the sampling (snapshot) scheduling|Defne the sampling (snapshot) scheduling]]

## Sources
- Local corpus: `Topics in IFS Cloud/Work Processing/Schedule Work Tasks with Scheduling Engine.md` (Predictive Durations section)
