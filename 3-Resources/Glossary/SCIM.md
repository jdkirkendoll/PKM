---
type: glossary
term: SCIM
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# SCIM

## Summary

SCIM (System for Cross-Domain Identity Management) is a REST/JSON standard IFS Cloud supports for provisioning Users and Groups from an external identity provider such as Azure AD. In IFS Cloud, SCIM is strictly **one-way**: the external identity provider pushes create, update, and delete operations into IFS Cloud, but changes made directly in IFS Cloud Web are never sent back out — and will be silently overwritten by the external provider's data on the next sync. Administrators configure a mapping from SCIM attributes (`userName`, `name.formatted`, `name.givenName`/`familyName`, `emails`, `addresses`, `phoneNumbers`, etc.) to IFS database columns; `userName`, `name.formatted`, and `displayName` are mandatory. If `name.givenName`/`familyName` aren't mapped, IFS falls back to a generated user ID from the first three letters of the first and last name, extending or appending a numeric suffix to resolve collisions among users with the same name.

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/Identity and Access Manager|Identity and Access Manager]]
- [[3-Resources/Glossary/User Authentication|User Authentication]]

## Sources
- SCIM
- Access Control
