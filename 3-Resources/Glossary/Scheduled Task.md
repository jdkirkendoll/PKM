---
type: glossary
term: Scheduled Task
source: web
created: 2026-08-29
tags: [glossary, ifs, technical]
---

# Scheduled Task

## Summary

A Scheduled Task turns a one-off [[3-Resources/Glossary/Background Job|Background Job]] into recurring work by attaching it to a predefined execution plan — Daily, Weekly, Monthly, Date, Interval, or a Custom Oracle Scheduler expression (e.g. `FREQ=WEEKLY; INTERVAL=2; BYDAY=FRI;`). A "Scheduled Tasks" background process regularly checks whether any schedule is due; when one fires, it submits the underlying work as an ordinary background job, so a fired schedule ends up indistinguishable from any other job in the background job log. `Batch_SYS` provides the underlying registration APIs (`Register_Batch_Schedule_Method`, `Register_Batch_Schedule_Chain`, `New_Batch_Schedule`). Schedules fall into three groups: plain **Scheduled Tasks** (no printed output), **Scheduled Chains** (multiple background jobs run in sequence, with the option to stop the chain if a step fails), and **Scheduled Reports** (produce report output). The concept applies equally to a single [[3-Resources/Glossary/Database Task|Database Task]], a [[3-Resources/Glossary/Database Task Chain|Database Task Chain]], or a report — all are scheduled through the same Scheduled Tasks area (Solution Manager > Background Processing > Scheduled Tasks) with the same execution-plan options. A schedule remains active until its stop date passes (or forever, if it has none) unless manually deactivated; editing an existing schedule is restricted to its creator or an administrator. Three system parameters govern the underlying polling process: how often it checks for due schedules (in seconds), whether it's running at all, and how many days an inactive schedule is kept before Heavy Cleanup removes it.

## Related
- [[3-Resources/Guides/IFS Background & System Processing|IFS Background & System Processing (Guide)]]
- [[3-Resources/Glossary/Background Job|Background Job]]
- [[3-Resources/Glossary/Database Task|Database Task]]
- [[3-Resources/Glossary/Database Task Chain|Database Task Chain]]

## Sources
- Overview
- Background Jobs
- Database Tasks
- Scheduled Database Tasks
