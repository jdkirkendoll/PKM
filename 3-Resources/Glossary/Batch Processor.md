---
type: glossary
term: Batch Processor
source: web
created: 2026-08-29
tags: [glossary, ifs, technical]
---

# Batch Processor

## Summary

The Batch Processor is the third of IFS Cloud's three background-processing mechanisms (alongside [[3-Resources/Glossary/Background Job|Background Jobs]] and [[3-Resources/Glossary/Database Task|Database Tasks]]), and it's architecturally distinct: it's part of the IFS Connect framework and exists specifically to process [[3-Resources/Glossary/Application Message|Application Messages]], handling both synchronous calls and background message processing. Rather than being driven by Oracle's `dbms_scheduler`, it's built on the Oracle Database Alert concept (`DBMS_ALERT`) fired from a database trigger, combined with JMS messaging and a dedicated Message Driven Bean (the Forwarder MDB) deployed as part of the `ifsapp-int.ear` JEE application, with J2EE Timers also used to read messages efficiently.

When an Application Message's state changes to 'Released' (or a configuration table changes), a trigger posts a JMS message onto `BATCH_PROC_QUEUE_TAB`; the Forwarder MDB routes it onward to one of several JMS queues/topics — `DefaultQueue` (async, In-Parallel), `InvokeQueue` (sync, from the PLSQL Access Provider), `InOrderQueue` (strict ApplicationMessageId order, stops the whole queue on failure), `InSequenceQueue` (up to `THREAD_COUNT` messages concurrently, no ordering guarantee), and `AdminQueue`/`AdminTopic` (configuration-change signaling). Actual message processing happens in the Message Processor, called through the `FndConnectHandler` EJB in its own transaction. A message left in state 'Waiting' after processing in an In-Sequence queue gets a one-time Scheduled Task created to retry it, governed by the `MAX_RETRIES`/`RETRY_INTERVAL` parameters on the relevant Connect Sender.

## Related
- [[3-Resources/Guides/IFS Background & System Processing|IFS Background & System Processing (Guide)]]
- [[3-Resources/Glossary/Application Message|Application Message]]
- [[3-Resources/Glossary/Background Job|Background Job]]
- [[3-Resources/Glossary/Database Task|Database Task]]

## Sources
- Overview
