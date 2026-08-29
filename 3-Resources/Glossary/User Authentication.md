---
type: glossary
term: User Authentication
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# User Authentication

## Summary

User Authentication in IFS Cloud answers "who are you": every call to a backend API must carry a valid access token, obtained via the OAuth 2 Authorization Framework and the OpenID Connect protocol built on it, issued and validated by the Identity and Access Manager (IFS IAM). Browser clients are redirected by the IFS Proxy through the IAM's Authorization Code Flow and end up with a session cookie tied to an access token; non-browser or non-graphical clients instead obtain and supply a bearer token directly, using Authorization Code Flow inside the client, or a direct-access grant (Client Credentials Flow for a service/client identity, or Resource Owner Password Credentials Flow for an actual end-user account — unsupported for users tied to an external identity provider). HTTP Basic authentication is available only as a last resort on Remote deployments. The IAM can authenticate against its own built-in user registry (kept synced with the IFS database) or delegate to an external OpenID Connect-compliant identity provider such as Azure AD or Okta for single sign-on; either way, backend containers only ever validate the IAM's own access tokens, making authentication behind the proxy stateless regardless of which identity source was used.

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/Identity and Access Manager|Identity and Access Manager]]
- [[3-Resources/Glossary/User Authorization|User Authorization]]
- [[3-Resources/Glossary/Security Checkpoint|Security Checkpoint]]

## Sources
- User Authentication
- Access Security
- Access Control
- Identity and Access Manager
