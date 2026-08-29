---
type: glossary
term: Simplified Routing
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Simplified Routing

## Summary

Simplified Routing is a lightweight alternative to full Routing Rule evaluation, meant for installations with many rules and/or high message volume where testing every rule's conditions against every message becomes slow. It's enabled independently for inbound (only `SOAP_IFS` messages) and outbound (only `APPLICATION_MESSAGE`) messages against a single chosen attribute — `MESSAGE_TYPE`, `MESSAGE_FUNCTION`, `SENDER`, or `RECEIVER`. At server startup, rules of that type whose Content Based Condition uses the chosen attribute with an `equals` operation are loaded into an in-memory map keyed by the attribute's value, so a matching message is routed with a simple lookup instead of a full rule scan; a message with no matching key, or with the attribute missing entirely, falls back to standard routing.

> [!note] Confidence: moderate — the general mechanism is described plainly in the source, but exact internal timing/caching behavior is inferred from the documentation's description rather than stated exhaustively.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/Routing Rule|Routing Rule]]
- [[3-Resources/Glossary/Content Based Condition|Content Based Condition]]

## Sources
- Routing Rules and Addresses
