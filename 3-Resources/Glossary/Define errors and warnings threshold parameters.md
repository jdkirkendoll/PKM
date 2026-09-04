---
type: glossary
term: Define errors and warnings threshold parameters
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

This data point configures how server/integration-level errors and warnings from the PSO scheduling engine are surfaced and thresholded in IFS Cloud. It's closely related to the "Enable Broadcast Error Handling" parameter documented under Define Scheduling Configuration: by default a full broadcast message from the scheduling engine is discarded if any record in it has an error, but enabling this behavior instead logs the failed allocation against the affected Scheduled Work Task (with an Output Status of "Failed" and an error message) while letting the rest of the broadcast process normally.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define Exceptions and thresholds|Define Exceptions and thresholds]]
- [[3-Resources/Glossary/Define schedule performance threshold parameters|Define schedule performance threshold parameters]]

## Sources
- Local corpus: `Topics in IFS Cloud/Work Processing/Appointment Booking with Planning and Scheduling Optimization (PSO) - linked pages/Define Scheduling Configuration.md`
