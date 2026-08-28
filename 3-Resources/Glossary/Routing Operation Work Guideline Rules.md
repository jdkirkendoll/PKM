---
type: glossary
term: Routing Operation Work Guideline Rules
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Routing Operation Work Guideline Rules

## Summary

Routing Operation Work Guideline Rules are back-office configuration rules attached to a routing operation's work guideline. They determine, based on a configured part's characteristic and option values, whether a given work guideline is included on that operation, and can modify the guideline's attributes for the specific configuration. This mirrors Structure Work Guideline Rules but on the routing side: when a shop order is created, the (possibly rule-modified) operation guidelines are copied onto the order's operations, where they can be further edited without changing the source routing guideline.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Routing Operation Rules|Routing Operation Rules]]
- [[3-Resources/Glossary/Routing Operation Tool Rules|Routing Operation Tool Rules]]
- [[3-Resources/Glossary/Structure Work Guideline Rules|Structure Work Guideline Rules]]

## Sources
- [Back Office Configuration Rules — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MfgStandard/AboutBackOfficeConfigRules.htm)
- [Work Guidelines — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MfgStandard/AboutWorkGuidelines.htm)
