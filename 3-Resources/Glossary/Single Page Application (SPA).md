---
type: glossary
term: Single Page Application (SPA)
source: local-pdf
created: 2026-08-30
tags: [glossary, ifs, technical]
---

# Single Page Application (SPA)

## Summary

IFS Cloud Web is built as a Single Page Application: the full page loads once, and every subsequent interaction fetches only the data needed to update the current view via Ajax/REST calls, rather than reloading the whole page. This is what makes the client feel fluid rather than doing a full page refresh per action. It relies on REST (Representational State Transfer), mapping each CRUD action to a standard HTTP method: Create → `POST`, Read → `GET`, Update/Replace → `PUT`, Partial Update → `PATCH`, Delete → `DELETE`.

## Related
- [[3-Resources/Guides/IFS Cloud Web Development Overview|IFS Cloud Web Development Overview]]

## Sources
- Single Page Application (SPA) - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
