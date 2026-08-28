---
type: glossary
term: Define Cost Template
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Cost Template

## Summary

A Cost Template in IFS Cloud Costing connects cost buckets to the inventory parts that will carry those costs, enabling rapid setup instead of assigning buckets part-by-part. Each cost set references a Manufacturing, Purchasing, Produced Part, or Core cost template, and each template carries Cost Rollup Control flags — Manufacturing Costs, Externally Acquired Costs, and Cost Distribution (mutually exclusive with the first two) — that decide which bucket types are pulled into a Cost Rollup for parts using that template. Seven cost templates (e.g. M-110 manufacturing, P-110/120/130/140 purchasing variants, D-110 cost distribution, C-110 through C-150 core) come pre-configured on every new site, and defining a template requires cost buckets and the site to already exist.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Cost Bucket|Define Cost Bucket]]
- [[3-Resources/Glossary/Copy Cost Buckets from Cost Template|Copy Cost Buckets from Cost Template]]
- [[3-Resources/Glossary/Define Cost Set|Define Cost Set]]

## Sources
- [Costing Basic Data — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/AboutCostingBasicData.htm)
- [Costing Set Up — IFS Community](https://community.ifs.com/finance-financials-42/costing-set-up-56820)
