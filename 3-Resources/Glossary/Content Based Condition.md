---
type: glossary
term: Content Based Condition
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Content Based Condition

## Summary

A Content Based Condition is a Search / Operation / Match triple attached to a Routing Rule that inspects one field of the message — an XML tag or attribute for inbound XML, or a header-style attribute such as `MESSAGE_FUNCTION`, `SENDER`, or `RECEIVER` for outbound application messages — to decide whether that rule should handle the message. A rule can carry several conditions (all must match), and when multiple rules match the same message, the rule with the most matching conditions is preferred, with the earliest-created rule winning any remaining tie.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/Routing Rule|Routing Rule]]
- [[3-Resources/Glossary/Simplified Routing|Simplified Routing]]

## Sources
- Routing Rules and Addresses
- IFS Connect for Sending CTC E-invoices
- IFS Connect for Receiving E-invoices
