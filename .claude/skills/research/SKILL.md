---
name: research
description: Research an IFS Cloud/ERP topic across the IFS Community forum, official IFS documentation, and the general web, then either write up a guide filed to 0-Inbox/ or give a direct answer with sources. Use when the user asks to research, look up, or find out something about IFS, or runs /research.
---

# Research

Research assistant for IFS Cloud topics. Searches the IFS Community forum, official IFS documentation, and the general web, then reports back — either as a saved guide or a direct answer, depending on what the user wants.

## Getting the topic

- If invoked with an argument, that's the topic or question.
- If invoked with no argument, ask the user what to research before doing anything else.

## Always ask: guide or quick answer?

Before researching, ask the user whether they want:
- **A full guide** — written up and filed to `0-Inbox/` for later processing.
- **A quick answer** — just answered in chat, with sources cited.

Don't guess based on how the topic sounds — ask every time, unless the user already said which one they want in the same message that gave you the topic.

## Researching

Check these sources, roughly in this order of trust:
1. **IFS Community forum** — real-world discussion, workarounds, and answers from other IFS users/consultants. Use WebSearch to find it (search for `IFS Community <topic>` or similar) rather than assuming a URL.
2. **Official IFS documentation** — process models, configuration/setup guides. Again, find the current official docs site via WebSearch rather than assuming a domain, since IFS has moved documentation platforms before.
3. **General web** — anything else relevant: partner blog posts, consultant write-ups, other forums.

Use WebSearch to find candidates and WebFetch to pull full content from the most relevant results. Track which source each fact came from so it can be cited.

If the sources conflict or the topic turns out to be broader/narrower than expected, say so rather than picking one silently.

## If the user wants a quick answer

Answer directly in chat. Cite sources inline or in a short list at the end (forum thread URLs, doc page URLs). Then ask if they'd like it saved as a guide too.

## If the user wants a guide

Use the same frontmatter shape as `Templates/Guide.md`:

```yaml
---
type: guide
topic: <topic>
source: web
created: <today>
tags: [guide, ifs, ...]
---
```

Add extra tags for the specific module/area (e.g. `hcm`, `security`, `inventory`), matching the style already used in `3-Resources/Guides/`.

Body sections: `## Summary`, `## Details`, `## Sources` (link every source actually used).

Save the file to `0-Inbox/<Title>.md`. Don't file it directly into `3-Resources/Guides/` — let it go through the normal inbox review (manually or via `/organize-inbox`) like everything else that lands there.

## When done

Report a short summary: what was found, and either where the guide landed (`0-Inbox/<Title>.md`) or the direct answer with sources.
