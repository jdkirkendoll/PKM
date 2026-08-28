---
type: glossary
term: Where Used Analysis for Cost Buckets
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Where Used Analysis for Cost Buckets

## Summary

A Cost Bucket represents a category of a part's cost (e.g., material, labor, machine, subcontracting) and is built up from one or more cost elements; cost buckets are in turn assigned to cost templates. Where Used Analysis for Cost Buckets lets a user check which other costing objects — cost templates, and ultimately the parts costed through them — reference a given cost bucket before that bucket is changed or removed, following the same "where used" pattern IFS Cloud uses elsewhere in basic data to warn against deleting or modifying records that are still in use. This avoids breaking cost calculations that depend on the bucket.

> [!note] Confidence: moderate
> No IFS Cloud documentation page describing a "Where Used Analysis" screen specifically for Cost Buckets was found. This entry combines documented Cost Bucket concepts (bucket → cost template → part cost) with IFS Cloud's general "where used" dependency-check pattern seen elsewhere in the product (e.g., blocking deletion of basic data still referenced by other records), rather than a source confirming the exact costing screen.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Where Used Analysis for Cost Elements|Where Used Analysis for Cost Elements]]

## Sources
- [Define Cost Bucket — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/Costing/ActivityDefineCostBucket.htm)
- [Costing Basic Data — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/AboutCostingBasicData.htm)
- [How to delete a Sales Process from Basic Data? — IFS Community](https://community.ifs.com/distribution-crm-commerce-39/how-to-delete-a-sales-process-from-basic-data-50184)
