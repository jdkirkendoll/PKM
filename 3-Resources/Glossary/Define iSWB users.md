---
type: glossary
term: Define iSWB users
source: web
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

"iSWB" stands for the (Interactive) Scheduling Workbench — the web-based user interface for IFS Planning and Scheduling Optimization (PSO), the advanced scheduling/optimization engine embedded in IFS Cloud's Work Processing / Field Service Management area (also referred to as the Dynamic Scheduling Engine, or DSE, in IFS Cloud documentation). This data point is about registering the users who are allowed to log into that Scheduling Workbench. In IFS Cloud, a user granted the permission set `FNDSCH_RUNTIME` is created in PSO as a Workbench User, while one granted `FNDSCH_ADMIN` is created as a Workbench Administrator User — these permission sets are the actual mechanism behind "defining" iSWB users.

> [!note] Confidence: moderate
> Confirmed that iSWB = Scheduling Workbench and that FNDSCH_RUNTIME/FNDSCH_ADMIN drive user creation in PSO, via IFS Community forum discussion — but no official IFS docs page dedicated specifically to this activity was found.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define Profiles|Define Profiles]]
- [[3-Resources/Glossary/Define iSWB Profile Parameters|Define iSWB Profile Parameters]]
- [[3-Resources/Glossary/Define Permissions|Define Permissions]]

## Sources
- [PSO SWB change reason and integration to IFSCloud — IFS Community](https://community.ifs.com/field-service-management-fsm-planning-and-scheduling-optimization-pso-249/pso-swb-change-reason-and-integration-to-ifscloud-35140)
- [Schedule Work Tasks with Scheduling Engine — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/WorkProcessing/AboutScheduleWOWithSchedulingEngine.htm)
- Local corpus: `Topics in IFS Cloud/Work Processing/Schedule Work Tasks with Scheduling Engine.md`
