---
type: glossary
term: Define Cost Bucket
source: web
created: 2026-08-28
tags: [glossary, ifs, costing]
---

# Define Cost Bucket

## Summary

A Cost Bucket in IFS Cloud Costing groups together the cost elements that make up part of a given part's total cost — the system's cost calculation only ever considers costs represented in cost buckets. Buckets come in several types: Bucket of Element (the standard type used by predefined system buckets), Bucket of Burden (a cost source that can be flagged Non-deductible Tax when it holds Material Cost buckets), Bucket of Buckets (a cost source that rolls up other buckets), and Buckets of Activity (auto-generated when defining cost activities, or created manually). The system provides predefined bucket IDs out of the box — e.g. 110 Estimated Material Cost, 120 Latest Purchase Price, 200 Labor Runtime Cost, 300 Machine Cost — and each bucket must be connected to a Posting Cost Group; cost elements and sites must already be defined before a cost bucket can be created.

## Related
- [[3-Resources/BDR/Costing|Costing (BDR)]]
- [[3-Resources/Glossary/Define Cost Element|Define Cost Element]]
- [[3-Resources/Glossary/Assign Cost Element to Cost Bucket|Assign Cost Element to Cost Bucket]]
- [[3-Resources/Glossary/Define Cost Template|Define Cost Template]]

## Sources
- [Define Cost Bucket — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/Costing/ActivityDefineCostBucket.htm)
- [Costing Basic Data — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/AboutCostingBasicData.htm)
