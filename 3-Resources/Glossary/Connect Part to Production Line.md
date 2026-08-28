---
type: glossary
term: Connect Part to Production Line
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Connect Part to Production Line

## Summary

Connecting a part to a Production Line designates that part as being built on that line rather than through a standard shop order routing, using the "Production Line by Part" relationship in IFS Cloud Manufacturing. Once connected, MRP behaves differently for that part: it stops breaking demand down to the part's components and delegates component-demand calculation to the production line itself, which generates its own shop orders (or shop order requisitions) for components based on material lines and non-reserved balances. A production routing must exist for the part so the line's schedule and any report points can be tied to real operation steps, and a schedule horizon is set per part to control how far ahead the production schedule is generated and managed.

> [!note] Confidence: moderate
> IFS documentation confirms parts are connected to production lines via a "Production Line by Part" page and describes the downstream MRP/scheduling effects, but the exact fields and steps on the connection screen itself were not found in a dedicated activity page.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Enter Basic Data for Production Line|Enter Basic Data for Production Line]]
- [[3-Resources/Glossary/Define Schedule Report Points|Define Schedule Report Points]]

## Sources
- [Production Line — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MfgStandard/AboutProductionLine.htm)
