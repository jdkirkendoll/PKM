---
type: glossary
term: Define Permissions
source: web
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

This activity sets what a Scheduling Workbench/PSO user or group of users is allowed to see and do. IFS Cloud confirms two underlying permission sets that drive this: `FNDSCH_RUNTIME`, which creates a user in PSO as a Workbench (runtime) User, and `FNDSCH_ADMIN`, which creates a Workbench Administrator User with elevated rights. Visibility of resources and activities is separately scoped by Object Group (a Site, Service Organization, or Service Delivery Unit in IFS Cloud terms), which likewise must be granted to each user.

> [!note] Confidence: moderate
> The two permission sets are confirmed via IFS Community discussion; whatever finer-grained permission options this specific "Define Permissions" screen exposes beyond those two sets were not found.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define groups including users and permissions|Define groups including users and permissions]]
- [[3-Resources/Glossary/Define iSWB users|Define iSWB users]]

## Sources
- [PSO SWB change reason and integration to IFSCloud — IFS Community](https://community.ifs.com/field-service-management-fsm-planning-and-scheduling-optimization-pso-249/pso-swb-change-reason-and-integration-to-ifscloud-35140)
- Local corpus: `Topics in IFS Cloud/Work Processing/Schedule Work Tasks with Scheduling Engine.md`
