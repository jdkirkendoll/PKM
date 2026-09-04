---
type: guide
topic: Quality Management 101
source: web
created: 2026-09-02
tags: [guide, ifs, quality]
---

# Quality Management 101

An introduction to how IFS Cloud Quality Management's basic data is organized, for anyone new to the module before working through the [[3-Resources/BDR/Quality Management|Quality Management BDR]]. Unlike Costing's single hierarchy, Quality Management is five largely independent basic-data setups — **Control Plans**, **FMEA**, **MRB**, **NCR**, and **Quality Audits/Compliance Planning** — that each configure a different point along the same overall arc: preventing problems, inspecting for them, catching and resolving what gets through, and periodically verifying the whole system against a standard.

## Summary

**Control Plan** basic data (Norm Types, Control Plan Checklist, Cancel Reasons, the three Mandatory Part/Site settings, Inspection Codes) governs inspection *before* a part is received into stock. **FMEA** basic data (Severity, Occurrence, and Detection Criteria, plus Classification Criteria) is a proactive risk-scoring framework — the three numeric criteria feed a Risk Priority Number used to rank failure modes before they ever occur. **MRB** basic data (a shared Checklist Template, Disposition Codes, Non Conformance Codes) governs how a nonconforming part caught by the Material Review Board gets classified and dispositioned. **NCR** basic data (Severity, Location, and Source Codes, Root Cause, plus the same Disposition and Non Conformance Codes MRB uses) governs how any other non-conformance gets recorded, categorized, and traced to a root cause feeding Corrective and Preventive Action (CAPA). **Quality Audit / Compliance Planning** basic data (Audit Group, Audit Type, Internal Auditors, Audit Authority Type, Audit Authority, Business Area, Reference Standards) governs how audits are classified, staffed, and scheduled against external standards. Read together, these five toolkits map onto one lifecycle: prevent (FMEA) → inspect (Control Plan) → catch and disposition (MRB/NCR) → periodically verify (Quality Audit).

## Details

### Control Plans: inspection before receipt

A Control Plan documents the inspection actions applied to a part at receiving, in-process, and outgoing stages. Several pieces of basic data configure how strictly and how it's enforced:

- **[[3-Resources/Glossary/Define Norm Types|Norm Types]]** classify how a Control Plan's Variable-type data points handle tolerance — two-sided, one-sided, or no defined limit — which drives how a recorded measurement is judged Pass/Fail.
- **[[3-Resources/Glossary/Define Control Plan Checklist|Control Plan Checklist]]** attaches a predefined set of inspection steps to a plan, so every analysis follows the same checks.
- **[[3-Resources/Glossary/Define Cancel Reasons|Cancel Reasons]]** documents why a quality analysis was cancelled rather than leaving it unexplained.
- **[[3-Resources/Glossary/Define Mandatory Part|Mandatory Part]]**, **[[3-Resources/Glossary/Define Mandatory Site|Mandatory Site]]**, and **[[3-Resources/Glossary/Define Mandatory Part - Site|Mandatory Part / Site]]** are three levels of the same rule — a Control Plan is required before receipt into stock, enforced at increasing granularity: every site a given part touches, every part received at a given site, or one specific part-at-a-site combination.
- **[[3-Resources/Glossary/Define Inspection Codes|Inspection Codes]]** (shared with Inventory) set whether a fixed quantity or a percentage of a receipt gets inspected, working alongside a Control Plan's own sample-size calculation when one is active.

### FMEA: scoring risk before it happens

Failure Mode and Effects Analysis ranks potential failure modes before they occur, using three numeric criteria that combine into a Risk Priority Number:

- **[[3-Resources/Glossary/Define Severity Criteria|Severity Criteria]]** — how serious the consequence would be if the failure happened.
- **[[3-Resources/Glossary/Define Occurrence Criteria|Occurrence Criteria]]** — how likely the failure is to happen.
- **[[3-Resources/Glossary/Define Detection Criteria|Detection Criteria]]** — how likely existing controls are to catch it before it reaches the customer.
- **[[3-Resources/Glossary/Define Classification Criteria|Classification Criteria]]** groups failure modes into categories separate from the three numeric scores, which is what lets an FMEA be filtered, reported on, or connected to a Checklist Template by category.

### MRB: dispositioning nonconforming material

A Material Review Board case is opened when nonconforming material is found, and resolves it using basic data shared with NCR:

- **[[3-Resources/Glossary/Define Checklist Template|Checklist Template]]** — the same reusable checklist mechanism FMEA uses; on an MRB case it can auto-apply based on the non-conformance code entered.
- **[[3-Resources/Glossary/Define Non Conformance Codes|Non Conformance Codes]]** classify what kind of problem was found, and can themselves auto-trigger a default Checklist Template.
- **[[3-Resources/Glossary/Define Disposition Codes|Disposition Codes]]** record the outcome — used as-is, returned to supplier, reworked, or scrapped — with an MRB case able to carry a single disposition or a mixed disposition across quantities.

### NCR: recording and analyzing non-conformances

Non Conformance Reports cover non-conformances more broadly than MRB's material-focused cases, and reuse Disposition Codes and Non Conformance Codes from the section above alongside four fields built specifically for NCR analysis:

- **[[3-Resources/Glossary/Define Severity Codes|Severity Codes]]** — how serious the non-conformance is.
- **[[3-Resources/Glossary/Define Location Codes|Location Codes]]** — where it was found.
- **[[3-Resources/Glossary/Define Source Codes|Source Codes]]** — how it was discovered (audit, inspection, customer complaint, routine workflow).
- **[[3-Resources/Glossary/Define Root Cause|Root Cause]]** — the underlying reason, which feeds Corrective and Preventive Action (CAPA): the investigation aimed at preventing recurrence (corrective) or occurrence in the first place (preventive).

Together these four let an NCR chart be filtered and analyzed from several angles at once — how bad, where, how it surfaced, and why.

### Quality Audits & Compliance Planning: verifying against a standard

Where the sections above catch problems as they happen, Quality Audits periodically check whether the quality system itself is being followed, carried out by an internal or external auditor:

- **[[3-Resources/Glossary/Define Audit Type|Audit Type]]** classifies an audit, most fundamentally as internal (an organization's own auditor) or external (outside the organization).
- **[[3-Resources/Glossary/Define Audit Group|Audit Group]]** groups related audits together for reporting, alongside Audit Type as a classification field.
- **[[3-Resources/Glossary/Define Internal Auditors|Internal Auditors]]** registers who inside the organization is qualified to carry out an audit.
- **[[3-Resources/Glossary/Define Audit Authority Type|Audit Authority Type]]** categorizes the kind of external body an audit or standard answers to (certification body, regulator, customer), before naming the specific **[[3-Resources/Glossary/Define Audit Authority|Audit Authority]]** itself.
- Compliance Planning builds the audit schedule around two axes: **[[3-Resources/Glossary/Define Business Area|Business Area]]** (the organizational division needing coverage) and **[[3-Resources/Glossary/Define Reference Standards|Reference Standards]]** (the ISO or customer-mandated benchmark being audited against) — each business area is tied to the standards relevant to it, and each standard to the audits planned against it.

## How it fits together

These five setups don't feed into each other the way Costing's cost hierarchy does — they're mostly independent configuration surfaces, each supporting a different quality activity. What ties them together is the lifecycle they collectively support: FMEA scores risk before anything goes wrong, Control Plans catch problems at receipt, MRB and NCR record and disposition whatever gets through (sharing their disposition/non-conformance vocabulary), and Quality Audits periodically verify the whole system is actually being followed against an external standard. Set up whichever section matches the process you're rolling out first — there's no requirement to configure all five before any one of them is usable.

## Related
- [[2-Areas/Quality Management|Quality Management]]
- [[3-Resources/BDR/Quality Management|Quality Management (BDR)]]

## Sources
- [Control Plan — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/QualityManagement/AboutControlPlan.htm)
- [Quality Audit — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/AuditManagement/AboutQualityAudit.htm)
- [Compliance Planning — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/AuditManagement/AboutCompliancePlanning.htm)
- [Non Conformance Report (NCR) — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/AuditManagement/AboutNonConformanceReport.htm)
- [Create MRB Case — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MaintainInventory/ActivityCreateMrbCase.htm)
- [Failure modes and effects analysis (FMEA) — general reference](https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis)
- Full source list per data point: see each linked glossary entry's own Sources section.
