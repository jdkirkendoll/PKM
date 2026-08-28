---
type: glossary
term: Define Kanban Calculation/Simulation Preferences
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Kanban Calculation/Simulation Preferences

## Summary

This basic data controls how IFS Cloud sizes Kanban circuits when Perform Kanban Calculations or Perform Kanban Simulation is run. Preferences include the Calculation Type (solve for No of Kanbans with a fixed container size, or Qty per Kanban with a fixed number of kanbans — the two-bin approach), the Formula Type (Basic, which triggers replenishment on the last unit taken; or Constant Cycle, for lot sizes larger than demand during the replenishment lead time), and how safety stock is expressed (units, days, or percentage). For simulations specifically, the Initial Kanban Quantities option determines whether the system recalculates before simulating or reuses the current circuit's Qty per Kanban/No of Kanbans, along with iteration limits and percent-increase values used when a stockout is detected.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Create Circuit Hold Reason Codes|Create Circuit Hold Reason Codes]]
- [[3-Resources/Glossary/Enable Warehouse Transport Task for Site|Enable Warehouse Transport Task for Site]]

## Sources
- [Kanban Calculation Rules — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/Manufacturing/AboutKanbanCalcRules.htm)
- [Perform Kanban Simulation — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/22r1/Manufacturing/ActivityKanbanPerfSim.htm)
