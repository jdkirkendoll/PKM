---
type: glossary
term: Security Checkpoint
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# Security Checkpoint

## Summary

A Security Checkpoint is a re-authentication gate placed on a specific sensitive function or business flow, independent of a user's Permission Set grants: when triggered, the logged-in user must re-enter their password (and optionally retype their username, plus an audit comment) before the transaction is allowed to complete. It's designed to defend against an unattended, already-logged-in workstation being abused to commit fraudulent transactions, since only the actual logged-on user's password will satisfy the check. Every successful pass writes a Security Checkpoint Log entry (who, when, what) and fires a `SECURITY_CHECKPOINT_SUCCESS` event that can trigger custom follow-up logic. A **Security Checkpoint Gate** is the underlying configuration (id, description, log message template, active/inactive flag) plus the implementation code wired into a business flow; if multiple gates would fire within a single transaction, only the first requires re-authentication. The whole service can be enabled or disabled from Solution Manager.

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Guides/IFS Security Checkpoints Setup|IFS Security Checkpoints Setup (Guide)]]
- [[3-Resources/Glossary/User Authentication|User Authentication]]
- [[3-Resources/Glossary/Permission Set|Permission Set]]

## Sources
- Security Checkpoints
- Access Control
