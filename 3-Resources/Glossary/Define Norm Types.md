---
type: glossary
term: Define Norm Types
source: web
created: 2026-08-27
tags: [glossary, ifs, quality]
---

# Define Norm Types

## Summary

A Norm Type is basic data used when setting up a **Variable**-type data point on a Control Plan. It classifies how the target/normal value and its tolerance are handled for a measurement — for example whether the point has a two-sided tolerance (upper and lower limit around a nominal value), a one-sided limit (max-only or min-only), or no defined limit at all. This drives how the system evaluates a recorded measurement (Pass/Fail, in/out of tolerance) during inspection or analysis.

> [!note] Confidence: moderate
> This wasn't stated explicitly on any public IFS documentation or Community page found during research — it's inferred from standard SPC/quality-management usage of "norm" (target value ± tolerance) and from how Norm Type is used alongside Control Plan variable data points. Verify the exact list of values and behavior against your own IFS Cloud instance (Quality Management > Basic Data > Norm Type) before relying on this for configuration decisions.

## Related
- [[3-Resources/BDR/Quality Management|Quality Management (BDR)]]

## Sources
- [Control Plan — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/QualityManagement/AboutControlPlan.htm)
