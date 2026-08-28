---
type: glossary
term: Set Cost Parameter
source: web
created: 2026-08-28
tags: [glossary, ifs, costing]
---

# Set Cost Parameter

## Summary

Cost Parameters are per-site, system-provided settings maintained on the Cost Parameters tab of the Costing Basic Data window in IFS Cloud, and "setting" them means selecting a parameter line and changing its value. Examples include the Inventory Scrap Factor for purchased and manufactured parts (fed into Cost Rollup), whether to Copy Estimated Material Cost from inventory by default, the ROI period and ROI period limit and reinvestment/financial rates used in Kaizen ROI calculations, and whether shop order variance bookings use the start date or actual close date. These values directly control how cost rollup, ABC analysis, and ROI calculations behave for the site, so getting them right up front avoids miscalculated part costs later.

> [!note] Confidence: moderate
> The distinction between "Set Cost Parameter" and "Define Cost Parameter" as separate BDR steps is not explicit in the source documentation — both appear to map to the same Cost Parameters tab of Costing Basic Data, one likely covering initial parameter setup and the other covering changing values per site.

## Related
- [[3-Resources/BDR/Costing|Costing (BDR)]]
- [[3-Resources/Glossary/Define Cost Parameter|Define Cost Parameter]]
- [[3-Resources/Glossary/Define Cost Set|Define Cost Set]]

## Sources
- [Define Cost Parameters — IFS Cloud Documentation](https://wssifshelp.wilhelmsen.com/ifsdoc/documentation/en/Costing/ActivityDefineCostParameters.htm)
