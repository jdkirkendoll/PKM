---
type: glossary
term: Define a default Order Type on Customer
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

When a supplier is set up to receive charged/no-charge outsourced components, the supplier's linked customer record needs a default order type so that the system-generated customer order (created automatically when the purchase order releases the components) has somewhere to inherit its order-type-driven behavior from — reservation, picking, and shipment handling. Without a default order type on the customer, the automatic customer order creation used by the charge/no charge flow cannot proceed.

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/Connect Customer to Supplier|Connect Customer to Supplier]]
- [[3-Resources/Glossary/Indicate Purchase Component Method|Indicate Purchase Component Method]]

## Sources
- Topics in IFS Cloud/Procurement/Charge-No Charge in Outsourcing.md
