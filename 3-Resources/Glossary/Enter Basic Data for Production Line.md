---
type: glossary
term: Enter Basic Data for Production Line
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Enter Basic Data for Production Line

## Summary

This is the setup task for creating a Production Line in IFS Cloud Manufacturing — an organizational level that sits between a site and its work centers, representing a sequential flow where materials are refined or components are assembled into an end product. Basic data includes the mandatory site, the inbound and outbound inventory locations the line uses (backflushing components only from locations of type Production Line), the work centers connected to the line, and — if the site calendar shouldn't apply — a dedicated calendar that must be defined before the line is created. Once set up, one or more parts can be connected to the line, and MRP treats a part built on a production line differently: it stops breaking down demand at that part and lets the line itself manage component demand.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Connect Part to Production Line|Connect Part to Production Line]]
- [[3-Resources/Glossary/Define Schedule Report Points|Define Schedule Report Points]]

## Sources
- [Enter Basic Data for Production Line — IFS Documentation](https://ifs-train.westsidecorporation.com/ifsdoc/documentation/en/Planning/ActivityManufCell.htm?StandAlone=true)
- [Production Line — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/lang/en/MfgStandard/AboutProductionLine.htm)
