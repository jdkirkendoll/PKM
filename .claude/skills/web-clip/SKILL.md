---
name: web-clip
description: Scrape a specific web page (and, with permission, up to 5 hops of same-domain links from it) and turn it into one or more vault notes, asking which note type(s) fit the content. Use when the user gives a URL to clip, import, or turn into notes, or runs /web-clip <url>.
---

# Web Clip

Turn a specific web page into vault notes. Unlike `/research` (which searches the web for a topic), this skill starts from a URL the user already has and scrapes outward from there.

## Getting the URL

- If invoked with a URL argument, use that.
- If invoked with no argument, ask for the URL before doing anything else.

## Scraping the seed page

Fetch the given URL first (this is depth 0 — the seed page). Read it before deciding anything else; every judgment call below depends on what's actually on the page.

## Deciding which note types fit

Based on the seed page's content, judge which of the vault's note types could plausibly hold it:

- **guide** — explains a concept, process, or how something works (matches `3-Resources/Guides/` guides).
- **glossary** — the page defines several distinct terms clearly enough to each get their own short entry (matches `3-Resources/Glossary/`).
- **resource** — reference material that isn't narrative (a spec, a list, a reference table).
- **area** — describes an ongoing domain of responsibility the user doesn't already have an Area for.
- **project** — describes something with a concrete end state/deliverable, and is not customer engagement work (that belongs in the separate PKM-CUST vault, not here).

Only offer the types that genuinely fit — don't present the full list by default. If just one type fits, ask to confirm that one rather than presenting a moot choice. Ask with the AskUserQuestion tool, allowing multiple selections (a page can justify both a guide and several glossary entries, for example).

## Following links for more context

Default to the seed page alone. Only fetch additional pages if you judge the seed page doesn't have enough to write the note type(s) chosen — e.g. it references detail that lives on another page you'd need to write an accurate note.

When that happens:
- **Ask before fetching**, every time you want to add a page beyond what's already been approved this run. Name the specific link and say why it's needed. Don't re-ask for a page you already got permission for.
- **Stay on the same domain** as the original URL (exact hostname match) — never follow a link to a different site or a different subdomain without treating that as leaving the site.
- **Never exceed 5 hops from the seed page.** The seed page is depth 0; a link found on it is depth 1; a link found on that page is depth 2; and so on through depth 5. If reaching depth 6 would be needed, say so and stop rather than asking to go further.
- If you're not sure a link is worth following, ask rather than guessing — a wrong guess wastes a fetch, and an unnecessary permission question costs nothing.

## Writing the notes

Match the frontmatter and body shape already used in this vault for each type:

- **guide**: `type: guide`, `topic`, `source: web`, `created`, `tags: [guide, ...]`. Body: `## Summary`, `## Details`, `## Sources`. Save to `0-Inbox/<Title>.md` — don't file it directly, per the normal inbox review flow.
- **glossary**: `type: glossary`, `term`, `source: web`, `created`, `tags: [glossary, ...]`, one file per term at `3-Resources/Glossary/<Term>.md`. Body: `## Summary` (with a `> [!note] Confidence: ...` callout if anything is inferred rather than confirmed on the page), `## Related`, `## Sources`. Glossary entries go straight to `3-Resources/Glossary/` — no inbox step, matching how `/bdr-glossary` files them.
- **resource** / **area** / **project**: use the frontmatter shape documented in `/format-note`, and save to `0-Inbox/<Title>.md` for the normal review flow rather than filing directly.

Cite the seed page and any additional pages actually used as sources in every note produced.

## When done

Report what was created (file paths per note), which pages were scraped (seed URL plus any additional ones followed and why), and remind the user that anything saved to `0-Inbox/` still needs `/format-note` or `/organize-inbox` to be filed. Don't commit — leave that to the user unless they explicitly ask.
