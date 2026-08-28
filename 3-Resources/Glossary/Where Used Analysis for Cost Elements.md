---
type: glossary
term: Where Used Analysis for Cost Elements
source: web
created: 2026-08-28
tags: [glossary, ifs, costing]
---

# Where Used Analysis for Cost Elements

## Summary

A Cost Element corresponds to a cost-generating item such as material cost, work center cost, or labor cost, and cost elements are connected to and accessed from cost buckets. Where Used Analysis for Cost Elements lets a user check which cost buckets (and, transitively, which cost templates and parts) a given cost element is connected to before it is changed or removed, following IFS Cloud's general "where used" dependency-check pattern used elsewhere in basic data. This helps administrators understand the downstream impact — including overhead attribution and WIP transfer timing tied to the element's overhead type — before altering a widely-used cost element.

> [!note] Confidence: moderate
> No IFS Cloud documentation page describing a "Where Used Analysis" screen specifically for Cost Elements was found. This entry combines documented Cost Element concepts (element → cost bucket → cost template) with IFS Cloud's general "where used" dependency-check pattern seen elsewhere in the product, rather than a source confirming the exact costing screen.

## Related
- [[3-Resources/BDR/Costing|Costing (BDR)]]
- [[3-Resources/Glossary/Where Used Analysis for Cost Buckets|Where Used Analysis for Cost Buckets]]

## Sources
- [Define Cost Element — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/ActivityDefineCostElement.htm)
- [Costing Basic Data — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/AboutCostingBasicData.htm)
- [How to delete a Sales Process from Basic Data? — IFS Community](https://community.ifs.com/distribution-crm-commerce-39/how-to-delete-a-sales-process-from-basic-data-50184)
