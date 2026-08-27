---
type: glossary
term: Ensure combination rules are defined
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Ensure combination rules are defined

## Summary

Combination rules validate which code part values are allowed to appear together in the same code string — for example, restricting which projects can combine with which accounts — and are part of the same rule set as posting control and code string completion in IFS Accounting Rules. They are also used for authorization: an "Authorization Combination Rule" can be assigned per user so that only certain users are allowed to approve postings for certain account/code-part combinations. Before go-live, these rules must be defined so that invalid code string combinations are rejected at the point of posting rather than discovered later, and so posting authorization limits work correctly.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Code String for Project Rules|Code String for Project Rules]]
- [[3-Resources/Glossary/Applying the Rules for Control Types|Applying the Rules for Control Types]]

## Sources
- [Combination Rules - Link to Code Part — IFS Community](https://community.ifs.com/finance-financials-42/combination-rules-link-to-code-part-12746)
- [Getting Error "the code part combination on posting line..." — IFS Community](https://community.ifs.com/getting-started-with-ifs-132/getting-error-the-code-part-combination-on-posting-line-with-row-id-1-is-invalid-for-authorizer-in-sequence-10-due-to-settings-in-window-authorizations-combination-rules-54794)
- [Set Up Basic Data Accounting Rules — IFS Documentation](https://docs.ifs.com/ifsclouddocs/21r1/DefineFinancialsBasics/ProcessSetUpBasicDataAccountingRules.htm)
