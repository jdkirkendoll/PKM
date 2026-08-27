---
type: glossary
term: Hire Period Days – Exceptions
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Hire Period Days – Exceptions

## Summary

Date Exceptions are the basic-data calendar of specific dates — public holidays, plant shutdowns, and similar company-wide non-working days — that are excluded when IFS Cloud calculates the number of chargeable days within a hire/rental period. They work alongside the Chargeable Days (working-day pattern) setup: Chargeable Days decides which days of the week are normally billable, and the Date Exception calendar then carves out specific dates that should not be charged even though they fall on an otherwise chargeable day. This must be configured as basic data so hire transactions (both renting equipment out and hiring assets/vehicles in) don't bill for days the business itself was closed.

> [!note] Confidence: moderate
> The exact IFS Cloud screen/entity name ("Date Exception", referenced as "Date Exception ID" on rental lines and site basic data in IFS Community discussions) could not be independently confirmed against the official docs.ifs.com page, which was not reachable in this research session. The mechanism described is corroborated by multiple IFS Community forum threads on rental chargeable-day calculation.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Types of Working or Hire days|Types of Working or Hire days]]
- [[3-Resources/Glossary/Default Site settings for hire charge periods and exceptions|Default Site settings for hire charge periods and exceptions]]

## Sources
- [Rent Out flow - How to get fix Monthly Rental Price — IFS Community](https://community.ifs.com/distribution-crm-commerce-39/rent-out-flow-how-to-get-fix-monthly-rental-price-18175)
- [Rental Management in IFS Cloud — IFS Community](https://community.ifs.com/supply-chain-251/rental-management-in-ifs-cloud-48219)
