---
type: glossary
term: Posting Controls in the Purchase Group for Hire in
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Posting Controls in the Purchase Group for Hire in

## Summary

"Hire in" (rent-in) is when the company rents equipment from an external supplier, tracked through a purchase order. Purchase Group is a control type that posting control rules can key off of, so cost postings for rented-in equipment can be routed to different accounts depending on which purchase group the purchase order line belongs to, rather than needing a separate rule per part or supplier. IFS documentation on Rental Management notes that a posting control (referred to as M116, for account and asset) must be set up, alongside supplier ownership settings, before rent-in transactions will post correctly.

> [!note] Confidence: moderate
> The general purchase-group-as-control-type mechanism and the M116 posting control for rental are confirmed in IFS sources, but the exact configuration screen/steps for "posting controls in the purchase group for hire in" specifically were not found verbatim.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Posting Controls In the Order group for Hire Out|Posting Controls In the Order group for Hire Out]]
- [[3-Resources/Glossary/Posting Controls for Project Groups for Internal Hire|Posting Controls for Project Groups for Internal Hire]]
- [[3-Resources/Glossary/Standard Purchasing Controls - General|Standard Purchasing Controls - General]]

## Sources
- [Rental Management — IFS Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/RentalManagement/AboutRentalManagement.htm)
- [What is the ideal way to connect a rental asset to an object? — IFS Community](https://community.ifs.com/finance-financials-42/what-is-the-ideal-way-to-connect-a-rental-asset-to-an-object-15581)
- [Start Rental — IFS Documentation](https://docs.ifs.com/ifsclouddocs/25r2/RentalManagement/ActivityStartRental.htm)
