---
type: glossary
term: Identity and Access Manager
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# Identity and Access Manager

## Summary

The Identity and Access Manager (IFS IAM) is the OAuth2 authorization server component of IFS Cloud responsible for authenticating users and issuing the access tokens that backend APIs validate. It's configured and managed from Solution Manager across four areas: **External Identity Providers** (delegating authentication to an OpenID Connect-compliant external service such as Microsoft Azure AD or Okta instead of IFS IAM's own built-in accounts), **Custom Clients** (registering an external application that needs to access the system, via the IAM Client page), **IAM Configuration** (password policies, the IAM's SMTP email server for activation emails, and session/token timeouts), and **Authentication Auditing** (tools to review user logins, sessions, and administrative actions). Out of the box, the IAM maintains its own user registry kept in sync with the IFS database.

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/User Authentication|User Authentication]]
- [[3-Resources/Glossary/SCIM|SCIM]]
- [[3-Resources/Glossary/Solution Manager|Solution Manager]]

## Sources
- Identity and Access Manager
- User Authentication
- Access Control
