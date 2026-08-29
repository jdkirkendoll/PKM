---
type: glossary
term: Envelope
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Envelope

## Summary

An Envelope is the header/body wrapper IFS Connect uses to carry routing metadata alongside the actual message data, recommended for inbound messages so routing parameters don't have to be inferred from the body content. The two built-in envelope types, `SOAP_IFS` and `SOAP_SIMPLE`, place routing parameters (`fndcn:Type`, `fndcn:Function`, `fndcn:Sender`, `fndcn:Receiver`) in a SOAP header; messages without a recognized envelope are classified `UNKNOWN_XML`, and non-XML content is classified `NONE_XML`. Custom envelope standards can be defined in IFS Connect configuration and then selected on a Routing Address's Format settings, alongside encoding and compression.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/Routing Address|Routing Address]]
- [[3-Resources/Glossary/Routing Rule|Routing Rule]]

## Sources
- Routing Rules and Addresses
- Setup IFS Connect
