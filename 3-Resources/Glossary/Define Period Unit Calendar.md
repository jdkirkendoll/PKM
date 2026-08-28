---
type: glossary
term: Define Period Unit Calendar
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Period Unit Calendar

## Summary

IFS Cloud calendars establish which days are available for working, delivery, or planning purposes, built from three underlying rule types: Day Types (how a given day operates, including working hours), Schedules (a repeating series of Day Types, e.g. a 7-day pattern), and Schedule Exceptions (overrides that connect specific Day Types to specific dates). A calendar is defined by connecting Schedules and Schedule Exceptions, and can then be assigned to sites, work centers, projects, and other objects. A Period Unit Calendar applies this same calendar machinery to define the working-day basis for Planning Period Units — the day/week/month/quarter time buckets that Period Templates use — so that period-based planning in Master Scheduling, MRP, and RRP is calculated against real working days rather than raw calendar days.

> [!note] Confidence: moderate
> IFS documentation confirms the general Calendar/Day Type/Schedule/Schedule Exception mechanism and confirms Planning Period Units are used by Master Scheduling, MRP, and Customer Schedules, but no page specifically titled "Define Period Unit Calendar" tying the two together was found; the connection between calendars and period units here is inferred from adjacent documentation.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Create Period Template|Create Period Template]]
- [[3-Resources/Glossary/Copy Period Template|Copy Period Template]]

## Sources
- [Create Calendar — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/DefineSystemBasics/ProcessCreateCalendar.htm)
- [Planned Periods Units in Manufacturing Standard — IFS Community](https://community.ifs.com/products-manufacturing-products-engineering-40/planned-periods-units-in-manufacturing-standard-1826)
