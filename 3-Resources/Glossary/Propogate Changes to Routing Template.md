---
type: glossary
term: Propogate Changes to Routing Template
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Propogate Changes to Routing Template

## Summary

When a Routing Template has been applied to parts by reference rather than by copy, editing the template and then right-clicking to "Propagate Changes" opens a dialog that pushes the revised template content out to the routings that were originally created from it. This is what makes the reference relationship useful operationally: instead of manually editing every routing that shares a template, a single update to the template can be propagated everywhere it's referenced — though a routing that has since been manually modified independently of the template is excluded from automatically inheriting the change.

> [!note] Confidence: moderate
> The propagation dialog's existence and basic behavior ("right-click and click Propagate Changes to open a dialog box to help you propagate the revised template") is confirmed from IFS Cloud documentation on routing templates, but a dedicated activity page describing every option in that dialog was not found, so exact field-level behavior is inferred from the analogous Standard Operation propagation dialog.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define-Maintain Routing Template|Define/Maintain Routing Template]]
- [[3-Resources/Glossary/Propogate Changes to Standard Operation|Propogate Changes to Standard Operation]]

## Sources
- [Create a Routing Template Manually — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MfgStandard/ActivityCreateRoutingTemplate.htm)
