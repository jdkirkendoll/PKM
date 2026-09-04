---
type: glossary
term: Define Shift Template Breaks
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

Defines the break periods (e.g. lunch) built into a Shift Template. This is closely related to the confirmed "Implicit Breaks" parameter documented under Define Scheduling Configuration: breaks flagged as Implicit are deterministically placed into a plan by the DSE based on a set of rules rather than being optimized like a regular activity, and they carry no SLA or base value but are always scheduled if possible. The output entity Plan_Break also confirms breaks scheduled this way (as opposed to break-class activities) are tracked separately in the scheduling engine's output.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define Shift Templates|Define Shift Templates]]
- [[3-Resources/Glossary/Define Unavailabilities|Define Unavailabilities]]

## Sources
- Local corpus: `Topics in IFS Cloud/Work Processing/Appointment Booking with Planning and Scheduling Optimization (PSO) - linked pages/Define Scheduling Configuration.md` (Implicit Breaks)
- Local corpus: `Topics in IFS Cloud/Work Processing/About Scheduling Output Entities.md` (Plan_Break entity)
