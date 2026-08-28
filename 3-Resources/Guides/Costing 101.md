---
type: guide
topic: Costing 101
source: web
created: 2026-08-28
tags: [guide, ifs, costing]
---

# Costing 101

An introduction to how IFS Cloud Costing is structured, for anyone new to the module before working through the [[3-Resources/BDR/Costing|Costing BDR]]. Costing has three layers that build on each other: **Costing Basic Data** (the site-wide framework every part's cost is built from), **Activity Based Costing** (an optional refinement for attributing overhead more accurately), and **Object Costing** (where the actual material, labour, and work centre costs are entered).

## Summary

Every inventory part's cost is assembled from **Cost Elements** (individual cost-generating items like a material cost or a labour cost) grouped into **Cost Buckets** (cost categories such as "material" or "labour runtime"), which are connected to a part through a **Cost Template**, all scoped to a **Cost Set** (a site-level calculation sheet, similar in spirit to a spreadsheet tab you can recalculate independently). This four-level hierarchy — Cost Set → Cost Template → Cost Bucket → Cost Element — is IFS Cloud's answer to "where does a part's unit cost actually come from," and setting it up correctly is the prerequisite for everything else in Costing: cost rollup, variance analysis, and Activity Based Costing all sit on top of it.

## Details

### The core hierarchy: Cost Set → Cost Template → Cost Bucket → Cost Element

- **[[3-Resources/Glossary/Define Cost Set|Cost Set]]** — defined per site, a cost set is a calculation sheet used for cost calculation, rollup, and comparison. Every site gets five default cost sets automatically (1 Inventory Value, 2 Estimated Material Cost, 3 Latest Purchase Price, 4 Average Purchase Price, 5 Planned Purchase Cost). Cost Set 1 holds the standard cost and can't be calculated directly — you calculate in another set and then copy the result into Cost Set 1.
- **[[3-Resources/Glossary/Define Cost Template|Cost Template]]** — connects cost buckets to the parts that will carry them. Each cost set points to a Manufacturing, Purchasing, Produced Part, or Core template, and each template's Cost Rollup Control flags (Manufacturing Costs / Externally Acquired Costs / Cost Distribution) decide which bucket types get pulled into a rollup. Seven templates ship pre-configured per site (e.g. M-110 manufacturing, P-110–P-140 purchasing, C-110–C-150 core).
- **[[3-Resources/Glossary/Define Cost Bucket|Cost Bucket]]** — groups the cost elements that make up part of a part's total cost; the cost calculation only ever looks at costs represented in buckets. Predefined buckets ship out of the box (110 Estimated Material Cost, 120 Latest Purchase Price, 200 Labor Runtime Cost, 300 Machine Cost, etc.).
- **[[3-Resources/Glossary/Define Cost Element|Cost Element]]** — the base building block: a material cost, work centre cost, labour cost, or overhead. User-defined overhead elements are based on one of five source elements (601 Sales, 501 Material, 502 General, 230 Labor, 141 Delivery), which fixes the element's **Overhead Type** — this is what tells the system when the cost hits the accounting system and how it transfers to WIP.

Once buckets and elements exist, [[3-Resources/Glossary/Assign Cost Element to Cost Bucket|elements are assigned to buckets]] and [[3-Resources/Glossary/Assign Cost Buckets to Cost Template|buckets are assigned to templates]] — from there, [[3-Resources/Glossary/Copy Cost Buckets from Cost Template|an existing template's bucket set can be copied]] onto a new template instead of rebuilding it by hand.

### Getting parts onto the right template: Part Cost Groups

Rather than assigning a cost template to every part individually, parts are grouped by [[3-Resources/Glossary/Define Part Cost Group|Part Cost Group]] (e.g. manufactured parts vs. purchased parts), and each group carries a default cost template. [[3-Resources/Glossary/Assign Part Cost Group to Part|Assigning a part to a group]] is what most parts rely on, but a group's default can be [[3-Resources/Glossary/Override Default Cost Template for Part Cost Group|overridden at the group level]] or [[3-Resources/Glossary/Override Default Cost Template for Cost Set|overridden per cost set]] (useful for running a "what-if" cost set alongside standard cost) — either override then needs to be committed via [[3-Resources/Glossary/Apply Changes to Part Cost Group|Apply Changes to Part Cost Group]] or [[3-Resources/Glossary/Apply Changes to Cost Set|Apply Changes to Cost Set]] before it takes effect. Before changing a widely-used bucket or element, [[3-Resources/Glossary/Where Used Analysis for Cost Buckets|Where Used Analysis]] (for buckets and for elements) shows what else depends on it.

Two more pieces of basic data round out this layer: a [[3-Resources/Glossary/Define Cost Estimator|Cost Estimator]] records who's organizationally responsible for a part's cost calculation (and can be [[3-Resources/Glossary/Assign Cost Estimator to one or many Parts|assigned to one or many parts]]), and site-wide [[3-Resources/Glossary/Set Cost Parameter|Cost Parameters]] (also reachable as [[3-Resources/Glossary/Define Cost Parameter|Define Cost Parameter]]) control things like inventory scrap factors, whether estimated material cost is copied from inventory by default, and the ROI rates used in Kaizen calculations.

### Activity Based Costing: attributing overhead more accurately

Where a blanket overhead rate isn't accurate enough, Activity Based Costing (ABC) traces overhead to parts through the activities that actually consume it:

- A **[[3-Resources/Glossary/Define Cost Centre|Cost Centre]]** is a source of cost — an expense pool like a department or an energy budget — set up per site and per cost set, with a total budgeted amount entered as its **[[3-Resources/Glossary/Define Cost Centre Costs|Cost Centre Cost]]** for a given period.
- A **[[3-Resources/Glossary/Define Activity|Activity]]** is one of the handful of significant operations a company performs (labour setup, machine runtime, material handling); defining one auto-creates a matching cost bucket. Activities are **[[3-Resources/Glossary/Assign Activity to Cost Centre|assigned to cost centres]]** with a cost factor (their % share of that centre's total cost) and an estimated driver quantity.
- An **[[3-Resources/Glossary/Define Activity Cost Driver|Activity Cost Driver]]** is ABC's version of a cost element — a transaction driver (counts occurrences, e.g. number of setups) or a duration driver (measures time, e.g. setup hours) — whose rate is the cost centre's cost divided by the driver's estimated usage. **[[3-Resources/Glossary/Further Detail Activity Cost Driver|Further detail]]** on a driver (overhead type, driver source, factor percentage) tells the system where its usage data comes from.

The activity's resulting cost bucket is then [[3-Resources/Glossary/Assign Cost Buckets to Cost Template|assigned to a cost template]] and [[3-Resources/Glossary/Assign Cost Template to Part|that template assigned to parts]] just like any other bucket — ABC plugs into the same hierarchy described above rather than replacing it.

### Object Costing: where the actual cost numbers come from

This is the level where real cost figures get entered against a part, per cost set:

- **[[3-Resources/Glossary/Define Material Cost on Inv. Part|Material cost]]** is entered directly on the part's cost record (Cost Element 110).
- For purchased parts, **[[3-Resources/Glossary/Calculate Latest Purchase Price|Calculate Latest Purchase Price]]** derives a purchase cost from purchase history instead of manual entry, optionally restricted to a part's primary supplier.
- **[[3-Resources/Glossary/Define Work Centre Cost|Work Centre Cost]]** is set on the work centre's own Costs tab (fixed rate + overhead, per cost set and period) for internal operations, while **[[3-Resources/Glossary/Define External Work Centre Cost|External Work Centre Cost]]** covers subcontracted operations, which are priced from Purchasing instead since there's no internal work centre to carry a rate.
- **[[3-Resources/Glossary/Define Labour Cost|Labour Cost]]** is defined per labour class, cost set, and period, factoring in crew size from the routing operation.

These object-level figures are what a cost rollup ultimately consumes to calculate a part's standard or actual unit cost.

### Adjacent costing tools

Two smaller pieces of basic data extend costing into specific methodologies, worth knowing about but out of scope for a first pass through the BDR:

- **[[3-Resources/Glossary/Define Kaizen Cost Reduction Type|Kaizen Cost Reduction Type]]** supports Kaizen Costing's continuous-improvement approach — classifying cost-reduction initiatives so target cost vs. actual cost can be tracked and tied back to specific cost centres.
- **[[3-Resources/Glossary/Define CVA Importance|CVA Importance]]** and **[[3-Resources/Glossary/Define Customer Requirements-Product Features|Customer Requirements/Product Features]]** support a Quality Function Deployment (QFD)-style value analysis, weighing which product features contribute most to customer-perceived value relative to their cost.

## Related
- [[2-Areas/Costing|Costing]]
- [[3-Resources/BDR/Costing|Costing (BDR)]]

## Sources
- [Costing Basic Data — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/AboutCostingBasicData.htm)
- [Define Cost Set — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/ActivityDefineCostSet.htm)
- [Define Cost Bucket — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/Costing/ActivityDefineCostBucket.htm)
- [Define Cost Element — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/Costing/ActivityDefineCostElement.htm)
- [Cost Details Basic Data — IFS Documentation](https://wssifshelp.wilhelmsen.com/ifsdoc/documentation/en/DefineDistributionBasics/AboutCostDetails.htm)
- [Activity Based Costing — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/Costing/AboutActivityBasedCosting.htm)
- [Costing Set Up — IFS Community](https://community.ifs.com/finance-financials-42/costing-set-up-56820)
- [Part Cost Group and Override Template/Cost Set — IFS Community](https://community.ifs.com/getting-started-with-ifs-132/part-cost-group-and-override-template-cost-set-48073)
- [Kaizen Costing — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/Costing/AboutKaizenCosting.htm)
- Full source list per data point: see each linked glossary entry's own Sources section.
