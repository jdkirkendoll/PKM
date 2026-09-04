---
type: glossary
term: Define SDS Profile Parameters
source: web
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

SDS appears to refer to the Schedule Dispatch Service (elsewhere abbreviated DSP in IFS Cloud material) — the PSO component that automatically commits/dispatches scheduled work to resources based on defined commit rules, rather than requiring a dispatcher to manually assign it. IFS Community forum content confirms an "SDS" used to automatically commit work using rules such as requiring a resource to actually be logged on before work is auto-assigned to them. This data point would configure the profile-level parameters controlling that automatic-commit behavior.

> [!note] Confidence: moderate
> The SDS-as-dispatch-service identification comes from an IFS Community forum thread rather than an official documentation page, and it isn't fully certain SDS and the "Schedule Dispatch Service (DSP)" mentioned in IFS Cloud's own scheduling docs are literally the same component under two abbreviations.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define DSE Profile Parameters|Define DSE Profile Parameters]]
- [[3-Resources/Glossary/Define Rules|Define Rules]]

## Sources
- [How to set up commit rules in PSO when NOT using SDS — IFS Community](https://community.ifs.com/field-service-management-fsm-planning-and-scheduling-optimization-pso-249/how-to-set-up-commit-rules-in-pso-when-not-using-sds-37732)
- Local corpus: `Topics in IFS Cloud/Work Processing/Schedule Work Tasks with Scheduling Engine.md` (references "Schedule Dispatch Service (DSP)")
