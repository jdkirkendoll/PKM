---
type: guide
topic: IFS Background & System Processing
source: web
created: 2026-08-29
tags: [guide, ifs, technical]
---

# IFS Background & System Processing

## Summary

Most IFS Cloud business methods run synchronously in direct response to a user action, but the platform also has to run large or long-running work outside the user's session. IFS distinguishes three mechanisms for this: **[[3-Resources/Glossary/Background Job|Background Jobs]]** (a server method submitted once for near-immediate, one-off execution, so the user isn't stuck waiting), **[[3-Resources/Glossary/Database Task|Database Tasks]]** (a scheduled stored-procedure call, usually recurring, run as the user who scheduled it), and the **[[3-Resources/Glossary/Batch Processor|Batch Processor]]** (the JMS/message-driven engine that processes **[[3-Resources/Glossary/Application Message|Application Messages]]** — the unit of asynchronous integration traffic in IFS Connect). A fourth concept, **[[3-Resources/Glossary/Workflow|Workflows]]**, sits at a higher level again: it orchestrates a sequence of projection-based activities into one business flow, rather than executing a single background call. All three background-processing mechanisms ultimately rely on Oracle's `dbms_scheduler` to actually get CPU time on the database tier.

## Details

### Background Jobs: the base mechanism

A [[3-Resources/Glossary/Background Job|Background Job]] is IFS Cloud's term for "run this server method without the client waiting for it." `Transaction_SYS` submits jobs into [[3-Resources/Glossary/Batch Queue|Batch Queues]] through `Deferred_Call`, and each queue is itself an Oracle `dbms_scheduler` job (`Transaction_SYS.Process_All_Pending`) that works through everything queued for it. `Batch_SYS` provides the lower-level API (`New_Job`) for submitting IFS Cloud's own driving processes straight into `dbms_scheduler` — this is the mechanism the platform itself uses, distinct from the ordinary background job path end users trigger.

A job progresses through a small state machine: **Posted** (queued, still editable) → **Executing** (or **Externally Executing**, for a Business Report rendered by the BR Execution Server) → **Ready** / **Warning** / **Error**. An **Error** job can have its queue/parameters changed and be re-executed; **Ready** and **Warning** jobs are considered finished and are eventually removed by the Light Cleanup process (the retention window per state is configurable via system parameters). A **Postponed** state exists specifically for online delivery installations — jobs that allow delayed processing transition to Postponed during the Soft/Hard Degraded Periods and automatically resume once the installation finishes; jobs still Executing when the Cutover Period begins are stopped and either auto-restart (if flagged Restartable) or need a manual restart. Users only see the jobs they submitted unless granted the ADMINISTRATOR system privilege, and can only schedule methods they've been granted access to.

Long-running jobs can report **Progress Information** (current item, Total Work, So Far) so users can gauge how far along a job is. Note that the Background Jobs overview screen only shows jobs created via `Transaction_SYS` (deferred calls) or scheduled tasks — it does not surface raw `dbms_scheduler` jobs like IFS/Info Services.

### Scheduling background work: Scheduled Tasks and Database Tasks

A [[3-Resources/Glossary/Scheduled Task|Scheduled Task]] is what turns a one-off Background Job into something that runs on a recurring agenda (daily, weekly, monthly, on a specific date, on an interval, or on a custom Oracle Scheduler expression). Under the hood a "Scheduled Tasks" background process polls for due schedules and, when one is due, submits the underlying work as an ordinary background job — so a schedule firing is, from the job log's perspective, indistinguishable from any other background job. Register_Batch_Schedule_Method, Register_Batch_Schedule_Chain, and New_Batch_Schedule (all on `Batch_SYS`) are the underlying APIs. Schedules fall into three groups: plain **Scheduled Tasks** (no output), **Scheduled Chains** (multiple jobs in sequence, with the option to stop the chain on a failed step), and **Scheduled Reports** (operational reports that produce report output).

Where a Scheduled Task schedules an arbitrary server method, a [[3-Resources/Glossary/Database Task|Database Task]] is specifically a scheduled call into a PL/SQL stored procedure (only procedures in `_API` packages are eligible) — configured with a name, owning component, argument type (No Parameter / Attribute String / IFS Message / Normal Parameter), an optional parameter-validation method, and flags like Single Schedule (prevent overlapping schedules), Check Executing (skip a run if a prior instance is still going, recalculating the next execution time instead) and Check Same Day Execution. Multiple Database Tasks can be strung together into a **[[3-Resources/Glossary/Database Task Chain|Database Task Chain]]**, which runs its steps in Step No order and, per step, can be configured to stop the whole chain (Break on Error = Yes) or continue past a failure. Both Database Tasks and Database Task Chains — along with scheduled Reports — are scheduled the same way via the Scheduled Tasks area (breadcrumb: Solution Manager > Background Processing > Scheduled Tasks), using the same Daily/Weekly/Monthly/Date/Interval/Custom execution-plan options described above. Three system parameters govern the underlying polling process: how often it checks for due schedules (startup interval, seconds), whether it's running at all (startup on/off), and how long an inactive schedule is retained before Heavy Cleanup removes it. Database Tasks and Task Chains can be exported to XML (or a Zip, for multiple) for moving between IFS Cloud installations, and importing a task/chain always replaces any existing one with the same identity.

A concrete example of a shipped Database Task is **Archive Application Messages** (see Application Message Archive below), which demonstrates the full pattern: a task with parameters (`QUEUE_`, `STATE_`, `HOURS_OLD_`, `COMMIT_COUNT_`) that gets a schedule attached via "Create New Schedule" from its own detail page.

### The Batch Processor and Application Messages

The [[3-Resources/Glossary/Batch Processor|Batch Processor]] is the third and architecturally different background-processing mechanism: it's part of the IFS Connect framework and exists specifically to process **[[3-Resources/Glossary/Application Message|Application Messages]]** — the record IFS Connect creates for every inbound or outbound integration call. Rather than `dbms_scheduler` polling, it's driven by Oracle Database Alert (`DBMS_ALERT`) fired from a database trigger, JMS messaging, and a Message Driven Bean (the Forwarder MDB) deployed as part of the `ifsapp-int.ear` JEE application, with J2EE Timers also reading messages efficiently.

The flow: when an Application Message's state becomes 'Released' (or a config table changes), a trigger posts a JMS message onto `BATCH_PROC_QUEUE_TAB`. The Forwarder MDB picks this up and routes it to one of several JMS queues/topics depending on the message's queue type — `DefaultQueue` (asynchronous, In-Parallel messages), `InvokeQueue` (synchronous invocations from the PLSQL Access Provider), `InOrderQueue` (processes an In-Order queue's messages strictly in ApplicationMessageId order, stopping the whole queue on a failure), `InSequenceQueue` (processes up to `THREAD_COUNT` messages concurrently with no ordering guarantee), and `AdminQueue`/`AdminTopic` (configuration-change signaling, including clearing the config cache and resyncing Connect Readers). A single message's actual processing happens in the Message Processor, invoked through the `FndConnectHandler` EJB in its own transaction. If an In-Sequence message finishes in state 'Waiting', the Message Processor creates a one-time Scheduled Task to retry it later, governed by the `MAX_RETRIES` and `RETRY_INTERVAL` parameters on the Connect Sender.

Beyond the Batch Processor's internal plumbing, Application Messages have their own management surface: the Application Messages window/lobby (Solution Manager > Integration > IFS Connect > Application Messages) lets an Integration Administrator browse messages by queue, inspect the routing rule used, the input/output message bodies, and the address list (one entry per destination, grouped by chain link). Messages can be moved between queues, exported/imported as XML, and have their state changed — **Reroute** (Failed → re-routes and releases; fails for messages that never went through a Routing Rule, including most event-action-generated messages), **Restart** (all address lines, or just the failed ones, back to Released), **Restart Message and Queue** (also restarts a stopped queue), **Duplicate and Release** (clone a Finished message), **Resume**/**Suspend** (Suspended ↔ Released), and **Cancel**.

Two adjacent, smaller pieces round out message management rather than introducing new mechanisms: the **Application Message Archive** is a separate store for processed/older messages (identical in shape to a live Application Message except it has no Error Text field), populated by the shipped `Archive Application Messages` Database Task (parameters: which queue, which state, how old in hours, and a commit-count batch size) — a good worked example of wiring a Database Task to a schedule. **Application Message Statistics** logs historical counts of messages per queue and state over time (via the `Forward Application Message Statistics` Database Task), retained per the `KEEP_MSG_STAT` system parameter and cleaned up by Heavy Cleanup; it doesn't introduce a new processing concept, just a reporting log on top of the queues already described above.

### Workflows: orchestration above the background layer

A [[3-Resources/Glossary/Workflow|Workflow]] is a different kind of thing from the three background-processing mechanisms above — it's a sequence of activities, built from IFS projections at the task level, that orchestrates or automates a business flow rather than executing one background call. Access to a Workflow is controlled by three grant types: **External Grant** (direct access via the Workflow's REST endpoint, which does not by itself grant access to the business function the Workflow performs), **Internal Grant** (authorizes the business function/activities the Workflow performs for any user holding the permission set, even without direct projection access — though it's not considered if the user is already granted all the Workflow's activities directly), and **Full Grant** (both combined).

## Related
- [[2-Areas/Technical|Technical]]

## Sources
- IFS Cloud Technical Documentation (docs.ifs.com), saved as PDF
- Overview
- Background Processing
- Background Jobs
- Database Tasks
- Scheduled Database Tasks
- Application Messages
- Application Message Archive
- Application Message Statistics
- Workflows
