---
type: glossary
term: Set Up Alternate Component Substitution Sequence
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Set Up Alternate Component Substitution Sequence

## Summary

This basic data defines replacement (alternate) parts for a standard component on a product structure and, when more than one alternate is registered for the same main component, sets the sequence number that ranks their priority (a lower number takes priority). Each alternate record also sets Valid Structure Type (All / Remanufacturing / Remanufacturing and Repair), an optional Parent Part restriction, MRP Netting Use (Exclude During MRP, Consume after Main Component, or Consume before Main Component), the Qty per Component ratio, and an optional Primary flag. During Production Schedule backflushing, alternates are consumed ahead of the main component according to their sequence number when no reservation already exists; on Shop Orders, alternates either auto-substitute at reservation time or require manual planner selection, and MRP uses the same sequence and netting settings to decide which alternate's stock/open supply to consume first.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Repetitive Backflush Behaviour|Define Repetitive Backflush Behaviour]]
- [[3-Resources/Glossary/Define Schedule Horizons|Define Schedule Horizons]]

## Sources
- [Define Alternate Components — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MfgStandard/ActivitySetupAlternateComponent.htm)
- [Alternate Components in MRP — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/Planning/AboutAlternateComponentsInMrp.htm)
