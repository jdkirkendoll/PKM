---
type: glossary
term: Set up staff company cars on multiple sites
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Set up staff company cars on multiple sites

## Summary

This is a "Further Discussion" item rather than a documented IFS Cloud feature, and it reads as a company-specific implementation decision about how staff company cars are registered when employees or vehicles are associated with more than one site (for example, an employee based at one site but working across several, or a vehicle pool shared between sites). In IFS Cloud, company cars are typically modelled as rental/hire assets (internal hire) or fixed assets tied to a home Site, and site-level basic data (such as the Chargeable Days and Date Exception settings) is defined per site — so a multi-site arrangement requires deciding whether a car's "home" site data is used, whether it needs its own basic data replicated across sites, and how costs/charges are allocated when the vehicle or driver crosses site boundaries.

> [!note] Confidence: low — internal/company-specific
> No IFS Community or documentation source specifically describing "staff company cars across multiple sites" was found. This appears to be an internal decision to be worked out during implementation (e.g. which site owns the vehicle asset, how site-based rental/hire basic data applies to a shared or multi-site vehicle) rather than a standard, documented IFS Cloud configuration step. The description above is a general inference from how IFS Cloud structures assets and rental basic data by site.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Default Site settings for hire charge periods and exceptions|Default Site settings for hire charge periods and exceptions]]
- [[3-Resources/Glossary/Set up company car monthly rate|Set up company car monthly rate]]
- [[3-Resources/Glossary/Set up report receiver (default to KT)|Set up report receiver (default to KT)]]

## Sources
No specific source found; based on general IFS Cloud/ERP domain knowledge of how assets and rental basic data are structured per site.
