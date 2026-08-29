---
type: glossary
term: System Privilege
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# System Privilege

## Summary

A System Privilege is a fixed, non-configurable grant of elevated system-level authority, unrelated to data or functional (Projection-based) authorization — it can only be granted to a Permission Set, never directly to a user. IFS Cloud ships a small, closed set of them: `ADMINISTRATOR` (near-Appowner authority, granted to `FND_ADMIN`, used with care), `CONNECT` (required for any IFS Client to reach backend methods at all — without it, requests get an HTTP 401), `IMPERSONATE USER` (run as another user), `DEFINE SQL` (lets custom SQL execute through application services, effectively granting access to any data reachable via database views), `DEBUGGER` (server debug stack traces in the IFS Cloud debug console), `DOCMAN ADMINISTRATOR` and `EXPCTR ADMINISTRATOR` (component-specific admin rights for Document Management and Export Control), and `LOBBY DATASOURCE DESIGNER` (configure Lobby datasources — with the caveat that it allows querying any view/table). Most of these are described as "very high privilege" and warrant careful, limited assignment.

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/Permission Set|Permission Set]]
- [[3-Resources/Glossary/Projection|Projection]]

## Sources
- System Privileges
- Permission Set Overview
