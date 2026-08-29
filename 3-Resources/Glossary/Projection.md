---
type: glossary
term: Projection
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# Projection

## Summary

A Projection is a self-contained web API in IFS Cloud that implements one defined business function — describing the data types, data sources, and operations available through it. Projections are the primary point of security enforcement: granting a Projection to a Permission Set is what makes every client page built on that Projection available to the end user. A Projection's Access Level relative to a given Permission Set is **None** (not granted), **Read Only** (view/retrieve only — some Projections are Read Only by design and can't take any action grants), **Full** (view, create, update, and delete, with exact scope depending on the Projection's own implementation), or **Custom** (started as Full or Read Only but had individual Projection Action or Entity Action grants edited away from that baseline).

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/Permission Set|Permission Set]]
- [[3-Resources/Glossary/User Authorization|User Authorization]]

## Sources
- Projection
- Permission Set Overview
- User Authorization
