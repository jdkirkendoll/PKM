---
type: guide
topic: IFS Service Layer XML Serialization Format
source: local-pdf
created: 2026-08-30
tags: [guide, ifs, technical, integration]
---

# IFS Service Layer XML Serialization Format

## Summary

Extended Server records (instances of `ifs.fnd.record.FndAbstractRecord` and its subclasses) can be serialized to XML in two distinct formats: an **external** format used for talking to outside systems (e.g. via IFS SOAP Gateway), and a richer **internal** format used inside Extended Server itself, e.g. for data export/import. Both formats rely on the [[3-Resources/Glossary/Fnd Data Types (Java Server Framework API)|Fnd data types]] to represent each attribute's value as a string.

## Details

### External format

The top-level XML tag name is the record type (e.g. `PERSON_INFO`); nested tags represent simple attributes (e.g. `NAME`) or compound/aggregate attributes containing a nested record (e.g. `ISO_LANGUAGE`). Tag names are the upper-cased attribute/record name. A null value serializes as the standard `xsi:nil` attribute. Query conditions and attributes marked non-existent are ignored entirely by serialization.

Each Fnd attribute type serializes to a specific string shape:

| Attribute Type | Java Class | Example Value |
|---|---|---|
| Alpha | FndAlpha | `ABC` |
| Text | FndText | `ÅÖÄ` |
| Binary | FndBinary | (Base64-encoded) |
| Boolean | FndBoolean | `1` |
| Timestamp | FndTimestamp | `2003-08-08T09:35:25` |
| Date | FndDate | `2003-08-08` |
| Time | FndTime | `09:35:25` |
| Number | FndNumber | `156.234` |
| Integer | FndInteger | `10001` |
| Enum | FndEnumeration | `Active` |

### Internal format

Adds information the external format omits: record state (`queried`, `new`, `modified`, `removed`), storage-layer attributes (`OBJ_ID`, `OBJ_VERSION`), and per-attribute type/state metadata (`ifsrecord:datatype`, `ifsrecord:dirty` for a changed attribute, `ifsrecord:exclude` for one excluded from the query).

## Sources
- Service Layer XML Serialization Format - Technical Documentation For IFS Cloud (docs.ifs.com), saved as PDF
