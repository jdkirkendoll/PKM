---
type: glossary
term: Batch Queue
source: web
created: 2026-08-29
tags: [glossary, ifs, technical]
---

# Batch Queue

## Summary

A Batch Queue spreads [[3-Resources/Glossary/Background Job|Background Job]] load across different Oracle `dbms_scheduler` processes rather than running everything through one. Initiating a queue submits a scheduler job, `Transaction_SYS.Process_All_Pending`, which executes every background job matching that queue's criteria. Defining a queue means setting up an execution plan: number of processes (how many scheduler processes the queue can start), language (so language-dependent jobs run in the right queue), and optionally specific server methods to route into it — a method not registered to any queue gets registered to whichever queue first executes it. Limiting a queue to a single process is how you force jobs in that queue to run strictly sequentially. The Oracle initialization parameter `JOB_QUEUE_PROCESSES` must be sized to cover the total number of processes across all active queues, or multithreaded queues won't get full use of their configured capacity.

## Related
- [[3-Resources/Guides/IFS Background & System Processing|IFS Background & System Processing (Guide)]]
- [[3-Resources/Glossary/Background Job|Background Job]]

## Sources
- Overview
