---
type: glossary
term: Application Message
source: web
created: 2026-08-29
tags: [glossary, ifs, integration, technical]
---

# Application Message

## Summary

An Application Message is the record IFS Connect's Batch Processor uses to track a unit of asynchronous work end to end. A PL/SQL Access Provider method called from business logic inserts the record into `FNDCN_APPLICATION_MESSAGE_TAB` in state `Released`; a database trigger then flips it to `Processing` and fires a JMS message, which is queued in `BATCH_PROC_QUEUE_TAB` for the Batch Processor to execute. If the PL/SQL call or trigger fails, the whole initiating transaction rolls back and no JMS message is sent; if a runtime exception occurs during processing, the message is marked for redelivery and, after repeated failures, suspended; and if the Batch Processor's own code fails, the message is set to `Failed` with an error message saved on it. These states are visible on the Solution Manager **Application Messages** and **Batch Processor Queue** pages, where an Integration Administrator can browse messages by queue, inspect the routing rule and message bodies used, and change state (Reroute, Restart, Restart Message and Queue, Duplicate and Release, Resume/Suspend, Cancel).

Two adjacent surfaces round out message management without introducing new processing concepts: the **Application Message Archive** is a separate store for processed/older messages (same shape as a live Application Message, minus the Error Text field), populated by the shipped `Archive Application Messages` Database Task; **Application Message Statistics** logs historical counts of messages per queue and state over time via the `Forward Application Message Statistics` Database Task, retained per the `KEEP_MSG_STAT` system parameter and cleaned up by Heavy Cleanup.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Guides/IFS Background & System Processing|IFS Background & System Processing (Guide)]]
- [[3-Resources/Glossary/IFS Connect|IFS Connect]]
- [[3-Resources/Glossary/Routing Rule|Routing Rule]]
- [[3-Resources/Glossary/Batch Processor|Batch Processor]]
- [[3-Resources/Glossary/Database Task|Database Task]]

## Sources
- IFS Connect Troubleshooting
- Application Messages
- Application Message Archive
- Application Message Statistics
