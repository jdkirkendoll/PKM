---
type: glossary
term: Connectivity Inbox
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Connectivity Inbox

## Summary

The Connectivity Inbox is the administration screen for messages arriving in IFS Connectivity's In Message Box. Messages can be explored by Class ID, State, or Today's activity, viewed in full detail down to individual message lines, and exported to or imported from XML files. A message runs through states from `Posted` through `Processing` to `Transferred`, then to a final outcome the receiving method sets — `Accepted`, `Failed`, `Rejected`, `Acknowledged`, or `PartlyAccepted` (some lines errored, others didn't). A message stuck in `Incomplete` (an error interrupted processing) can be **Reactivated** back to `Posted`; one stuck in `Transferred` or `Rejected` can be **Reprocessed** back to `Posted` to try again once the underlying issue is fixed.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/IFS Connectivity|IFS Connectivity]]
- [[3-Resources/Glossary/Connectivity Outbox|Connectivity Outbox]]

## Sources
- IFS Connectivity Inbox
