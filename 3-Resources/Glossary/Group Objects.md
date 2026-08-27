---
type: glossary
term: Group Objects
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Group Objects

## Summary

Object Group is basic data configured in IFS Cloud Equipment/Fixed Assets Accounting that classifies functional and serial objects (equipment) into groups such as "Pumps" or "Centrifugal Pump," and can be structured hierarchically by connecting an object type to a superior object type. Beyond classification, an Object Group carries default values used when an object is connected to a fixed asset — including the default acquisition reason, acquisition account, disposal reason, object class, base values, books, and depreciation method — so at least one Object Group must exist before any Fixed Assets Accounting or serial-object-to-asset transaction can be processed. For rental/hire equipment tracked as serial objects, setting up Object Groups correctly up front ensures new equipment inherits the right accounting defaults and technical characteristics automatically.

> [!note] Confidence: moderate
> The exact BDR wording "Group Objects" was not found verbatim in IFS documentation or community threads; it closely matches "Object Group" (and the related "Group ID" field used for looser classification of Serial Objects, as distinct from the more structured "Object Type"). This summary is built from IFS Cloud Equipment Administration and Fixed Assets Accounting documentation describing Object Group/Object Type rather than a single source using this exact term.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Acquisition Code|Acquisition Code]]
- [[3-Resources/Glossary/Acquisition Reason|Acquisition Reason]]

## Sources
- [Basic Data Object Type: Setup of Object Type Structures — IFS Community](https://community.ifs.com/assets-asset-management-44/basic-data-object-type-setup-of-object-type-structures-58631)
- [Serial Object - Group ID or Object Type — IFS Community](https://community.ifs.com/assets-asset-management-44/serial-object-group-id-or-object-type-33515)
- [Enter Basic Data for Fixed Assets Accounting — IFS Documentation](https://wssifshelp.wilhelmsen.com/ifsdoc/documentation/en/TMFinSetup/SetupGuides/SetUpFixassFAA.htm)
- [BDR for Fixed Assets Accounting — IFS Documentation](https://ifs9demo.atifs.com/ifsdoc/documentation/en/GeneralIFSApplications/ProcessBDRFixedAssets2.htm)
