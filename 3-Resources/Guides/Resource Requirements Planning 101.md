---
type: guide
topic: Resource Requirements Planning 101
source: web
created: 2026-08-28
tags: [guide, ifs, rrp]
---

# Resource Requirements Planning 101

An introduction to IFS Cloud Resource Requirements Planning (RRP), for anyone new to the module before working through the [[3-Resources/BDR/Resource Requirements Planning (RRP)|RRP BDR]]. RRP is IFS Cloud's **rough-cut capacity planning** tool: before committing to a Master Schedule or MRP plan, RRP checks whether the plan is actually achievable by comparing the capacity a constraining resource has against the capacity that plan would demand.

## Summary

RRP works by defining **work centers/resources** that represent whatever might constrain the plan — not just machines, but storage space, personnel, or supplier capacity — giving each a capacity. **Resource routings** then describe how much of each resource a part's plan consumes, fixed and variable. When RRP runs, it explodes the planned demand through those routings and compares required capacity against available capacity for each resource, flagging where the plan isn't feasible before shop orders are ever released. A **period template** groups the results into readable time buckets (e.g. weekly near-term, monthly further out) for review.

## Details

### Work centers: reuse or RRP-unique

RRP can check capacity against a company's real manufacturing work centers, but it also supports **[[3-Resources/Glossary/Define RRP Unique Work Centres|RRP-unique work centers]]** that exist only for planning purposes and never appear on an actual shop order routing. The key difference from a standard work center is unit of measure: an RRP-unique work center can be defined in whatever unit fits the constraint being modeled — pieces, square meters, liters, kilos — which is what lets RRP represent non-machine limits like warehouse space or headcount alongside genuine machine-time constraints.

### Resources: what capacity is being checked

A **[[3-Resources/Glossary/Define RRP Resources|resource]]** is what actually carries a capacity figure and gets checked against the plan. Each resource is tied to a work center and given a **load source** — the setting that decides what counts as demand against it during calculation: unconsumed forecast/demand, supplies coming from Master Scheduling or Sales & Operations Planning, or a projected-on-hand-vs-maximum check. Capacity is auto-populated from the work center/load source combination but can be adjusted per resource, and different planning scenarios can be layered on with their own capacity/load assumptions once registered.

### Resource routings: connecting parts to resource demand

A **[[3-Resources/Glossary/Define RRP Resource Routings|resource routing]]** is what turns a part's plan into actual resource demand. For each operation, it names the work center/resource consumed and the consumption amount, split into:
- **Fixed consumption** — setup-related, independent of quantity (e.g. a fixed setup time or space reservation regardless of how many units run).
- **Variable consumption** — scales with quantity produced (e.g. minutes per unit).

Routings can also be **time-phased**, offsetting when a resource's requirement lands — useful when the "resource" is really a supplier and the routing needs to honor that supplier's lead time in the capacity check rather than assuming instantaneous supply.

### Period templates: making the output readable

RRP's output (like Master Scheduling's and MRP's) is grouped into time buckets by a **[[3-Resources/Glossary/Create Period Template|period template]]**, which can mix granularities across its horizon — weeks near-term, months or quarters further out — so near-term capacity issues are visible in detail while the long-range view stays compact. A template doesn't have to be built from scratch each time; an existing one can be **[[3-Resources/Glossary/Copy Period Template|copied]]** as the starting point for a new one that shares most of the same structure. Period templates aren't RRP-specific — the same ones are shared with Master Schedule Level 1 and MRP — so one well-designed template setup serves all three.

### How it fits together

Setting up RRP, in order: define the work centers/resources that represent your real constraints (reusing manufacturing work centers where they apply, adding RRP-unique ones for non-machine constraints) → give each a capacity and load source → build resource routings that connect parts to how much of each resource they consume → set up a period template so the capacity-vs-demand comparison groups sensibly over time. With that in place, RRP gives an early feasibility check on a plan well before it turns into shop orders.

## Related
- [[2-Areas/Resource Requirements Planning (RRP)|Resource Requirements Planning (RRP)]]
- [[3-Resources/BDR/Resource Requirements Planning (RRP)|Resource Requirements Planning (RRP) (BDR)]]

## Sources
- [Resource Requirements Planning — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/AboutRRP.htm)
- [Rough Cut Capacity Plan — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/AboutRoughCutCapacityPlan.htm)
- [Define RRP Capacity — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MasterScheduling/ActivityDefineRRPResources.htm)
- [Work Center — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MfgStandard/AboutWorkCenter.htm)
- [Planned Periods Units in Manufacturing Standard — IFS Community](https://community.ifs.com/products-manufacturing-products-engineering-40/planned-periods-units-in-manufacturing-standard-1826)
- Full source list per data point: see each linked glossary entry's own Sources section.
