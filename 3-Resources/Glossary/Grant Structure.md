---
type: glossary
term: Grant Structure
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# Grant Structure

## Summary

A Grant Structure is the mechanism by which Permission Sets inherit access from other Permission Sets: a Permission Set's total effective permissions equal its own direct grants plus everything granted indirectly through any Permission Set it has been granted (recursively). This lets administrators build a small number of reusable Functional Roles and compose them into End-User Roles, rather than duplicating grants across many sets. Circular grants — a Permission Set eventually granting itself — are not possible. Because granting one Permission Set to a user cascades every set beneath it in the structure (shown to the user as **Indirect** grants), a recommended baseline is to always include a core framework role such as `FND_WEBENDUSER_MAIN` or `FND_WEBENDUSER_B2B` in the structure. For maintainability, IFS recommends keeping individual Permission Set XML files under 2MB and achieving that through better-structured (smaller, modular) grants rather than splitting a single set's file, which isn't supported.

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/Permission Set|Permission Set]]

## Sources
- Grant Structure
- Grant Permission Sets to Users
- Permission Set Considerations
- Permission Set Overview
