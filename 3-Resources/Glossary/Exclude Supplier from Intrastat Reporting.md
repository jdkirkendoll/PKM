---
type: glossary
term: Exclude Supplier from Intrastat Reporting
source: mixed
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

On the import side, purchases from a supplier that isn't actually shipping goods across an EU border (a domestic supplier, or one whose goods don't trigger a reportable movement) shouldn't appear on the Intrastat report. This activity flags such suppliers so their purchase transactions are excluded from the Intrastat collection job, which otherwise scans all transactions in the reporting period that could potentially affect Intrastat.

> [!note] Confidence: moderate
> The Intrastat collection job's broad transaction scan and country/address-based inclusion logic are confirmed generally; the specific "exclude supplier" flag was not confirmed by name in a dedicated source.

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/Exclude Customer from Intrastat Reporting|Exclude Customer from Intrastat Reporting]]
- [[3-Resources/Glossary/Exclude Delivery Recipient from Intrastat Reporting|Exclude Delivery Recipient from Intrastat Reporting]]

## Sources
- IFS Functional Area Models/Procurement/Follow-up and Analysis, Procurement/About Intrastat Report.md
