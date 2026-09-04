---
type: glossary
term: Authorization Templates
source: local-docs
created: 2026-09-03
tags: [glossary, ifs, purchasing]
---

## Summary

An authorization routing template defines the sequence of authorizers, authorization groups, project roles, positions, buyers, or requisitioners who must approve a purchase requisition or purchase order. Each template is built from steps with a step number; the person or group with the lowest step number must authorize first, and multiple entries can share a step number so they can authorize in any order relative to each other. Authorization rules (for requisitions, orders, or change orders) reference a template, and the template is what actually gets attached to a document once its rule matches.

## Related
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/Glossary/About Purchase Authorization|About Purchase Authorization]]
- [[3-Resources/Glossary/Authorizers|Authorizers]]
- [[3-Resources/Glossary/Authorization Groups|Authorization Groups]]
- [[3-Resources/Glossary/Enter Purchase Order Authorization Rule|Enter Purchase Order Authorization Rule]]
- [[3-Resources/Glossary/Enter Purchase Requisition Authorization Rule|Enter Purchase Requisition Authorization Rule]]

## Sources
- Topics in IFS Cloud/Procurement/Purchase Authorization.md
