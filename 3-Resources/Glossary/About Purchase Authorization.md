---
type: glossary
term: About Purchase Authorization
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

Purchase authorization is the control mechanism that requires a purchase requisition line, purchase order, or purchase order change order to be approved by one or more designated authorizers before it can continue through the procurement process. Which documents require authorization is controlled by authorization rules (for requisitions, orders, or an approved suppliers list); the matching rule fetches an authorization routing template that lists who must approve, and in what order. Requisition lines get Released status but cannot become a purchase order, and purchase orders stay in Planned status, until authorization is complete. This BDR activity is the umbrella setup step for the whole authorization framework covered by the more specific activities below.

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/Authorization Groups|Authorization Groups]]
- [[3-Resources/Glossary/Authorization Templates|Authorization Templates]]
- [[3-Resources/Glossary/Authorizers|Authorizers]]
- [[3-Resources/Glossary/Enter Purchase Order Authorization Rule|Enter Purchase Order Authorization Rule]]
- [[3-Resources/Glossary/Enter Purchase Requisition Authorization Rule|Enter Purchase Requisition Authorization Rule]]
- [[3-Resources/Glossary/Release Authorization Rule|Release Authorization Rule]]

## Sources
- Topics in IFS Cloud/Procurement/Purchase Authorization.md
