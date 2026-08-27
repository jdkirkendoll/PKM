---
type: glossary
term: Acquisition Reason
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Acquisition Reason

## Summary

Acquisition Reason is a predefined Transaction Reason in IFS Cloud Fixed Assets Accounting that must be stated whenever a fixed-asset acquisition transaction is recorded — for example, when a serial object (piece of equipment) is connected to a fixed asset through purchase, transfer, or initial balance. Transaction Reasons are set up as basic data with an ID and description, can be flagged as usable for acquisition, disposal, and/or depreciation transactions, and are typically also configured as a default on the object's Object Group. They matter operationally because reports such as the FA Transaction Reason Report group and summarize acquisition transactions by acquisition account, object group, and reason, so consistent reason codes are needed for meaningful asset reporting from day one.

> [!note] Confidence: moderate
> The general mechanism (Transaction Reason used as an acquisition reason, defined in Fixed Assets Accounting basic data, defaulted via Object Group) is documented, but no source was found spelling out the specific list of Acquisition Reason values an implementation should define. The summary is based on IFS Fixed Assets Accounting documentation rather than a source addressing "Acquisition Reason" for Serial Objects specifically.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Group Objects|Group Objects]]
- [[3-Resources/Glossary/Acquisition Code|Acquisition Code]]

## Sources
- [Enter Basic Data for Fixed Assets Accounting — IFS Documentation](https://wssifshelp.wilhelmsen.com/ifsdoc/documentation/en/TMFinSetup/SetupGuides/SetUpFixassFAA.htm)
- [Fixed Assets Analysis—Key Exercises — IFS Documentation](https://wssifshelp.wilhelmsen.com/ifsdoc/documentation/en/TMFixedAsset/Analysis/FAAAnalysisKE.htm)
- [BDR for Fixed Assets Accounting — IFS Documentation](https://ifs9demo.atifs.com/ifsdoc/documentation/en/GeneralIFSApplications/ProcessBDRFixedAssets2.htm)
