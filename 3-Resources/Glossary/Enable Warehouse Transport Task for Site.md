---
type: glossary
term: Enable Warehouse Transport Task for Site
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Enable Warehouse Transport Task for Site

## Summary

IFS Cloud's Warehouse Task Type Setup activates specific warehouse task types — Customer Order Pick List, Transport Task, Shop Order Pick List, Shipment Order Pick List, Project Deliverables Pick List, and Purchase Receipt Return Pick List — per site; the status of this setup is described as "the actual main switch for a certain task type at a specific site." Enabling the Transport Task type for a site lets inventory moves, including replenishment transport tasks generated automatically by Kanban (e.g., via Kanban Reorder Point Request), be managed as full Warehouse Tasks — assignable to workers and tracked through Planned, Released, Started, Parked, and Closed statuses — instead of as simple, unmanaged transport tasks.

> [!note] Confidence: moderate
> No IFS documentation page uses the exact name "Enable Warehouse Transport Task for Site." This entry is built from the general Warehouse Task Type Setup / Transport Task documentation plus community references confirming Kanban creates transport tasks, rather than a single source describing this exact BDR item.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Kanban Calculation-Simulation Preferences|Define Kanban Calculation/Simulation Preferences]]
- [[3-Resources/Glossary/Create Circuit Hold Reason Codes|Create Circuit Hold Reason Codes]]

## Sources
- [Warehouse Task — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MaintainInventory/AboutWarehouseTaskInfo.htm)
- [Create Transport Task — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MaintainInventory/ActivityInventTransportTaskCreate.htm)
