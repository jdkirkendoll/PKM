# Needs Review

Notes the inbox organizer filed on a best guess. Confirm the placement (or move it), then remove `confidence: low` and the callout from the note.

```dataview
TABLE file.folder AS "Filed in"
FROM -"Templates" AND -"Dashboards"
WHERE confidence = "low"
```
