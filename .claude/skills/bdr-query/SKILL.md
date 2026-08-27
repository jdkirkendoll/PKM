---
name: bdr-query
description: Given a single BDR data point (e.g. "Define Norm Types" from the Quality Management BDR), research the underlying IFS Cloud database table/view and fill in that row's Table/View and Query columns in the BDR file. Use when the user asks for a query for a specific BDR data point, wants to find the table behind an IFS screen, or runs /bdr-query.
---

# BDR Query

Turn one BDR data point into a `SELECT * FROM <table_or_view>;` query, filled into that row's `Table/View` and `Query` columns in its BDR resource file (`3-Resources/BDR/<Area>.md`). Works **one data point at a time** — never process a whole BDR file in bulk unless the user explicitly asks for that.

## Input

- If invoked with an argument, that names the data point (ideally with the area/BDR file it belongs to, e.g. "Define Norm Types in Quality Management").
- If invoked with no argument, ask which data point — and which area's BDR file — to look up.
- If the area isn't given, grep `3-Resources/BDR/*.md` for a row matching the data point name and use that file's area. If it appears in more than one BDR file, ask which one is meant.

## Researching the table/view

IFS does not publish a public per-screen data dictionary, so be honest about what's actually verifiable:

1. Search the IFS Community forum and official IFS documentation (docs.ifs.com, docs.ifs.com/techdocs) for the data point / activity name together with terms like "table", "view", "LU", "logical unit".
2. Only treat a name as confirmed if it is **explicitly stated** by an authoritative source — an IFS employee/partner reply on the Community forum, or official documentation naming the table/view directly. A generic naming-convention pattern (e.g. "LUs usually end in `_TAB`") is not confirmation on its own.
3. If nothing explicit turns up, **do not fabricate or guess a table name.** Report that it couldn't be verified from public sources, and tell the user to check via IFS Cloud's own System Info feature (right-click the field/window in the client → System Info), which shows the LU name and underlying database view directly from their instance — that's the authoritative source for this, not the public internet.
4. If the user then supplies the LU/view name themselves (e.g. from System Info), treat that as confirmed and go straight to writing the query — no further research needed.

## Writing the query

Every BDR table has two trailing columns for this: `Table/View` and `Query`. Once a table/view name is confirmed (via research or supplied by the user), edit that data point's row in place:

- Fill in `Table/View` with the confirmed name.
- Fill in `Query` with `` `SELECT * FROM <table_or_view_name>;` `` — always derived from whatever is in `Table/View` for that same row, so the two columns never disagree.

If a row's `Table/View` cell is already filled in, don't overwrite it without asking first (the user may have already confirmed it from System Info, or from a different session).

## When done

Report the query (or the "couldn't verify from public sources" outcome), and which file/row was updated, if any.
