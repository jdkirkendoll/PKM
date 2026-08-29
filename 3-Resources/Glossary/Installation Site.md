---
type: glossary
term: Installation Site
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Installation Site

## Summary

Installation Site is IFS Connectivity basic data identifying a database that messages can be transferred to or from. Its Site ID connects a Message Receiver to a physical DB Link; a site created without a database link means the message is transmitted within the same database and application owner instead. Each site also carries a Timezone Difference (hours offset from the current site) and a `This Site` flag marking the local installation.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/IFS Connectivity|IFS Connectivity]]
- [[3-Resources/Glossary/Message Class|Message Class]]

## Sources
- Setup IFS Connectivity
