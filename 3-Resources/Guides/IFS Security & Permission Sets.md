---
type: guide
topic: IFS Security & Permission Sets
source: web
created: 2026-08-29
tags: [guide, ifs, security]
---

# IFS Security & Permission Sets

An introduction to how IFS Cloud's access-control model fits together, for anyone new to security administration in IFS Cloud. Everything described here is administered through Solution Manager's Access Control area.

## Summary

IFS Cloud authorization is built around the Permission Set: a named collection of access grants to Projections, Lobbies, Workflows, Database Tasks/Task Chains, and System Privileges. Permission Sets can be chained together into a Grant Structure so that granting one Permission Set to a user automatically grants everything beneath it, and they're managed through their whole lifecycle — created, duplicated, compared, exported/imported, and granted to users or User Groups — from Solution Manager. Two complementary tools audit whether that access is sane: Functional Areas define business-function boundaries, and Segregation of Duties Analysis flags users whose combined Permission Sets cross a defined conflict between two areas. Security Checkpoints add a separate, narrower layer — a re-authentication prompt on a specific sensitive transaction, regardless of what the user's Permission Sets already allow. Underpinning all of it is the split between Authentication (proving who you are, via OpenID Connect and the Identity and Access Manager) and Authorization (what that identity is allowed to do, via Permission Sets) — plus SCIM for keeping user/group records in sync from an external identity provider.

## Details

### Permission Sets: the core access-control unit

A [[3-Resources/Glossary/Permission Set|Permission Set]] is a collection of access grants that defines what a user can and cannot do in IFS Cloud, covering Projections, Reports, Lobbies, Workflows, Database Tasks, and Task Chains. There are two **types**: a **Functional Role** covers one small business flow and can only be granted to other Permission Sets (never directly to a user); an **End-User Role** can be granted directly to Users or User Groups and is typically built up from a structure of Functional Roles. Reusing Functional Roles across End-User Roles keeps the total number of Permission Sets manageable.

Every Permission Set also carries a **Delivery Type**, fixed at creation and never editable afterward: **IFS_MANAGED_BASE** (base framework Permission Sets maintained by IFS, allowed inside an [[3-Resources/Glossary/LTU Permission Set|LTU]] structure), **IFS_MANAGE** (IFS's standard Permission Sets covering specific business flows), and **CUSTOM** (anything created within a customer's own environment, fully manageable through Solution Manager). IFS_MANAGED_BASE and IFS_MANAGE Permission Sets can't be modified except for adding/removing user grants — if fine-grained customization is needed, duplicating them into a Custom copy (see below) is the intended path.

A handful of best practices round out the basics: follow the Principle of Least Privilege, use Functional Roles for granularity, keep each Permission Set's XML under 2 MB (larger files trigger a background job to import and are harder to maintain — better to split the *structure*, not the XML, since splitting a single Permission Set's file isn't supported), lean on IFS Managed Permission Sets where possible, grant through User Groups rather than individual users where efficient, and audit and test regularly. IFS ships a large catalog of Predefined Permission Sets out of the box — framework roles needed just to log in (`FND_WEBRUNTIME`, `FND_WEBENDUSER_MAIN`, `FND_WEBENDUSER_B2B`, `MOBILE_APP_RUNTIME`), plus administration, development/translation, IFS Connect, data migration/sync, configuration, mobile, and dozens of solution-specific roles (Analysis Models, Aviation Maintenance, Remote Assistance, Digital Signature, and more) — these give a fresh install a working starting point and an easy path through upgrades.

### Creating, duplicating, comparing, and deleting Permission Sets

A new Permission Set is **created** from either the Permission Sets or Permission Set page in Solution Manager (Solution Manager > Access Control > Permission Sets): name it, pick End User Role or Functional Role, add a description — the Delivery Type is automatically set to Custom. Note that LTU Permission Sets can never be created this way; they must always be imported. Once created, permissions are added for Projections, Lobby Pages, Workflows, Database Tasks/Task Chains, and System Privileges, plus a Grant Structure if the set should inherit from others.

Rather than building a variant from scratch, an existing Permission Set — including IFS Managed ones — can be **duplicated**: the copy always becomes Custom delivery type, optionally carries over the source's user and user-group grants, keeps a reference back to its original, and (if the source was an LTU set) loses the LTU flag. The **Compare with Original** command on a duplicate — or the general **Compare Permission Sets** assistant — diffs a Source against a Target Permission Set and reports each grant as **Additional** (in source only), **Missing** (in target only), or **Exists** (present in both but differing — Workflow grants only). This is especially useful for re-comparing IFS Managed duplicates after a major release update; the result can be resolved by **Replace** (source grants replaced wholesale by target) or **Merge** (target's missing grants copied into source).

Only Custom Permission Sets can be **deleted**, via the Delete command on the Permission Set page. If the set was delivered through IFS Installer, its file must also be emptied to 0KB and committed to the Customer Solution Repository — otherwise the same delivery can resurrect it — and it's good practice to refresh the security cache afterward.

### Moving Permission Sets between environments

Permission Sets prepared in one environment (e.g. test) are typically promoted to another (e.g. production) via export/import, always as XML — a multi-set export bundles the individual XML files into one Zip. Only Custom delivery type Permission Sets can be exported; IFS Managed/IFS Managed Base sets are never exported directly, though they're still represented (by reference) inside the Grant Structure of whatever's being exported. Export optionally includes user and user-group grants.

**Exporting**: from the Export Permission Sets page, add the desired sets, optionally choose to include user/group grants, and finish to download a Zip of Permission Set XML files.

**Importing via Solution Manager**: upload the extracted XML files to the Import Permission Sets page. Each file gets an import option — **Add** (new set, only for non-existing names), **Replace** (existing set's grants cleared and replaced), **Merge** (only new grants added, existing extras untouched), or **Skip**. Validation automatically blocks importing any IFS Managed/IFS Managed Base set (forced to Skip), forces Replace for an existing LTU Permission Set (Merge is disabled for LTUs), and routes anything over 2MB through a background job. A **Show Difference** command previews the exact changes before committing (unavailable above 2MB).

**Importing via IFS Installer**: as an alternative to manual import, exported (and extracted) Permission Set XML files are placed in a delivery's `server/permissions` folder; the installer only ever applies Replace to existing sets, logging and skipping past any file that errors. Making a set obsolete this way still requires deleting it manually in Solution Manager, emptying its file to 0KB, and checking that into the Customer Solution Repository — the same caveat as manual deletion.

### Granting Permission Sets to users

A user with no Permission Set at all cannot log in — every user needs at least one of the base framework roles (`FND_WEBENDUSER_MAIN` for IFS Cloud Web main users, `FND_WEBENDUSER_B2B` for B2B users, or `MOBILE_APP_RUNTIME` for the mobile app). Only End-User Role type Permission Sets can be granted directly to a user or User Group; Functional Roles reach a user only indirectly, through a [[3-Resources/Glossary/Grant Structure|Grant Structure]] — granting an End-User Role automatically grants everything beneath it in the structure (shown as **Indirect** grants), and revoking it revokes the whole indirect chain too.

Grants can be made at three scopes: to a **single user** (from the User page's User Permissions submenu — Grant Permission Sets / Revoke All Permission Sets / revoke individual Direct Grants), to **multiple users at once** (from a Permission Set's Users Granted submenu — Add Users / Revoke), or to a **User Group** (granting to the group grants every current and future member — though revoking a group grant never removes a Permission Set a user was also granted directly). User Grants themselves — separately from the Permission Sets — can be exported (Export All User Grants) and imported (Import User Grants) to move grants between environments, with configurable handling for users or Permission Sets that don't exist at the destination (Ignore and Continue, Stop, or for missing Permission Sets, Create Empty Permission Set).

Grant Structure itself is the mechanism underneath all of this: a Permission Set's total effective permissions are the sum of its own direct grants plus everything granted (indirectly, and indirectly-of-indirectly) through other Permission Sets it has been granted. Circular grants aren't possible. A recommended baseline is to include `FND_WEBENDUSER_MAIN` or `FND_WEBENDUSER_B2B` in every structure so core web framework functionality is always present.

**Permission Set Grant Reports** (End User Roles Connected to All Roles; Users connected to All Roles) give auditors a comprehensive view of the whole grant setup, viewable as a quick report or exportable to Excel.

### Functional Areas and Segregation of Duties

A [[3-Resources/Glossary/Functional Area|Functional Area]] is a named grouping of security objects (Projections, Projection Actions, Projection Entities, Entity Actions) representing a business function, such as "Goods Receiving." Functional Areas exist to define which areas of the system should — or must not — be accessible to the same user, and can be imported/exported as XML. **Functional Area Conflicts** pair two Functional Areas and mark the severity of a user holding both: **Warning** or **Not Allowed**, with an optional flag for whether activity performed through a Workflow should count toward the conflict.

[[3-Resources/Glossary/Segregation of Duties Analysis|Segregation of Duties Analysis]] is the tool that surfaces violations of those conflict rules: it caches which users hold access to conflicting Functional Areas and lists each conflict, distinguishing whether it stems from a **Direct Grant** (a projection grant) or a **Workflow Grant** (an activity performed through a workflow). A reported conflict is informational only — it doesn't restrict the user — and is resolved by judgment: confirm the rule still applies, split an overly broad Functional Area into smaller ones, or revoke/restructure the user's Permission Set grants so they no longer hold both conflicting areas.

### Security Checkpoints: re-authentication on sensitive transactions

Separate from the Permission Set model, a [[3-Resources/Glossary/Security Checkpoint|Security Checkpoint]] adds an extra re-authentication gate on a specific function or business flow — the logged-in user must re-enter their password (optionally their username too, and an audit comment) before the transaction completes. This defends against an unattended, already-logged-in workstation being abused, since only the actual logged-on user's password will pass the check. Every successful pass writes an audit log entry, and a `SECURITY_CHECKPOINT_SUCCESS` event fires that can trigger further custom logic (e.g. sending a notification). A Security Checkpoint Gate is configuration (an id, description, and log message template) plus implementation code wired into a business flow; if several gates fire within one transaction, only the first requires re-authentication. The whole service can be toggled on or off from Solution Manager.

### What a Permission Set actually grants: Projections and System Privileges

A [[3-Resources/Glossary/Projection|Projection]] is a self-contained web API implementing one defined business function — the main unit of security in IFS Cloud, since granting a Projection is what makes its client pages available at all. A Projection's Access Level relative to a Permission Set is **None** (not granted), **Read Only** (view/retrieve only — some Projections are Read Only by design and can't have any action grants), **Full** (view, create, update, delete, scope depending on implementation), or **Custom** (started as Full or Read Only but had individual action grants edited away from that baseline).

A [[3-Resources/Glossary/System Privilege|System Privilege]] is a fixed, non-configurable grant of elevated authority unrelated to data or functional authorization — e.g. `ADMINISTRATOR` (near-Appowner authority, used with care), `CONNECT` (required for any IFS Client to reach the backend at all), `IMPERSONATE USER`, `DEFINE SQL` (lets a user's custom SQL run inside application services), `DEBUGGER`, `DOCMAN ADMINISTRATOR`, `EXPCTR ADMINISTRATOR`, and `LOBBY DATASOURCE DESIGNER`. System Privileges are always granted to Permission Sets, never directly to a user, via the Permission Set's System Privileges submenu.

### Authentication vs. Authorization

[[3-Resources/Glossary/User Authentication|User Authentication]] answers "who are you": every backend API call must carry a valid access token obtained via the OAuth2 / OpenID Connect flow, issued and validated by the Identity and Access Manager (IFS IAM). Browser clients get redirected through the IFS Proxy to the IAM's Authorization Code Flow; non-browser or non-graphical clients use a bearer token obtained via Authorization Code Flow inside the client, or a direct-access grant (Client Credentials Flow for a service identity, Resource Owner Password Credentials Flow for an actual end-user account — the latter unsupported for externally-federated users); HTTP Basic auth is available as a last resort for Remote deployments only. The IAM can authenticate directly against its own user registry (kept in sync with the IFS database) or delegate to an external OpenID Connect identity provider (e.g. Azure AD, Okta) for single sign-on — either way, the backend only ever validates the IAM's own access tokens.

[[3-Resources/Glossary/User Authorization|User Authorization]] answers "what are you allowed to do," and splits into **functional authorization** (which operations/procedures a user may invoke — enforced via Permission Set grants on Projections, Projection Actions, Database Tasks, Lobbies, Workflows, and Quick Reports) and **data authorization** (which rows of data a user may see, enforced through database views that automatically filter by role). All of this happens in server-side business logic, so it can never be bypassed by a modified or unofficial client. Authorization is role-based: rather than granting rights per user, rights are granted to roles (Permission Sets), and roles can themselves be granted to other roles — exactly the Grant Structure mechanism described above.

### Identity and Access Manager

The [[3-Resources/Glossary/Identity and Access Manager|Identity and Access Manager]] (IFS IAM) is configured from Solution Manager and covers four areas: **External Identity Providers** (opting out of IFS IAM's built-in accounts in favor of an OpenID Connect-compliant external provider), **Custom Clients** (registering an external application that needs system access, via the IAM Client page), **IAM Configuration** (password policies, SMTP for activation emails, session/token timeouts), and **Authentication Auditing** (tools for reviewing login, session, and administrative-action history).

### SCIM: provisioning users and groups from an external system

[[3-Resources/Glossary/SCIM|SCIM]] (System for Cross-Domain Identity Management) is a standard REST/JSON protocol IFS Cloud uses for **one-way** provisioning: an external identity provider (e.g. Azure AD) pushes create/update/delete operations for Users and Groups into IFS Cloud; IFS Cloud never pushes changes back out. Consequently, once a user is SCIM-synced, their details should only be edited at the external provider — edits made directly in IFS Cloud Web get overwritten on the next sync. Administrators map SCIM attributes (`userName`, `name.formatted`, `name.givenName`/`familyName`, `emails`, `addresses`, etc. — `userName`, `name.formatted`, and `displayName` are mandatory) to IFS database columns; if the mapping is incomplete, IFS falls back to generating a user ID from the first three letters of the first and last name (extending automatically, then appending a numeric suffix, to resolve collisions).

### LTU Permission Sets and licensing

A [[3-Resources/Glossary/LTU Permission Set|LTU Permission Set]] (Limited Task User) is a predefined, IFS R&D-owned Permission Set scoped to one narrow piece of functionality, tied to its own SKU on the Global Price List and obtained through IFS Support. A user holding only LTU Permission Sets is an **LTU User**; a user with LTU plus any other Permission Set becomes a **FULL License User** — license metrics are calculated from LTU usage accordingly. LTU sets can only ever be imported with the Replace option (Merge is disabled for them), can be viewed both on the License Management > LTU Permissions page and via the Limited Task User flag on the Permission Set itself, cannot be extended beyond their shipped definition or have their XML edited, and lose their LTU flag if duplicated or re-imported under a different name.

### Solution Manager: where Access Control lives

All of the above — Permission Sets, Functional Areas, Segregation of Duties, IAM configuration, and more — is administered from [[3-Resources/Glossary/Solution Manager|Solution Manager]]'s Access Control section, one part of Solution Manager's much broader day-to-day administration surface (Users, Background Processing, Integration, Data Management, Mobile Apps, Configuration, License Management, and more).

## Related
- [[2-Areas/Technical|Technical]]

## Sources

These notes were compiled from IFS Cloud Technical Documentation (docs.ifs.com), saved as local PDF files rather than fetched live:

- Access Control
- Access Security
- Compare Permission Sets and Handle Differences
- Creating Permission Sets
- Deleting a Permission Set
- Duplicate Permission Sets
- Exporting Permission sets
- Functional Areas
- Grant Permission Sets to Users
- Grant Structure
- Identity and Access Manager
- Import Permission Sets using IFS Installer
- Importing Permission Sets using the Solution Manager
- LTU Permission Sets
- Permission Set Considerations
- Permission Set Grant Reports
- Permission Set Overview
- Permission Sets
- Predefined Permission Sets
- Projection
- SCIM
- Security Checkpoints
- Segregation of Duties Analysis
- Solution Manager
- System Privileges
- Transfer Permission sets
- User Authentication
- User Authorization
