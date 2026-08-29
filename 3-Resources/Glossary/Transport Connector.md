---
type: glossary
term: Transport Connector
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Transport Connector

## Summary

A Transport Connector is the pluggable component that gives IFS Connect its connectivity to a specific external protocol — translating between IFS Cloud's internal JSON format and formats like MIME/SMTP for mail, or the wire format for HTTP/HTTPS, FTP/FTPS/SFTP, JMS, and REST. Connectors are configured as **Readers** (inbound, e.g. a file reader polling a directory) or **Senders** (outbound, e.g. an HTTP sender calling a remote URL) under Setup IFS Connect, and ship ready-to-use for the common protocols, with a development framework available to build custom ones. Because IFS Connect routes messages to and from connectors purely by configuration, any connector — built-in or custom — can execute any Integration Projection Action/Function or PL/SQL method with an inbound message, and any business logic can use any connector to send an outbound one.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/IFS Connect|IFS Connect]]
- [[3-Resources/Glossary/Routing Address|Routing Address]]

## Sources
- IFS Connect
- Setup IFS Connect
- Routing Rules and Addresses
