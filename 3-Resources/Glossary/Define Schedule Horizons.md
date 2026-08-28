---
type: glossary
term: Define Schedule Horizons
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Schedule Horizons

## Summary

A Schedule Horizon is basic data that groups parts with identical production-schedule timing requirements and drives how IFS Cloud generates and maintains rate-based production schedules in repetitive manufacturing. Each horizon record sets three values: the Schedule Horizon (days of planning data from master scheduling/MRP included on the production schedule), the Firm Horizon (days within which schedule quantities are treated as firm supply and excluded from replanning — zero means no firm horizon), and the Past Due Horizon (how many days overdue a schedule can become before it is automatically deleted). An additional Roll/No Roll setting controls whether orders falling within the firm horizon are moved forward (defaulting to No Roll). Parts are then linked to a schedule horizon on a production line to control their scheduling behavior.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Supply Type and MRP Order Code on Inv Part|Define Supply Type and MRP Order Code on Inv Part]]
- [[3-Resources/Glossary/Define Repetitive Backflush Behaviour|Define Repetitive Backflush Behaviour]]

## Sources
- [Define Schedule Horizons — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/Planning/ActivityDefineSchedHorizon.htm)
