---
type: glossary
term: Enable Forecast Consumption
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Enable Forecast Consumption

## Summary

Forecast consumption is how IFS Cloud blends forecasted demand with actual demand into a single planning picture: as real customer orders and sales quotation lines come in, they decrement the remaining forecast for a Master Scheduled (MS) part rather than being added on top of it. Standard forecast consumption is calculated whenever an MS Level 1 run executes; enabling Online Consumption on an MS-handled Inventory Part with a forecast makes consumption also recalculate immediately when a customer order or quotation line is entered or changed, rather than waiting for the next MS run. Depending on the promise method used, consumption looks backward within a defined window (default 30 days back, 0 forward) or, for "Unconsumed Forecast" with Online Consumption on, consumes backward with no time limit.

> [!note] Confidence: moderate
> IFS Cloud documentation names this setting "Online Consumption" on the Inventory Part rather than "Enable Forecast Consumption." This entry treats the BDR wording as referring to that same option, since no separately named "Enable Forecast Consumption" field was found.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]

## Sources
- [Forecast and Forecast Consumption — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/AboutForecastandForecastConsumption.htm)
- [Master Scheduling Available to Promise — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/AboutMasterSchedulingAvailableToPromise.htm)
