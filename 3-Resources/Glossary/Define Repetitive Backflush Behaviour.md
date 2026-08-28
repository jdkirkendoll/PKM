---
type: glossary
term: Define Repetitive Backflush Behaviour
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Repetitive Backflush Behaviour

## Summary

Repetitive Backflush Behaviour is basic data set on a part's product structure that controls how deeply component consumption cascades when a production schedule receipt triggers backflushing. The "Phantom Consume" option backflushes the entire product structure through all levels (exploding down to the next level when a component itself has no stock, similar to planning method P/phantom parts), while "Not Phantom Consume" limits the backflush to a single structure level. Phantom Consume only applies when the component itself has its own product structure, and this setting is required whenever a product structure is defined for use with Production Schedules — it directly affects how material consumption and WIP costing are recorded during repetitive/flow manufacturing receipts.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define Schedule Horizons|Define Schedule Horizons]]
- [[3-Resources/Glossary/Set Up Alternate Component Substitution Sequence|Set Up Alternate Component Substitution Sequence]]

## Sources
- [Define Repetitive Backflush Behavior — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/Planning/ActivityDefineRepBackflushBeh.htm)
