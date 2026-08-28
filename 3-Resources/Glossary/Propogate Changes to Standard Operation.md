---
type: glossary
term: Propogate Changes to Standard Operation
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Propogate Changes to Standard Operation

## Summary

After editing a Standard Operation that routings reference (rather than copy), a user can right-click and choose to propagate the changes, which opens a dialog controlling how far the update spreads — including options such as "Replace Work Guidelines" and "Replace Tool Info" — and then pushes the revised operation data out to every connected routing. This keeps routings that reference a shared standard operation in sync without manually re-editing each one, and it only affects routings using the reference relationship rather than routings that received an independent copy of the original operation.

> [!note] Confidence: moderate
> Confirmed from an IFS Community forum discussion (including a UPD9 regression where the "Replace Work Guidelines"/"Replace Tool Info" checkboxes stopped defaulting to checked) rather than from an official IFS Cloud documentation page dedicated to this exact propagation dialog, so some field/option names may differ slightly by version.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define-Maintain Standard Operation|Define/Maintain Standard Operation]]
- [[3-Resources/Glossary/Propogate Changes to Routing Template|Propogate Changes to Routing Template]]

## Sources
- [Propagating Standard Operations — IFS Community](https://community.ifs.com/products-manufacturing-products-engineering-40/propagating-standard-operations-16503)
- [Standard Operations — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/26r1/MfgStandard/AboutStandardOperations.htm)
