---
type: glossary
term: Define SLA Templates
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, scheduling]
---

## Summary

An SLA Template (documented in IFS Cloud's Request SLA Management area) can have multiple lines that create SLA Commitments on Requests, Request Scopes, and Work Tasks. Each line defines a Duration and Calendar used to calculate the SLA Due Date, plus a Fulfillment Entity/Event describing what completes the SLA. Critically for this Scheduling area, a template line can be flagged Work Task Applicable and connected to a Scheduling SLA Type — this is what feeds the SLA/urgency information the Dynamic Scheduling Engine (DSE) uses when deciding how urgently to schedule a Work Task. SLA Templates are applied automatically in a defined hierarchical priority order (Warranty > Contract Line Urgency > Contract Line > Service Catalog Urgency > Service Catalog > Service Organization), or can be connected manually to a Request Scope.

## Related
- [[3-Resources/BDR/Scheduling|Scheduling (BDR)]]
- [[3-Resources/Glossary/Define SLA Template Items|Define SLA Template Items]]
- [[3-Resources/Glossary/Define SLA Types|Define SLA Types]]

## Sources
- Local corpus: `Topics in IFS Cloud/Request SLA Management/SLA Commitments - linked pages/SLA Template.md`
