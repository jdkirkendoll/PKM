---
type: glossary
term: Fnd Data Types (Java Server Framework API)
source: local-pdf
created: 2026-08-30
tags: [glossary, ifs, technical, api]
---

# Fnd Data Types (Java Server Framework API)

## Summary

> [!note] Internal use only
> These classes are documented by IFS as "for internal use only" — Java Server Framework internals, not something a functional consultant configures directly. Captured here because they explain what's actually behind each attribute type referenced elsewhere (e.g. [[3-Resources/Guides/IFS Service Layer XML Serialization Format|the XML serialization format]]).

Every attribute on an Extended Server record (`ifs.fnd.record.FndAbstractRecord`) is represented internally by one of a family of `Fnd*` Java classes, all ultimately extending the abstract `ifs.fnd.record.FndAttribute` base class. Each type shares a common set of methods for getting/setting its value, cloning, comparing, and building query conditions (`createEqualCondition`, `createGreaterThanCondition`, `createBetweenCondition`, etc.) — the type-specific classes mainly differ in what native value they wrap and which condition-builder overloads make sense for it.

## Details

| Class | Extends | Represents |
|---|---|---|
| `FndAlpha` | `FndAbstractString` | A short, fixed-limit string attribute (e.g. codes/IDs). |
| `FndText` | `FndAbstractString` | A longer free-form text attribute. |
| `FndBinary` | `FndAttribute` (direct) | Binary/BLOB data, serialized as Base64 in XML. |
| `FndBoolean` | `FndAttribute` (direct) | A true/false attribute, serialized as `1`/absent. |
| `FndDate` | `FndAbstractDate` | A calendar date (`YYYY-MM-DD`). |
| `FndTime` | `FndAbstractDate` | A time of day (`HH:MM:SS`). |
| `FndTimestamp` | `FndAbstractDate` | A combined date+time value (ISO 8601). |
| `FndInteger` | `FndAbstractNumber` | A whole-number attribute. |
| `FndNumber` | `FndAbstractNumber` | A decimal/float number attribute. |
| `FndEnumeration` | `FndAbstractText` | An enumerated value (a fixed set of named states, e.g. `Active`). |

`FndAlpha` also has a direct known subclass, `FndGuid`, used for globally unique identifiers.

## Related
- [[3-Resources/Guides/IFS Service Layer XML Serialization Format|IFS Service Layer XML Serialization Format]]

## Sources
- FndAlpha, FndBinary, FndBoolean, FndDate, FndEnumeration, FndInteger, FndNumber, FndText, FndTime, FndTimestamp (IFS Java Server Framework API documentation, for internal use only) — docs.ifs.com, saved as PDF
