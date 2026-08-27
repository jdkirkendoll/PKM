---
type: glossary
term: Code String for Project Rules
source: web
created: 2026-08-27
tags: [glossary, ifs, asset-management]
---

# Code String for Project Rules

## Summary

A "code string" in IFS Cloud is the full combination of code part values (account, cost center, project, and up to 10 code parts in total) that gets attached to every financial transaction. This data point configures the code string rules that apply specifically to project-related postings — which code part carries the project code, what code part values are required on accounts used in project accounting, and how project posting types (such as GP3 Capitalized project cost, GP4 Capitalized project revenue, and GP5 Calculated project cost) drive those values. For project-based hire billing, this must be set up correctly so hire cost and revenue transactions generate complete, valid accounting entries rather than being rejected or missing dimensions.

> [!note] Confidence: moderate
> The general code string/code part mechanism and the GP3/GP4/GP5 project posting types are confirmed in IFS documentation, but no page titled exactly "Code String for Project Rules" was found — this entry combines the general Code String Completion documentation with the Project Accounting setup process.

## Related
- [[3-Resources/BDR/Asset Management|Asset Management (BDR)]]
- [[3-Resources/Glossary/Project Groups|Project Groups]]
- [[3-Resources/Glossary/Project Cost-Revenue Elements|Project Cost/Revenue Elements]]
- [[3-Resources/Glossary/Applying the Rules for Control Types|Applying the Rules for Control Types]]

## Sources
- [What are Code Parts and Code Strings? — IFS Community](https://community.ifs.com/finance-financials-42/what-are-code-parts-and-code-strings-25291)
- [Code string completion — IFS Community](https://community.ifs.com/finance-financials-42/code-string-completion-32421)
- [Set Up Basic Data Accounting Rules — IFS Documentation](https://docs.ifs.com/ifsclouddocs/21r1/DefineFinancialsBasics/ProcessSetUpBasicDataAccountingRules.htm)
- [Process Description Project Accounting — IFS Documentation](https://docs.ifs.com/ifsclouddocs/21r1/ProjectAccounting/ProcessProjectAccounting.htm)
