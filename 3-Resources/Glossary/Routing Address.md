---
type: glossary
term: Routing Address
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Routing Address

## Summary

A Routing Address (also called a Destination Address) is the concrete target a Routing Rule sends a matching message to. It names a Transport Connector (REST, PL/SQL, Projection, File, Ftp, Http, Mail, Sftp, or a custom sender) and the connector-specific data needed to reach it (a URL, a PL/SQL package.method, an output file path, an email recipient, and so on), plus format settings — Envelope, encoding, compression — and any Transformers to run on the message before it's sent and on a response before it's returned. Several addresses attached to the same rule can be strung into an Address Chain so one message is processed by each in sequence.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/Routing Rule|Routing Rule]]
- [[3-Resources/Glossary/Transport Connector|Transport Connector]]
- [[3-Resources/Glossary/Address Chain|Address Chain]]
- [[3-Resources/Glossary/Envelope|Envelope]]
- [[3-Resources/Glossary/Transformer|Transformer]]

## Sources
- Routing Rules and Addresses
