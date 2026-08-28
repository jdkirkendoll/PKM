---
type: glossary
term: Create Routing Manually
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Create Routing Manually

## Summary

Creating a routing manually means building the sequence of operations needed to manufacture, repair, prototype, disassemble, assemble, or disposition a part by adding each operation line individually, rather than generating the routing by copying or referencing a Routing Template. For each operation, the user selects a routing alternate, assigns an operation number and description reflecting its sequence, and connects it to an internal Work Center (which must already exist), along with scheduling and load data such as Preferred Resource, Machine Setup Time, Machine Run Factor, and Factor Unit; if labor is involved, Labor Setup Time, Labor Class, Crew Size, and Labor Run Factor are also captured. Once all operations are added, the routing alternate's status must be moved from Tentative to Plannable or Buildable before it can be used for planning or shop orders.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Define-Maintain Routing Template|Define/Maintain Routing Template]]
- [[3-Resources/Glossary/Create Work Centre|Create Work Centre]]

## Sources
- [Add Routing Operations — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MfgStandard/ActivityAddRoutingOperations.htm)
- [Create a Routing Template Manually — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MfgStandard/ActivityCreateRoutingTemplate.htm)
