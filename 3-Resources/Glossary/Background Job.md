---
type: glossary
term: Background Job
source: web
created: 2026-08-29
tags: [glossary, ifs, technical]
---

# Background Job

## Summary

A Background Job is IFS Cloud's mechanism for executing a server method without the client waiting for it to finish — used when a task is long-running, needs to run off-peak, or the user simply wants to keep working. `Transaction_SYS` submits jobs into a [[3-Resources/Glossary/Batch Queue|Batch Queue]] via `Deferred_Call`; the queue itself is an Oracle `dbms_scheduler` job that works through everything pending for it. A job moves through the states Posted → Executing (or Externally Executing, for reports rendered by the BR Execution Server) → Ready / Warning / Error, with a Postponed state reserved for online delivery installations. Only jobs created via `Transaction_SYS` deferred calls or [[3-Resources/Glossary/Scheduled Task|Scheduled Tasks]] appear on the Background Jobs overview screen — raw `dbms_scheduler` jobs (e.g. IFS/Info Services) are not shown there.

## Related
- [[3-Resources/Guides/IFS Background & System Processing|IFS Background & System Processing (Guide)]]
- [[3-Resources/Glossary/Batch Queue|Batch Queue]]
- [[3-Resources/Glossary/Scheduled Task|Scheduled Task]]
- [[3-Resources/Glossary/Batch Processor|Batch Processor]]

## Sources
- Overview
- Background Jobs
