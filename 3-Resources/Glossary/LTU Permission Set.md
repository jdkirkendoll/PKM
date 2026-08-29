---
type: glossary
term: LTU Permission Set
source: web
created: 2026-08-29
tags: [glossary, ifs, security]
---

# LTU Permission Set

## Summary

An LTU (Limited Task User) Permission Set is a predefined Permission Set, owned and defined by IFS R&D, that grants access to one narrow piece of functionality — each tied to its own sales part (SKU) on the Global Price List and obtained through IFS Support rather than created locally. A user holding only LTU Permission Sets is an **LTU User**; a user with both LTU and other (non-LTU) Permission Sets becomes a **FULL License User**, and license usage metrics are calculated based on LTU consumption. LTU sets can only be imported with the **Replace** option (Merge is disabled for them), cannot be created directly in IFS Cloud, cannot be extended beyond their shipped functionality or have their XML edited, and lose their LTU flag if duplicated or re-imported under a new name. They're visible both on the License Management > LTU Permissions page and via the Limited Task User flag on the Permission Set itself.

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/Permission Set|Permission Set]]

## Sources
- LTU Permission Sets
- Permission Set Overview
- Importing Permission Sets using the Solution Manager
