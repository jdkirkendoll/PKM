---
type: glossary
term: Define Activity Type Skills
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

Defines which skills an activity of a given Activity Type requires, so the scheduling engine can match it only to resources holding those skills. IFS Cloud documentation confirms this matching mechanism generally: "the skills of the resource will have to match the skills required by the activity," where skills can be sourced from a resource's Resource Groups (with proficiency), certificates, or competencies. Setting skill requirements at the Activity Type level lets every activity of that type inherit the same baseline skill requirement automatically.

> [!note] Confidence: moderate
> The resource/activity skill-matching mechanism is confirmed in IFS Cloud documentation; whether skill requirements are set specifically at the Activity Type level (versus only per individual activity/resource demand) was not spelled out as explicitly, so that part is inferred.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define Activity Types|Define Activity Types]]
- [[3-Resources/Glossary/Define Resource Skills|Define Resource Skills]]
- [[3-Resources/Glossary/Define Skills|Define Skills]]

## Sources
- Local corpus: `Topics in IFS Cloud/Work Processing/Schedule Work Tasks with Scheduling Engine.md`
