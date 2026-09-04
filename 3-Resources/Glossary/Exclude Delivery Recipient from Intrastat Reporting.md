---
type: glossary
term: Exclude Delivery Recipient from Intrastat Reporting
source: mixed
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

Because Intrastat reporting is about movement of goods between EU countries, a delivery recipient (ship-to party) located in the same country as the reporting company, or otherwise not part of a cross-border movement, shouldn't be picked up by the Intrastat collection job. This activity flags such recipients so their deliveries are excluded, keeping the report limited to genuine intra-EU cross-border movements.

> [!note] Confidence: moderate
> Consistent with the Intrastat Report's general logic around delivery/document address and country matching, but the specific "exclude delivery recipient" flag was not confirmed by name in a dedicated source.

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/Exclude Customer from Intrastat Reporting|Exclude Customer from Intrastat Reporting]]
- [[3-Resources/Glossary/Exclude Supplier from Intrastat Reporting|Exclude Supplier from Intrastat Reporting]]

## Sources
- IFS Functional Area Models/Procurement/Follow-up and Analysis, Procurement/About Intrastat Report.md
- Web: [Intrastat Reporting Country - Delivery OR Document Address — IFS Community](https://community.ifs.com/supply-chain-251/intrastat-reporting-country-delivery-or-document-address-19826)
