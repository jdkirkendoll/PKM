---
type: glossary
term: Dialog
source: local-pdf
created: 2026-08-30
tags: [glossary, ifs, technical]
---

# Dialog

## Summary

A Dialog is a modal overlay client control that floats over the main IFS Cloud Web page, used for short, focused interactions (e.g. editing a related record) without navigating away from the current page. It's declared for a data structure (`dialog MyDialog for MyStructure { ... }`), takes `input`/`output` attributes, and is triggered from another control's `execute` block rather than launched from the Navigator. Standard commands are OK (commits and closes) and Cancel (discards and closes); Apply commits without closing, and Close only closes. As a rule the dialog stays open only if its finishing command exits with an empty value. IFS's own guidance: keep dialogs short — avoid long dialogs requiring scrolling, dialogs that open other dialogs, or dialogs with many commands (use a full page instead for those cases), and note that a dialog can only contain one multiline field at default height and operates on a single structure.

## Related
- [[3-Resources/Guides/IFS Cloud Web Client Controls|IFS Cloud Web Client Controls]]
- [[3-Resources/Guides/IFS Cloud Web Development Overview|IFS Cloud Web Development Overview]]

## Sources
- Dialog - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
