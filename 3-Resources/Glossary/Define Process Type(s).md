---
type: glossary
term: Define Process Type(s)
source: web
created: 2026-08-28
tags: [glossary, ifs, manufacturing]
---

# Define Process Type(s)

## Summary

A Shop Order Process Type defines which automated shop-order handling events run in a batch, and in what order, for shop orders/requisitions matching that process. IFS Cloud always processes the events in a fixed sequence — release shop order requisitions first, release shop orders second, then reserve shop orders — so a process type is essentially a named configuration of which of these events to include and how far ahead of the start date to run them (via a "Days Before Start Date" field, using workdays if the manufacturing calendar is enabled). Defining process types lets a site automate the requisition-to-reservation workflow instead of handling each shop order manually.

## Related
- [[3-Resources/BDR/Manufacturing|Manufacturing (BDR)]]
- [[3-Resources/Glossary/Select Event(s)|Select Event(s)]]
- [[3-Resources/Glossary/Set Up Priority Rule(s) per Site|Set Up Priority Rule(s) per Site]]

## Sources
- [Enter Shop Order Process Type — IFS Cloud Documentation](https://docs.ifs.com/ifsclouddocs/25r2/Manufacturing/ActivityEnterProcessTypes.htm)
