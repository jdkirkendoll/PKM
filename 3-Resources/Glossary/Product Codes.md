---
type: glossary
term: Product Codes
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Product Codes

## Summary

Product Code is a basic-data classification field on the Inventory Part record, used alongside Product Family to group and categorize parts. It is one of the accounting/stock-control parameters carried on the part (together with Accounting Group and Product Family) and can be locked from modification once a part has a non-zero inventory value, since changing it can affect stock account control. For rental/hire equipment, defining Product Codes up front gives a consistent way to classify parts across accounting, reporting, and demand grouping before parts are created and stock is transacted against them.

> [!note] Confidence: moderate
> Documentation found describes Product Code mainly by its relationship to Product Family and stock account control rather than giving a dedicated, detailed description of Product Code on its own — the exact list of behaviors it drives (beyond classification and being a locked stock-control field) was not independently verified.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Commodity Codes|Commodity Codes]]
- [[3-Resources/Glossary/Product Families|Product Families]]

## Sources
- [Update Product Family and Product Code — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/MfgStandard/ActivityUpdateProductFamily.htm)
- [Modification of product code/family — IFS Community](https://community.ifs.com/buying-procurement-demand-planner-asc-srm-41/modification-of-product-code-family-25995)
