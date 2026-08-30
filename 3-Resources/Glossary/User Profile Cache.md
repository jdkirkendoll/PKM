---
type: glossary
term: User Profile Cache
source: local-pdf
created: 2026-08-30
tags: [glossary, ifs, technical]
---

# User Profile Cache

## Summary

The User Profile (Cache) is where IFS Cloud Web persists per-user settings across sessions: bookmarked pages for quick access, "profiled" field values that take priority over an attribute's default value once saved (`field Foo { defaulttoprevious = [true]; }`), and saved search-context values (the same `defaulttoprevious` property set on a search context field). Developers should consider using the profile wherever remembering a user's last choice would improve the experience of a Cloud Web page.

## Related
- [[3-Resources/Guides/IFS Cloud Web Searching|IFS Cloud Web Searching]]

## Sources
- User Profile Cache - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
