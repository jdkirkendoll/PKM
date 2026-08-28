---
type: glossary
term: Select Event(s)
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Select Event(s)

## Summary

Within a Shop Order Process Type, Select Event(s) is the step where you choose which of the three automated handling events to include: Release Shop Order Requisitions (converts unreleased requisitions into shop orders), Release Shop Orders (moves orders from Planned to Released status), and Reserve Shop Orders (allocates material to the order based on required dates within a configurable time span). IFS Cloud always executes selected events in that fixed order — requisition release, then order release, then reservation — regardless of which subset is chosen, so this setting controls how much of the shop-order lifecycle a given process type automates.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Process Type(s)|Define Process Type(s)]]
- [[3-Resources/Glossary/Set Up Priority Rule(s) per Site|Set Up Priority Rule(s) per Site]]

## Sources
- [Enter Shop Order Process Type — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/Manufacturing/ActivityEnterProcessTypes.htm)
