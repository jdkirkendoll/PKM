---
type: glossary
term: Define Profiles
source: web
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

In the context of the Scheduling tool (IFS Planning and Scheduling Optimization / PSO), a "Profile" is a named set of configuration parameters that governs the behavior of one of the engine's server components (Scheduling Workbench, Dynamic Scheduling Engine, dispatch/commit services, etc.) for a group of users or resources, rather than a single global setting. Defining a profile is the first step; the individual parameters within it are then set up separately (see the various "Modify Profile Parameters" data points in this same area, e.g. DSE, iSWB, ADM, IMS, TMS profiles).

> [!note] Confidence: low
> No IFS documentation page describing a generic "Profile" object itself was found. This entry is inferred from the surrounding BDR rows (which all define parameters *for* a named profile type) and general PSO/DSE configuration patterns described in IFS Cloud's Scheduling Configuration documentation.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define DSE Profile Parameters|Define DSE Profile Parameters]]
- [[3-Resources/Glossary/Define iSWB Profile Parameters|Define iSWB Profile Parameters]]

## Sources
- Local corpus: `Topics in IFS Cloud/Work Processing/Appointment Booking with Planning and Scheduling Optimization (PSO) - linked pages/Define Scheduling Configuration.md`
