---
type: glossary
term: Create Unit Codes and Relationships
source: mixed
created: 2026-09-03
tags: [glossary, ifs, pdm]
---

## Summary
Unit Codes define the units of measurement (e.g. Hours, Hz, MB, m/s, km/h) that engineering-part characteristic attributes are expressed in — every attribute in use needs a connected unit. IFS provides default ISO-standard units, but custom ones can be created in the Product Basic Data/Unit Relationships window. Units can be typed as Weight, Volume, Discrete, or Not Used, and "relationships" refers to derived-unit conversions between related units using a conversion factor (for example, converting m/s to km/h uses a factor of 3.6, and the reverse uses 0.2777). This basic data must be in place before characteristics attributes and engineering parts can be given meaningful, comparable measurement values, and the local Engineering Parts documentation notes that when a part already exists in the catalog, its unit code must match what's already established there.

## Related
- [[3-Resources/BDR/Product Data Management|Product Data Management (BDR)]]
- [[3-Resources/Glossary/Enter Characteristics Basic Data|Enter Characteristics Basic Data]]
- [[3-Resources/Glossary/Create Standard Names|Create Standard Names]]

## Sources
- https://wssifshelp.wilhelmsen.com/ifsdoc/documentation/en/DesignStandardProduct/ActivityCreateUnitCodesAndRelationships.htm
- Topics in IFS Cloud/Design Standard Product/About Engineering Parts.md
