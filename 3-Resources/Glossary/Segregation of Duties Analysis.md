---
type: glossary
term: Segregation of Duties Analysis
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# Segregation of Duties Analysis

## Summary

Segregation of Duties Analysis is IFS Cloud's tool for detecting when a user's combined Permission Set grants give them access to two Functional Areas that have been marked as conflicting — for example, being able to both create and approve the same type of transaction. It works from cached data (refreshable on demand or on a schedule) and, for each violation, shows whether the conflicting access came from a **Direct Grant** (a projection grant) or a **Workflow Grant** (an activity performed through a workflow). A reported conflict is informational only and never restricts the user's actual access; resolving one is a judgment call — confirm the underlying rule still applies, split an overly broad Functional Area into smaller ones, or revoke/restructure the user's Permission Set grants so they no longer span both conflicting areas.

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/Functional Area|Functional Area]]
- [[3-Resources/Glossary/Permission Set|Permission Set]]

## Sources
- Segregation of Duties Analysis
- Functional Areas
- Access Control
