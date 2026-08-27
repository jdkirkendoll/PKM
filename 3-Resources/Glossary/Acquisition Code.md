---
type: glossary
term: Acquisition Code
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Acquisition Code

## Summary

In IFS Cloud Fixed Assets Accounting, each Object Group is linked to a default acquisition account (referred to informally as the acquisition code, "code part A") that determines which account fixed-asset acquisition value postings are booked to when a serial or functional object is connected to a fixed asset. At least one acquisition account must exist in the system before any Fixed Assets Accounting transaction — including acquiring a piece of rental/hire equipment as an asset — can be carried out. Getting this basic data right before go-live matters because it drives the general-ledger postings generated automatically whenever equipment is acquired.

> [!note] Confidence: moderate
> IFS documentation and community discussion consistently describe an "Acquisition Account" linked to Object Group, but no source was found using the literal field label "Acquisition Code" — it may be the BDR author's shorthand for the acquisition account/code-string setup, or a label specific to a particular IFS Cloud release. The mechanism described (an account tied to Object Group, required before Fixed Assets transactions) is verified; the exact field name is inferred.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Group Objects|Group Objects]]
- [[3-Resources/Glossary/Acquisition Reason|Acquisition Reason]]

## Sources
- [Enter Basic Data for Fixed Assets Accounting — IFS Documentation](https://wssifshelp.wilhelmsen.com/ifsdoc/documentation/en/TMFinSetup/SetupGuides/SetUpFixassFAA.htm)
- [Acquisition account — IFS Community](https://community.ifs.com/finance-financials-42/acquisition-account-51162)
- [Fixed Asset Investment Status - Change Acquisition Account — IFS Community](https://community.ifs.com/finance-financials-42/fixed-asset-investment-status-change-acquisition-account-17621)
- [BDR for Fixed Assets Accounting — IFS Documentation](https://ifs9demo.atifs.com/ifsdoc/documentation/en/GeneralIFSApplications/ProcessBDRFixedAssets2.htm)
