---
type: glossary
term: IFS Connectivity
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# IFS Connectivity

## Summary

IFS Connectivity is an older, separate mechanism from IFS Connect for transferring messages asynchronously between applications, using an Out Message Box and an In Message Box. The transfer can happen within the same database, between two databases over a DB link, or via the file system or a third-party tool. Two background processes drive it — `Connectivity_SYS.Process_Outbox__`, which picks up `Released` messages and moves them out, and `Connectivity_SYS.Process_Inbox__`, which watches the In Message Box and invokes the registered receiving method for each arriving message. Because multiple messages can be processed in parallel, arrival order at the In Message Box is guaranteed but processing order is not, so messages that depend on each other (e.g. a new order followed by a change to it) must be routed to a queue that allows only one process at a time.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/Connectivity Inbox|Connectivity Inbox]]
- [[3-Resources/Glossary/Connectivity Outbox|Connectivity Outbox]]
- [[3-Resources/Glossary/Message Class|Message Class]]
- [[3-Resources/Glossary/Installation Site|Installation Site]]

## Sources
- IFS Connectivity Technical Details
- Setup IFS Connectivity
