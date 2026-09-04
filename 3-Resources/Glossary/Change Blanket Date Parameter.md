---
type: glossary
term: Change Blanket Date Parameter
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

Supplier agreements (including blanket purchase orders) are valid for defined periods with start/end dates, and a per-supplier "price effective date" parameter decides whether the purchase order's create date or its wanted delivery date is used to determine which period's terms apply. Periods cannot overlap, and a new period cannot begin until the previous one has an end date — so changing these date-related parameters directly affects which blanket period's pricing and terms a new purchase order picks up.

> [!note] Confidence: moderate
> The underlying date/period mechanics of supplier agreements are well documented; the exact screen or field named "Change Blanket Date Parameter" was not confirmed by name in a dedicated source.

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/Supplier Blanket Status|Supplier Blanket Status]]
- [[3-Resources/Glossary/Specify Blanket Statuses that Allows Purchasing|Specify Blanket Statuses that Allows Purchasing]]

## Sources
- IFS Business Models/Procurement/Initiate Purchase - linked pages/Supplier Blanket.md
