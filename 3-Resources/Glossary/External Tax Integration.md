---
type: glossary
term: External Tax Integration
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# External Tax Integration

## Summary

External Tax Integration connects IFS Cloud to third-party sales-tax engines — Vertex Sales Tax (Vertex O Series) from Vertex Inc., and Avalara Sales Tax and AvaTax Brazil from Avalara — for markets such as the US, Canada, and Brazil where tax codes are numerous and rates change too often for IFS Cloud's own default Accounting Rules tax tables to stay accurate without constant manual updates. Both are subscription services: Vertex O Series updates tax information instantly, while Avalara updates on a monthly basis. When a tax calculation runs (for example on a customer order), IFS Cloud calls out to the external service to retrieve the correct rate and let it perform the calculation, rather than relying on locally maintained rates. The integration touches Application Services basic data, Accounting Rules (basic data and the communication layer to Vertex/Avalara), Enterprise basic data, and Customer Order.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/IFS Connect|IFS Connect]]

## Sources
- External Tax Integration
