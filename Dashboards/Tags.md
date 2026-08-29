# Tags

Every tag used in the vault, with how many notes carry it. Click a tag to see every note tagged with it.

```dataview
TABLE WITHOUT ID
  tag AS "Tag",
  length(rows) AS "Count"
FROM -"Templates" AND -"Dashboards" AND -".obsidian"
FLATTEN file.tags AS tag
GROUP BY tag
SORT length(rows) DESC
```
