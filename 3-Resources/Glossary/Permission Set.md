---
type: glossary
term: Permission Set
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# Permission Set

## Summary

A Permission Set is IFS Cloud's core unit of authorization: a named collection of access grants to Projections, Reports, Lobbies, Workflows, Database Tasks, Task Chains, and System Privileges that together define what a user can and cannot do. Every Permission Set is one of two types — a **Functional Role** (covers one small business flow, only grantable to other Permission Sets) or an **End-User Role** (grantable directly to Users or User Groups, typically composed of several Functional Roles) — and one of three Delivery Types — **IFS_MANAGED_BASE** and **IFS_MANAGE** (shipped and maintained by IFS, not directly editable beyond user grants) or **CUSTOM** (created and fully managed within the customer's own environment). Permission Sets are created, duplicated, compared, deleted, exported/imported, and granted to users entirely through Solution Manager, and can be chained together via a Grant Structure so that one Permission Set inherits everything granted to the ones beneath it.

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/Grant Structure|Grant Structure]]
- [[3-Resources/Glossary/Projection|Projection]]
- [[3-Resources/Glossary/System Privilege|System Privilege]]
- [[3-Resources/Glossary/LTU Permission Set|LTU Permission Set]]
- [[3-Resources/Glossary/User Authorization|User Authorization]]

## Sources
- Permission Sets
- Permission Set Overview
- Permission Set Considerations
- Predefined Permission Sets
- Creating Permission Sets
- Deleting a Permission Set
- Duplicate Permission Sets
- Compare Permission Sets and Handle Differences
- Transfer Permission sets
- Exporting Permission sets
- Importing Permission Sets using the Solution Manager
- Import Permission Sets using IFS Installer
- Grant Permission Sets to Users
- Permission Set Grant Reports
