---
type: glossary
term: Address Chain
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Address Chain

## Summary

An Address Chain is a sequence of Routing Addresses attached to the same Routing Rule and ordered by a **Chain Link No**, so one message is processed by each address in turn rather than fanning out independently to all of them. A typical chain calls a Projection method first, sends the result by mail second, and also writes it to a file third — each link's output can feed into the next, letting a single rule combine several destinations or processing steps in a defined order.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/Routing Address|Routing Address]]
- [[3-Resources/Glossary/Routing Rule|Routing Rule]]

## Sources
- Routing Rules and Addresses
