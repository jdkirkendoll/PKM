---
type: glossary
term: Default Site settings for hire charge periods and exceptions
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Default Site settings for hire charge periods and exceptions

## Summary

Each Site in IFS Cloud can carry its own default Chargeable Days and Date Exception settings (basic data referenced from the Site record, sometimes via the site's Extended Site Info), so that when a hire/rental transaction is raised for that site the correct working-day pattern and holiday-exception calendar are applied automatically instead of being chosen manually every time. Setting this up per site matters when a company operates across sites with different regional holidays or working patterns, so that hire period billing defaults correctly wherever the transaction originates. Getting this basic data right before go-live avoids hire transactions defaulting to the wrong calendar or being blocked because no default is set.

> [!note] Confidence: moderate
> IFS Community forum reports describe the Site > Rental basic data fields (Chargeable Days ID, Date Exception ID) needing related basic data records to exist before they become editable/usable at the site level, but the exact screen path and field names could not be verified against the official docs.ifs.com page, which was not reachable in this research session.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Types of Working or Hire days|Types of Working or Hire days]]
- [[3-Resources/Glossary/Hire Period Days – Exceptions|Hire Period Days – Exceptions]]

## Sources
- [Rental Basic Data in Site cannot be edited — IFS Community](https://community.ifs.com/supply-chain-251/rental-basic-data-in-site-cannot-be-edited-51504)
- [Rental Management — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/RentalManagement/AboutRentalManagement.htm)
