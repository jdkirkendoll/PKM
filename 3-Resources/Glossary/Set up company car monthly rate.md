---
type: glossary
term: Set up company car monthly rate
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Set up company car monthly rate

## Summary

This "Further Discussion" item concerns configuring a fixed monthly charge/rate for a company car, most likely modelled in IFS Cloud as an internal rental (hire) asset. A relevant complication found during research: IFS Cloud's Rental Management module natively supports Rental Duration units of Hours, Days, and Weeks, but does not have a built-in "Month" duration unit — this gap is discussed by multiple customers on the IFS Community forum who wanted a straightforward fixed monthly rental price. Because of this, setting up a true monthly rate for a company car typically requires a workaround, such as pricing per day/week and relying on Chargeable Days plus Date Exceptions to approximate a month, or handling the monthly figure outside the native rental pricing unit (e.g. via a manual price list line or a periodic charge process).

> [!note] Confidence: moderate — likely internal/company-specific
> The general limitation (no native monthly rental UoM) is corroborated by IFS Community threads, but the specific workaround this company intends to use for company car monthly rates was not found anywhere public — it's an internal implementation decision to be made and documented during the project, not a standard documented IFS Cloud feature.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Types of Working or Hire days|Types of Working or Hire days]]
- [[3-Resources/Glossary/Set up staff company cars on multiple sites|Set up staff company cars on multiple sites]]
- [[3-Resources/Glossary/Set up report receiver (default to KT)|Set up report receiver (default to KT)]]

## Sources
- [Rent Out flow - How to get fix Monthly Rental Price — IFS Community](https://community.ifs.com/distribution-crm-commerce-39/rent-out-flow-how-to-get-fix-monthly-rental-price-18175)
- [Rental Price Setting Monthly basis — IFS Community](https://community.ifs.com/supply-chain-251/rental-price-setting-monthly-basis-28267)
- [Rental module / Supplier long-term rent-in with fixed monthly payment — IFS Community](https://community.ifs.com/supply-chain-251/rental-module-supplier-logn-term-rent-in-with-fixed-monthly-payment-26969)
