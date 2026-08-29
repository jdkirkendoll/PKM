---
type: glossary
term: Database Task
source: web
created: 2026-08-29
tags: [glossary, ifs, technical]
---

# Database Task

## Summary

A Database Task is a configured, schedulable call into a database stored procedure — specifically a procedure in an `_API` package, since only those are eligible when creating a new task. Its definition captures a name, the owning component, the method (`package.procedure`), the type of arguments it expects (No Parameter, Attribute String, IFS Message, or a Normal Parameter list of strings/dates/numbers), an optional validation method (which must accept an IFS Message), and behavioral flags: Single Schedule (the task can only ever be attached to one schedule, to prevent concurrent runs), Check Executing (skip starting a new run if an instance is already executing or queued, recalculating the next run time instead), and Check Same Day Execution. A Database Task executes as the user who scheduled it, via a [[3-Resources/Glossary/Scheduled Task|Scheduled Task]]. Tasks can be exported to XML (individually) or a Zip (in bulk) for moving between IFS Cloud installations; importing always replaces an existing task/chain with the same identity. The `Archive Application Messages` and `Forward Application Message Statistics` tasks are two shipped examples.

## Related
- [[3-Resources/Guides/IFS Background & System Processing|IFS Background & System Processing (Guide)]]
- [[3-Resources/Glossary/Database Task Chain|Database Task Chain]]
- [[3-Resources/Glossary/Scheduled Task|Scheduled Task]]
- [[3-Resources/Glossary/Application Message|Application Message]]

## Sources
- Database Tasks
- Scheduled Database Tasks
- Application Message Archive
- Application Message Statistics
