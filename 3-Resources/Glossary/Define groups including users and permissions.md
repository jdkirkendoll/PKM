---
type: glossary
term: Define groups including users and permissions
source: web
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

This activity groups Scheduling Workbench/PSO users together and assigns permissions to those groups collectively rather than one user at a time — a standard security-administration pattern across scheduling and workforce-management tools. In this suite, access to see resources and activities is additionally restricted at the individual-user level by Object Group (equivalent to a Site in IFS Cloud), so a users group here likely bundles both the functional permission level (Workbench User vs. Workbench Administrator, tied to the `FNDSCH_RUNTIME`/`FNDSCH_ADMIN` permission sets) and the data-visibility scope.

> [!note] Confidence: low
> No documentation describing a specific "groups" administration screen for the Scheduling Workbench was found; this is inferred from the confirmed permission-set/Object Group access model used elsewhere in this suite.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define Permissions|Define Permissions]]
- [[3-Resources/Glossary/Define iSWB users|Define iSWB users]]

## Sources
- Local corpus: `Topics in IFS Cloud/Work Processing/Schedule Work Tasks with Scheduling Engine.md` (Object Group access model)
