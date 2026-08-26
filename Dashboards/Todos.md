# Todos

All open tasks across active projects and areas, grouped by file.

```dataview
TASK
FROM "1-Projects" OR "2-Areas"
WHERE !completed
GROUP BY file.link
```
