---
type: guide
topic: IFS Cloud Web Development Overview
source: local-pdf
created: 2026-08-30
tags: [guide, ifs, technical, how-to]
---

# IFS Cloud Web Development Overview

## Summary

IFS Cloud Web is the browser-based client for IFS Cloud: a responsive, consumer-grade UI built from declarative model files rather than hand-written pages, communicating with the database through a REST/OData service layer. This note covers the architecture an application developer works within and the major UI regions end users see; for the specific development concepts used while building pages (dynamic dependencies, client validations, overridable methods) see [[3-Resources/Guides/IFS Cloud Web Development Concepts|IFS Cloud Web Development Concepts]], and for the catalog of controls available see [[3-Resources/Guides/IFS Cloud Web Client Controls|IFS Cloud Web Client Controls]].

## Details

### Architecture

A developer works with two model files per page:
- A **projection file** (`*.projection`) — defines the server-side data/business logic exposed to the client.
- A **client file** (`*.client`) — defines the page layout and controls.

These are run through a code generator into two metadata packages: `_SVC` (from the projection model) and `_CPI` (from the client model). Custom PL/SQL logic can be added via a projection `*.plsvc` file and becomes part of the `_SVC` package. Both packages deploy into the database alongside IFS's existing LU (Logical Unit) business logic — the projection model wraps that existing logic rather than replacing it, which is how IFS Cloud Web coexists with older clients still running against the same database.

The metadata is served to the browser by **FndODataProvider**, a Java-based OData implementation (via the Apache OLingo library, supporting OData 2.0 and 4.0) running as a WAR deployment on the IFS middleware server alongside the Cloud Web client framework itself. The browser-side client framework (built on Angular plus other front-end libraries) downloads this metadata and renders the page as a [[3-Resources/Glossary/Single Page Application (SPA)|Single Page Application]] — there are no static webpages; every page is rendered by reading metadata at runtime.

Three layers in total: **IFS Web (browser)** → **FndODataProvider (middleware server)** → **Database & Business Logic**.

### User Interface

The Cloud Web UI is responsive across desktop, tablet, and mobile. Major regions:
- **Top Bar** — navigation, search, recent screens, user settings, help.
- **Navigator** — acts as both a page navigator and a record selector; each entry ("navigator tile") can split into a page-opening half and a drill-down half.
- **Search Panel** — a basic field-based search by default, with an Advanced option for complex queries (see [[3-Resources/Guides/IFS Cloud Web Searching|IFS Cloud Web Searching]]).
- **Breadcrumbs** — shows current location, most useful when the Navigator is hidden.
- **Page** — the main content area, split into a title/record selector, a command bar (create/edit/delete/filter/commands), one or more data sections (groups, tabs, lists, cards, charts — each independently collapsible), and an attachments area at the bottom. Dialogs render inside this area too.

### Further topics in the official documentation

The full IFS Cloud Web Development documentation set also covers Naming and Syntax Guidelines, Useful Development Concepts, how to develop a page end-to-end, Development Considerations, handling Customizations, the full Component Reference, and Home Widget Development — only the pieces pulled into this vault's own guides so far are linked above.

## Related
- [[2-Areas/Technical|Technical]]

## Sources
- IFS Cloud Web Overview - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
- IFS Cloud Web Development - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF (table-of-contents page only)
- Resources - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF (index page only)
