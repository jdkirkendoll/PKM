---
type: glossary
term: Inventory Locations
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Inventory Locations

## Summary

Inventory Locations define the specific physical places within a warehouse where items can be stored or moved to, structured hierarchically as site, warehouse, bay, row, tier, and bin. Each location is defined per site and must be connected to an Inventory Location Group, which in turn is linked to a Location Type; at minimum a location requires a site, location number, warehouse, and location group, with bay/row/tier/bin as optional detail. Attributes can be set at any level of the warehouse structure and are inherited by lower levels unless overridden. For rental/hire equipment, having Inventory Locations set up before go-live is what lets individual pieces of equipment be tracked to a specific bin or staging area rather than just "in stock at a site."

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Inventory Group|Inventory Group]]

## Sources
- [9.3.1.7 BDR for Inventory Locations — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/24r1/ProcessModels/Process_Model/bdrforinventorylocations.htm)
- [Inventory Locations and Warehouse Structure — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/22r1/MaintainInventory/AboutInventoryLocations.htm)
- [Enter Inventory Locations — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/MaintainInventory/ActivityInventEnterInventoryLocations.htm)
