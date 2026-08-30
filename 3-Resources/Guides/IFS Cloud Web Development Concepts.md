---
type: guide
topic: IFS Cloud Web Development Concepts
source: local-pdf
created: 2026-08-30
tags: [guide, ifs, technical, how-to]
---

# IFS Cloud Web Development Concepts

## Summary

Three recurring concepts show up across most IFS Cloud Web projection/client development: dynamic dependencies (making a page work correctly when it references an optional/dynamic component), client validations (fast, client-side sanity checks that complement but never replace server validation), and overridable methods (the standard hook points for adding custom logic to generated CRUD behavior). See [[3-Resources/Guides/IFS Cloud Web Development Overview|IFS Cloud Web Development Overview]] for the broader architecture these fit into.

## Details

### Dynamic Dependencies

IFS Cloud is built from static and dynamic components, and a Cloud Web page will sometimes need to reference an element that lives in a dynamic component. Any such reference must be explicitly annotated with `@DynamicComponentDependency <COMPONENT>` in both places it matters: at the point where the element is declared/defined, and at the point where it's referenced. This applies to client-model elements (navigator entries, sub-menus, pages, groups, lists, tabs, commands, fields, LOVs, LOV lists) and projection-model elements (entity sets, entities, queries, summaries, references, functions, actions) alike, and also to fragments included via `include fragment` — anything used from within a dynamic fragment must itself be annotated too.

### Client Validations

Client validations give the user immediate feedback on bad input (e.g. "end date must be after start date," non-negative quantities, email/phone format) instead of waiting for a server round-trip on save. They're defined per-attribute on the projection using a `validate [...] message "..."` block and work on text fields. They are explicitly **not** a substitute for full server-side record validation — they exist purely as a UX convenience layered on top of validation the server still has to enforce.

### Overridable Methods

To keep the Cloud Web client thin, most client-side validation logic that used to live in the old IFS Enterprise Explorer client has moved server-side, into the projection file's overridable CRUD methods:
- `CRUD_Create___` — called when a new record is inserted.
- `CRUD_Update___` — called when saving a modified record.
- `CRUD_Delete___` — called when deleting a record.
- `CRUD_Default___` — called when a new record is created in the client; used to populate default attribute values (or the same effect can be achieved via each attribute's `default` property in the projection). Especially useful in master-detail pages, where it can supply parent key values to the detail page.

Method signatures differ between **entities** (work with an attribute string, `attr_`) and **virtuals** (work with a full record). All client-side pre-validation must be added *before* the call to `super()` inside these methods. In the client model, generated selectors and LOV lists can also be overridden directly (selectors without `@Override`; LOV lists with it) to add columns the default-generated version doesn't include — useful since a default LOV typically only fetches 3–4 attributes even if the underlying list has many more.

## Related
- [[2-Areas/Technical|Technical]]

## Sources
- Dynamic Dependencies - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
- Client Validations - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
- Overridable Methods - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
