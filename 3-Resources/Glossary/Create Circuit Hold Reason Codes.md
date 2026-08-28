---
type: glossary
term: Create Circuit Hold Reason Codes
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Create Circuit Hold Reason Codes

## Summary

A Kanban Circuit in IFS Cloud can carry a status of Inactive, Active, On Hold, or Recalculated. Setting an Active circuit to On Hold temporarily suspends electronic replenishment without deleting its Kanban cards, and releasing the hold returns the circuit to Active (or to Recalculated if quantities changed while on hold). This basic data sets up the reason codes selectable when a circuit is placed on hold, so planners can record and later review why replenishment for a given circuit was paused.

> [!note] Confidence: low
> IFS Cloud documentation confirms the Kanban Circuit "On Hold" status and its behavior, but no source found describes a distinct "Circuit Hold Reason Codes" basic data page by name. This entry infers the reason-code purpose by analogy with other IFS reason-code basic data (e.g., cancellation/disposition reason codes) that typically accompany a status change like this one.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Kanban Calculation-Simulation Preferences|Define Kanban Calculation/Simulation Preferences]]
- [[3-Resources/Glossary/Enable Warehouse Transport Task for Site|Enable Warehouse Transport Task for Site]]

## Sources
- [Kanban Circuit — IFS Cloud Documentation](https://wssifshelp.wilhelmsen.com/ifsdoc/documentation/en/Manufacturing/AboutKanbanCircuit.htm)
