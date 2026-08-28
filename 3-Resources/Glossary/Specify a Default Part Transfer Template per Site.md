---
type: glossary
term: Specify a Default Part Transfer Template per Site
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Specify a Default Part Transfer Template per Site

## Summary

This basic data maps each part type to a specific Part Transfer Template on a per-site basis, associating site ID, part type, and template ID in a table. It ensures the correct transfer template (e.g., MAN, PUR, RAW, EXP) is applied automatically whenever an engineering part of a given type is transferred into that site, and keeps the mapping isolated to each site's own configuration rather than shared globally. It depends on the Part Transfer Templates already being defined.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define a Part Transfer Template|Define a Part Transfer Template]]
- [[3-Resources/Glossary/Define Default Mgf Engineer and Planner per Site|Define Default Mgf Engineer and Planner per Site]]

## Sources
- [Setting Up Engineering Transfer Basic Data and Requirements — Exercises — IFS Documentation](https://wssifshelp.wilhelmsen.com/ifsdoc/documentation/en/TMMFGStandards/BasicData/MFSSettingUpEngineeringTransferBE.htm)
