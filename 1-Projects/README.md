# Projects

Active work with a defined end state and (usually) a deadline. Each project gets its own subfolder. Customer work is nested under a 3-letter customer code; internal/non-customer projects sit flat:

```
1-Projects/
  CIR/                          <- customer code (CIRCOR)
    CRIM006 - UKG Integration/
      CRIM006 - UKG Integration.md   <- main project note, use Templates/Project.md
      CRIM006 - Status Update Talking Points.md
  Website Redesign/             <- no customer, filed flat
    Website Redesign.md
    Research.md
    assets/
```

A project note's `customer` frontmatter field is the source of truth for which folder it belongs in — see `.claude/skills/organize-inbox/SKILL.md`. If a note's `customer` value doesn't have a matching folder here, create the folder and move the note into it.

When a project finishes, move its whole folder (including its customer folder, if now empty of other projects) into `4-Archive/`.
