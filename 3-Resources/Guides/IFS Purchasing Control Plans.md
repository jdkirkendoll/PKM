---
type: guide
topic: IFS Cloud Purchasing Control Plans
source: web
created: 2026-08-26
tags: [guide, ifs, quality, purchasing]
---

# IFS Purchasing Control Plans

## Summary

A Control Plan in IFS Cloud Quality Management defines what to inspect on a part — manufactured, purchased, or inventory — and how. For purchased parts, the Purchasing Control Plan drives incoming inspection at PO receipt: it decides what gets checked, how big the sample is, and (via Acceptance Sampling) whether a whole lot is accepted or rejected based on the sample's results. It connects to a PO receipt automatically, but it is **read-only at the PO level** — you can't add one-off data points the way you can on a shop order control plan.

## Details

### What a Control Plan is

A control plan is a description of the system for controlling parts and processes to minimize variation, used to aid manufacturing quality products to customer requirements. Control plans are maintained per part and apply across Manufacturing, Purchasing, and Inventory stages.

**Structure:**
- **Control plan lines (data points)** — individual inspection/test requirements, each typed as Attribute, Variable, or Categorical.
- **Revisions** — multiple revisions can exist with phase-in/phase-out dates; only one is "Active" at a time.
- **Status** — Active or Inactive.

### Setup for purchasing

For a purchased part, the control plan defines:
- What characteristics to inspect.
- How to measure/evaluate them (qualitative, quantitative, categorical).
- Sample frequency.
- Required tools/equipment.

**Sample frequency triggers:**

| Trigger | Behavior |
| --- | --- |
| At Arrival | Creates an analysis on every receipt (per lot/batch if lot/batch-tracked) |
| Time Scheduled | Triggers a new analysis once a specified duration has elapsed since the last one, checked at next receipt |
| Interval Scheduled | Triggers a new analysis once a specified number of receipts has occurred |

### Connecting to a PO receipt

A control plan is connected to a PO receipt **automatically** when the receipt is created, provided a valid, active control plan revision exists and meets the system's validation parameters. If you try to connect one manually via "Connect Control Plan" and see no options in the list, it means **no control plan revision currently qualifies** for that receipt — not that none exists in the system (confirmed by an IFS expert on the Community forum).

The inspection quantity on the receipt is populated from whichever source is active:
- **Receive case + inspection code** (fixed quantity or % of received qty), or
- **Control plan** (Quality Management) — the Qty to Inspect field initially shows the highest sample size from the active control plan, and updates whenever a new control plan connects to the receipt.

Users can still manually adjust the inspection quantity in either case. If the control plan is marked mandatory, an active control plan must be connected before the parts can be used, and — depending on setup — a confirmed analysis may be required before the receipt can move to stock.

### Acceptance Sampling

Acceptance sampling is IFS's statistical method for deciding whether to accept or reject an entire lot based on inspecting only a sample of it. It's available on **purchasing and manufacturing** control plans (not on production schedules).

**To activate it:** set the data point's Inspection Code to the system-defined value "Acceptance Sampling" — the Acceptance Sampling trigger type is then connected to that data point automatically.

**Key parameters, set on the control plan:**
- **AQL (Acceptance Quality Limit)** — the worst tolerable % of nonconforming items in a continuing series of lots.
- **Inspection Level** — I (less discrimination) to III (more); Level II is the default.
- **Status** — Normal / Tightened / Reduced, which shifts automatically based on switching rules driven by recent lot acceptance history.

**Sample size calculation:** the system assigns a sample-size *code letter* from lot size + inspection level, then looks up the actual sample size for that code letter from internal ISO tables. Example: lot size 2000, inspection level II → code letter K → sample size 125. Sample sizes are calculated automatically and **cannot be manually overridden**.

**Two supported ISO standards:**
- **Lot-by-lot (ISO 2859-1:1999)** — every lot is evaluated individually; a running switching score of 30+ points allows transition to Reduced inspection. Only single sampling plans are supported (not double/multiple).
- **Skip-lot (ISO 2859-3:2005)** — after qualifying, lots move to being inspected only 1-in-2, 1-in-3, or 1-in-4, tracked via a qualification score instead of a switching score. Products cycle between Lot-by-Lot, Skip-Lot, and Skip-Lot Interruption states depending on quality performance.

On the resulting Analysis, **"No of Nonconformities"** (total defects found) and **"No of Nonconforming"** (items that failed) are both captured, but the ISO 2859-3 attribute acceptance-sampling logic only uses **"No of Nonconforming"** in its accept/reject calculation.

When a lot is rejected, acceptance sampling only flags it — **IFS does not decide the disposition** of a rejected lot; that requires separate action (e.g. MRB/NCR processes).

### Known limitations and gotchas (from the Community forum)

- **PO control plans are read-only at the order level.** Unlike shop order control plans, you cannot add ad-hoc data points for one-off testing or attach tools directly on a PO's control plan. This was confirmed as a current limitation (as of IFS Cloud 23.2.9) by an IFS expert, who suggested submitting an Idea on IFS Community if you need it changed.
- **A very low AQL combined with Tightened status can force 100% inspection**, which is mathematically correct behavior, not a bug — worth checking your AQL value if you're seeing every unit get sampled.
- **Categorical (Pass/Fail) data points are recommended over Attribute** for acceptance sampling when you just need a simple result, since it simplifies how results get reported.
- **Custom/ASQR-style sampling (e.g. aerospace c=0 sampling)** doesn't map cleanly onto IFS's built-in ISO 2859-1/2859-3 logic — a forum user asking about ASQR-20.1-based lot sampling got no resolution in the thread. If you need a c=0 acceptance number scheme, this is likely an area to validate carefully with IFS support/consulting before going live, rather than assuming the standard acceptance sampling setup will cover it.

## Related
- [[2-Areas/Purchasing|Purchasing]]
- [[2-Areas/Quality Management|Quality Management]]
- [[3-Resources/BDR/Purchasing|Purchasing (BDR)]]
- [[3-Resources/BDR/Quality Management|Quality Management (BDR)]]

## Sources

- [Control Plan — IFS Cloud 26R1 Documentation](https://docs.ifs.com/ifsclouddocs/26r1/QualityManagement/AboutControlPlan.htm)
- [Inspection — IFS Cloud Documentation (Receipt)](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/Receipt/AboutInspection.htm)
- [Acceptance Sampling — IFS Cloud 25R2 Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/QualityManagement/AboutAcceptanceSampling.htm)
- [Purchase order specific control plan | IFS Community](https://community.ifs.com/products-manufacturing-products-engineering-40/purchase-order-specific-control-plan-52487)
- [Control Plan Purchasing - ISO table | IFS Community](https://community.ifs.com/products-manufacturing-products-engineering-40/control-plan-purchasing-iso-table-14579)
- [Setup Skip Lot Purchasing Control Plan question | IFS Community](https://community.ifs.com/products-manufacturing-products-engineering-40/setup-skip-lot-purchasing-control-plan-question-66995)
- [Connect control plan to purchase order receipt | IFS Community](https://community.ifs.com/buying-procurement-demand-planner-asc-srm-41/connect-control-plan-to-purchase-order-receipt-44686)
- [Purchasing Control Plans - AQL Questions | IFS Community](https://community.ifs.com/buying-supply-chain-procurement-demand-planner-asc-srm-41/purchasing-control-plans-aql-questions-1793)
- [How the Inspection frequency is set on the Control plan - Purchasing | IFS Community](https://community.ifs.com/distribution-crm-commerce-39/how-the-inspection-frequency-is-set-on-the-control-plan-purchasing-36305)
