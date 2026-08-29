---
type: glossary
term: Message Class
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Message Class

## Summary

Message Class is IFS Connectivity basic data that registers which message types the system knows about and controls whether each can be transmitted from the Out Message Box (the `Send` flag) and/or received into the In Message Box (the `Receive` flag). For a class that can be received, the `Action` column names the method invoked to process an incoming message of that class. Examples include `IFS_REPLICATION` and `IFS_REPLICATION_CONFIGURATION` for site replication, and business-specific classes like `INVOIC` for invoice transfer.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/IFS Connectivity|IFS Connectivity]]
- [[3-Resources/Glossary/Installation Site|Installation Site]]

## Sources
- Setup IFS Connectivity
