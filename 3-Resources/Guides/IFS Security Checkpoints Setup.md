---
type: guide
topic: IFS Security Checkpoints Setup
source: local-pdf
created: 2026-08-29
tags: [guide, ifs, security, how-to]
---

# IFS Security Checkpoints Setup

## Summary

Step-by-step guide to setting up a [[3-Resources/Glossary/Security Checkpoint|Security Checkpoint]] in IFS Cloud — a re-authentication gate on a specific sensitive function or business flow. For what Security Checkpoints are and how they fit alongside Permission Sets, see [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets]]; this guide covers only how to actually set one up, per the official technical documentation.

## Details

### 1. Enable the service

The Security Checkpoint service is enabled or disabled globally in IFS Solution Manager, under Access Control. Nothing else works until this is switched on.

### 2. Define a Security Checkpoint Gate (configuration)

A gate's configuration consists of:
- A unique ID.
- A description.
- A Security Log message, which supports substitution parameters so the logged entry can include transaction-specific values.
- An active/inactive flag, so a gate can be turned off without deleting it.

### 3. Wire the gate into a business flow (implementation)

A gate does nothing on its own — it requires implementation code that actually invokes it at the point in a business flow you want protected. One gate can be reused across multiple business flows, but the documentation flags a real tradeoff: reuse makes the audit log harder to trace back to a specific flow, since entries from a shared gate can't be distinguished as cleanly as a dedicated gate per flow would allow.

### 4. Decide the re-authentication behavior

- Password is the default (and only built-in) authentication check.
- Username is pre-filled with the current user by default — this can optionally be reconfigured to require the user to retype their username too. Either way, no username other than the current logged-in user's is ever accepted.
- A comment field is available for the user to annotate unusual-but-legitimate transactions, so auditors can more quickly separate those from genuinely illegitimate ones in the log.

### 5. Runtime behavior once live

- A gate is only "open" for the duration of one transaction, then closes again.
- If several gates would fire within a single transaction, only the *first* one prompts for re-authentication — the rest pass silently until the transaction ends.
- Every successful pass writes an entry to the Security Checkpoint Log (who, when, what) and fires a `SECURITY_CHECKPOINT_SUCCESS` event, which can be configured to run custom code (e.g. sending a notification email).

## Related
- [[3-Resources/Guides/IFS Security & Permission Sets|IFS Security & Permission Sets (Guide)]]
- [[3-Resources/Glossary/Security Checkpoint|Security Checkpoint]]

## Sources
- Security Checkpoints - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
- Access Control - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF (section index only, no additional detail)
