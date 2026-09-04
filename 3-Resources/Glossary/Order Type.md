---
type: glossary
term: Order Type
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, customer-orders]
---

## Summary
Order Type is basic data that controls how a customer order flows through the system. Each order type defines which events (release, reserve, create pick list, report picking, deliver, invoice, etc.) happen automatically versus require a manual "Stop After" step, and whether priority reservations, transportation consignments, and shipment inventory apply. Every customer order must have an order type — either entered manually or defaulted from the customer record (see [[3-Resources/Glossary/Define a Default Order Type on Customer|Define a Default Order Type on Customer]]). IFS ships preset types such as Normal (NO) and Service Order (SEO), which can be modified, and companies typically add their own to represent different order routines (e.g. multi-site orders).

## Related
- [[3-Resources/BDR/Customer Orders|Customer Orders (BDR)]]
- [[3-Resources/Glossary/Add or Modify Order Types|Add or Modify Order Types]]
- [[3-Resources/Glossary/Define a Default Order Type on Customer|Define a Default Order Type on Customer]]

## Sources
- Topics in IFS Cloud/Sales/Customer Order Type.md
