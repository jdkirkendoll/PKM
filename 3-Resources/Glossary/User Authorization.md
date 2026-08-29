---
type: glossary
term: User Authorization
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# User Authorization

## Summary

User Authorization in IFS Cloud answers "what are you allowed to do," and splits into **functional authorization** (which operations, procedures, and functions a user may invoke — enforced through Permission Set grants on Projections, Projection Actions, Database Tasks, Lobbies, Workflows, and Quick Reports) and **data authorization** (which specific rows of data a user may operate on, typically enforced through database views that filter automatically by role). Authorization is role-based: rather than granting rights per user, rights are granted to roles (Permission Sets), and roles can themselves be granted to other roles, so an individual's access can be reassigned wholesale just by changing which roles they hold. All authorization logic runs server-side, so it can never be bypassed by a modified or unofficial client.

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/Permission Set|Permission Set]]
- [[3-Resources/Glossary/Projection|Projection]]
- [[3-Resources/Glossary/User Authentication|User Authentication]]

## Sources
- User Authorization
- Access Security
- Access Control
