---
type: glossary
term: E-invoice Processing Type
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# E-invoice Processing Type

## Summary

E-invoice Processing Type is Financials basic data that drives how IFS Cloud sends Continuous Transaction Controls (CTC) e-invoices through IFS Connect. It selects one of three E-invoice Standards — **IFS E-invoice 2.0** (covering country-specific formats like E-invoice Spain, India, Mexico, Poland, Saudi Arabia, Vietnam, Malaysia, Indonesia, and a General format), **IFS UBL Invoice** (UBL 2.1 enhanced with IFS-specific extensions), or **UBL Invoice 2.1** (the plain OASIS standard with no extensions) — and names a Service Provider. IFS Connect Routing Rules then use `RECEIVER` (or `SENDER`, evaluated against the sending company) Content Based Conditions matched against that Service Provider to direct each outgoing e-invoice to the correct Routing Address, and a separate inbound rule receives the provider's response back into the process.

> [!note] Confidence: moderate — the field is Financials basic data rather than part of IFS Connect itself; this entry covers only the parts the IFS Connect documentation describes (how it's referenced from Routing Rules), not the full Financials configuration of e-invoice processing.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/Routing Rule|Routing Rule]]
- [[3-Resources/Glossary/Content Based Condition|Content Based Condition]]
- [[3-Resources/Glossary/Routing Address|Routing Address]]

## Sources
- IFS Connect for Sending CTC E-invoices
- IFS Connect for Receiving E-invoices
