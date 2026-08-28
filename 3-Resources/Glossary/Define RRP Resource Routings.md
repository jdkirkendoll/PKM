---
type: glossary
term: Define RRP Resource Routings
source: web
created: 2026-08-28
tags: [glossary, ifs, rrp]
---

# Define RRP Resource Routings

## Summary

An RRP resource routing defines, for a part, the sequence of operations and which work center/resource each operation consumes, expressed as fixed consumption (setup-related, independent of quantity) and variable consumption (tied to quantity produced, e.g. units per part or parts per unit). This is what lets Resource Requirements Planning translate a manufacturing plan into resource demand: as RRP explodes planned shop orders, it uses these routings to calculate how much of each work center's capacity (machine time, personnel, storage, etc.) the plan requires. Routings can also be time-phased — offsetting a resource's requirement in time — which is useful when the "resource" represents a supplier whose lead time needs to be honored in the capacity check.

> [!note] Confidence: moderate
> The consumption mechanics (fixed/variable, per-operation work center assignment, time-phasing) are documented in IFS Cloud's RRP and Rough Cut Capacity Plan pages, but no page specifically titled "Define RRP Resource Routings" with field-level UI detail was found.

## Related
- [[3-Resources/BDR/Resource Requirements Planning (RRP)|Resource Requirements Planning (RRP) (BDR)]]
- [[3-Resources/Glossary/Define RRP Resources|Define RRP Resources]]
- [[3-Resources/Glossary/Define RRP Unique Work Centres|Define RRP Unique Work Centres]]

## Sources
- [Resource Requirements Planning — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/AboutRRP.htm)
- [Rough Cut Capacity Plan — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/AboutRoughCutCapacityPlan.htm)
