---
type: guide
topic: IFS Cloud Web Searching
source: local-pdf
created: 2026-08-30
tags: [guide, ifs, technical, how-to]
---

# IFS Cloud Web Searching

## Summary

Search in IFS Cloud Web always runs server-side via the OData `$filter` query option — there is no client-side filtering. Every page and list gets a search panel for free from the framework, with developer-configurable field setup, and end users can additionally mark favorite records to speed up repeated lookups.

## Details

### Page search vs. list search

- **Page search** is available when the page is connected to a data source and its main control (Selector, List, etc.) shares that same data source; the search panel exposes every field available across the page's data-connected elements. It has a **basic** mode (fill in fields) and an **advanced** mode (write a complex filter statement directly). A performed page search is persisted in the URL as a `filter` parameter, so it survives a refresh or browser back/forward navigation, and can also be used to pass a search condition into a page from elsewhere.
- **List search** is scoped to the fields available within that one list control.

### Configuring searchable fields

By default the first three fields in a page/list's metadata show up front in the search panel; the rest sit under "More fields" until a user adds them (a per-user choice that's then remembered via the user profile — see [[3-Resources/Glossary/User Profile Cache|User Profile Cache]]). Developers can:
- Exclude a field entirely: `field CustomerNo { searchable = false; }`
- Relabel a field's search-panel appearance: `field CustomerNo { filterlabel = "Search Customer"; }`
- Override the default field setup on the page search panel specifically (not available for list search) via `defaultsearchfields`, `pinnedsearchfields`, and `requiredsearchfields`.

### OData filter operators

| Operator | Meaning | Example |
|---|---|---|
| `eq` | equals | `$filter=Company eq '10'` |
| `gt` / `ge` | greater than / or equal | `$filter=Total gt 1000` |
| `lt` / `le` | less than / or equal | `$filter=Total lt 1000` |
| `contains` | substring match (text only) | `$filter=contains(FirstName,'Tom')` |
| `startswith` / `endswith` | prefix/suffix match (text only) | `$filter=startswith(FirstName,'Tom')` |
| `and` / `or` | combine conditions | `$filter=FirstName eq 'Tom' and LastName eq 'Hanks'` |

### Favorite records

Users can mark any record as a favorite (a heart icon, available on pages, lists, cards, and LOV dialogs) to quickly find it again later via the standard search/filter UI — favorites also surface first in lists of values. Not supported on lists built from Virtuals, since Virtuals hold data only temporarily.

## Related
- [[2-Areas/Technical|Technical]]

## Sources
- Searching in IFS Cloud Web - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
