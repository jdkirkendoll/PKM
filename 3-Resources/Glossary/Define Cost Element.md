---
type: glossary
term: Define Cost Element
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Cost Element

## Summary

A Cost Element in IFS Cloud Costing represents a single cost-generating item — a material cost, a work center cost, a labor cost, or an overhead — and is the base building block that cost buckets are constructed from. This activity is the only way to create user-defined overhead cost elements: each new element is based on a predefined source element (601 Sales, 501 Material, 502 General, 230 Labor, or 141 Delivery overhead), which fixes its Overhead Type, and is given an Element Factor (the percent of the source's cost absorbed, default 100%, locked at 100% for those five source elements) or an Element Fixed Cost if not source-based. Once defined, a cost element can be connected to and accessed from cost buckets, and its overhead type determines how the resulting cost flows into WIP and when it posts on a shop order.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Cost Bucket|Define Cost Bucket]]
- [[3-Resources/Glossary/Assign Cost Element to Cost Bucket|Assign Cost Element to Cost Bucket]]
- [[3-Resources/Glossary/Define Cost Set|Define Cost Set]]

## Sources
- [Define Cost Element — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/ActivityDefineCostElement.htm)
- [Costing Basic Data — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/AboutCostingBasicData.htm)
