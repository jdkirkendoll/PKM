---
type: glossary
term: User Group to Voucher Type and Period
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# User Group to Voucher Type and Period

## Summary

User groups are connected to the voucher number series they are allowed to use via "User Group per Voucher Series" — this ties a user group to specific voucher types (and, where periods are used, specific periods). For example, a general accounting user group might be linked to all voucher number series except year-end, while a dedicated year-end user group is linked only to the year-end voucher series. This controls which users can post which kinds of vouchers in which period, which is important for closing controls and segregation of duties before go-live.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Voucher Series per FY|Voucher Series per FY]]
- [[3-Resources/Glossary/Function Groups|Function Groups]]

## Sources
- [Connect User Group to Voucher Number Series — IFS Documentation (mirror)](https://wssifshelp.wilhelmsen.com/ifsdoc/documentation/en/DefineFinancialsBasics/ActivityConnectUserGroupVoucherNumberSeries.htm)
- [Set Up Basic Data Accounting Rules — IFS Documentation](https://docs.ifs.com/ifsclouddocs/21r1/DefineFinancialsBasics/ProcessSetUpBasicDataAccountingRules.htm)
