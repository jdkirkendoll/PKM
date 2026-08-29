---
type: glossary
term: Transformer
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Transformer

## Summary

A Transformer is a Java- or XSLT-based component configured in IFS Connect that converts a message from one format to another — for example XML to JSON, or a third-party schema like xCBL to IFS XML — on its way into or out of the system. Transformers are attached to a Routing Address and can be chained in a flow (one for preprocessing, such as stripping a namespace, followed by another for the main conversion), while a separate Response Transformer handles synchronous replies or address-chaining responses before they're returned. Binary message content can only be transformed by a Java transformer, not an XSLT one.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/Routing Address|Routing Address]]
- [[3-Resources/Glossary/IFS Connect|IFS Connect]]

## Sources
- IFS Connect
- Setup IFS Connect
- Routing Rules and Addresses
