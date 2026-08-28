---
type: glossary
term: Structure Work Guideline Rules
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Structure Work Guideline Rules

## Summary

Structure Work Guideline Rules are back-office configuration rules attached to a structure line item's work guideline. Evaluated component by component against a configured part's characteristic and option values, they decide whether a given work guideline is included on that structure component, and their actions can modify the guideline's text or attributes for the specific configuration. When a shop order is created from the structure, the resulting (possibly rule-modified) work guidelines are copied onto the order's materials, and can be edited further there without affecting the source structure guideline.

> [!note] Confidence: moderate
> A page confirming "Configuration Structure Work Guideline Rules" as one of the back-office rule types was found via search, but the full documentation page describing its condition/action mechanics in detail could not be directly fetched; this entry combines that confirmation with the general Work Guidelines documentation and the condition/action framework documented for other back-office rules.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Structure Rules|Structure Rules]]
- [[3-Resources/Glossary/Alt Structure Rules|Alt Structure Rules]]
- [[3-Resources/Glossary/Routing Operation Work Guideline Rules|Routing Operation Work Guideline Rules]]

## Sources
- [Back Office Configuration Rules — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MfgStandard/AboutBackOfficeConfigRules.htm)
- [Work Guidelines — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MfgStandard/AboutWorkGuidelines.htm)
