---
type: glossary
term: Database Task Chain
source: web
created: 2026-08-29
tags: [glossary, ifs, technical]
---

# Database Task Chain

## Summary

A Database Task Chain strings multiple [[3-Resources/Glossary/Database Task|Database Tasks]] together to run in a specified sequence, executing in Step No order — potentially mixing tasks from several components, or even running the same task twice with different parameters. Each step's Break on Error setting decides whether a failure there stops the whole chain (Yes/Enabled) or lets it continue to the next step (No/Disabled). Like an individual Database Task, a chain is scheduled via a [[3-Resources/Glossary/Scheduled Task|Scheduled Task]] (specifically a Database Task Chain Schedule), and can be exported/imported as XML/Zip. Adding a new step to a chain that already has active schedules requires updating the parameters on each of those existing schedules too, since the schedule doesn't automatically pick up new steps' parameters.

## Related
- [[3-Resources/Guides/IFS Background & System Processing|IFS Background & System Processing (Guide)]]
- [[3-Resources/Glossary/Database Task|Database Task]]
- [[3-Resources/Glossary/Scheduled Task|Scheduled Task]]

## Sources
- Database Tasks
- Scheduled Database Tasks
