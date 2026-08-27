---
type: meeting
customer: CIR
tags: [meeting, status-update]
created: 2026-08-26
attendees: []
project: "[[CRIM006 - UKG Integration]]"
---

# CRIM006 - Status Update Talking Points

**Date:** 2026-08-26
**Attendees:** 
**Project/Area:** [[CRIM006 - UKG Integration]]

Status picture based on the tracker, crosswalk, and team-instructions docs (not tied to a specific meeting invite — calendar/Trello access was unavailable when this was compiled).

## What's been done on your side (ARCWIDE + you)

I have authored the CRIM006 functional spec (v1.0, dated 4/6/2026) — the entire target-side design for how UKG data lands in IFS, including wizard-by-wizard field placement, termination logic, and test scenarios. Bryan Dillard built and fully unit-tested the IFS Connect side against that spec: holding tables, packages, dummy-record creation, and demonstration XML for both the employee and attendance feeds — done and working before any real UKG data was even reviewed.

Since 8/25 alone, a long list of previously-open decisions were resolved without needing anything further from CIRCOR: Leaving Cause standardized, Selection Group adopted for approval routing (superseding the original spec), WageCode simplified to N/A only, WageType confirmed as derived rather than transmitted, public holidays moved entirely to IFS's native PHC schedule, overtime handling clarified, and Position Code vs. Labor Class confirmed as two distinct source fields rather than one. Also built: the master field-mapping tracker, a split-out value-mapping crosswalk doc, plain-language instructions document for the UKG team (delivered as a simplified single-sheet Excel workbook per feedback), and most of the Labor Class crosswalk — only two labor classes remain unidentified, and only because CIRCOR hasn't sent the source file.

## What CIRCOR/UKG has delivered or confirmed

Comparatively thin. Abinesh's team walked back the SFTP transport method that had reportedly been agreed to on a call, now saying it's "a scheduled report to a distribution list" instead — an unresolved reversal, not a decision. No technical development resource has been identified on their side at all; Abinesh is functional-only. The attendance report's existence is still unconfirmed as of 8/24 — Shad said he was "checking with his team." An Excel file containing the Labor Class crosswalk was referenced as being in an email/attachment zip but was never actually sent. And one item — how to determine who needs an IFS user account — has been an open, unanswered question in the spec since April, five months ago.

## What's still open (the punch list)

1. Hourly rate / Standard Cost — report vehicle known (Active report), exact column still unconfirmed
2. Position Code — full UKG Job Level value list not yet received
3. Labor Class — crosswalk mostly built already; blocked only on CIRCOR resending the Excel file
4. Schedule Code — which UKG field drives the 3-way shift mapping, still unconfirmed
5. Whether UKG can output pre-translated values or IFS must build/maintain the crosswalks — raised to their team, no answer
6. Citizenship — possible field concatenation, unconfirmed
7. Effective Date / Notification Date — target logic defined, UKG source field still open
8. Attendance report — existence and timeline still unknown
9. Transfer protocol — SFTP vs. distribution list, needs one final written decision
10. UKG technical development resource — still not identified/allocated
11. Whether "Manager" on the UKG export equals IFS's "time approver" — unconfirmed
12. User account eligibility rule — open since the original spec, never answered

The pattern across nearly every open item is the same: the target-side design and logic is done and documented, and what's blocking closure is either a file CIRCOR hasn't sent, a field CIRCOR hasn't identified, or a question CIRCOR hasn't answered — several dating back months, not weeks.

## Action Items


## Related
- [[CRIM006 - UKG Integration]]
