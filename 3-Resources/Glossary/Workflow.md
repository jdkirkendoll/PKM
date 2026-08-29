---
type: glossary
term: Workflow
source: web
created: 2026-08-29
tags: [glossary, ifs, technical]
---

# Workflow

## Summary

An IFS Workflow is a sequence of activities that orchestrates or automates a business flow, built at the task level from IFS projections rather than from a single background call — it's a higher-level orchestration concept, distinct from the [[3-Resources/Glossary/Background Job|Background Job]] / [[3-Resources/Glossary/Database Task|Database Task]] / [[3-Resources/Glossary/Batch Processor|Batch Processor]] mechanisms used to run individual pieces of work in the background. Access to a Workflow is controlled by three grant types: **External Grant** lets a user access the Workflow directly via its REST endpoint, but doesn't by itself grant access to the business function the Workflow performs. **Internal Grant** authorizes the business function/activities the Workflow performs for any user holding the permission set, even if that user lacks direct projection access to one or more of the underlying activities — though it isn't considered if the user is already granted every activity in the Workflow directly. **Full Grant** combines both.

## Related
- [[3-Resources/Guides/IFS Background & System Processing|IFS Background & System Processing (Guide)]]

## Sources
- Workflows
