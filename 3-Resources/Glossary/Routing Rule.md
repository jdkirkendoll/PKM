---
type: glossary
term: Routing Rule
source: web
created: 2026-08-29
tags: [glossary, ifs, integration]
---

# Routing Rule

## Summary

A Routing Rule tells IFS Connect how to recognize a message and where to send it. Inbound rules classify a message by its **Route From** value — `SOAP_IFS`/`SOAP_SIMPLE` for known SOAP envelopes carrying routing parameters in the header, `UNKNOWN_XML` for unrecognized XML, or `NONE_XML` for non-XML text/binary — optionally narrowed with Content Based Conditions or location-based conditions (e.g. file name, mail subject). Outbound rules route from `APPLICATION_MESSAGE` (ordinary business messages, matched on `MESSAGE_TYPE`/`MESSAGE_FUNCTION`/`SENDER`/`RECEIVER`) or `REPORT` (Report Designer output). When several rules could match the same message, the one with the most matching conditions is picked, with ties broken by creation order — which is why it's best practice to add enough conditions that ties never actually arise.

## Related
- [[3-Resources/Guides/IFS Connect & Connectivity|IFS Connect & Connectivity (Guide)]]
- [[3-Resources/Glossary/Content Based Condition|Content Based Condition]]
- [[3-Resources/Glossary/Routing Address|Routing Address]]
- [[3-Resources/Glossary/Simplified Routing|Simplified Routing]]
- [[3-Resources/Glossary/IFS Connect|IFS Connect]]

## Sources
- Routing Rules and Addresses
- IFS Connect for Receiving E-invoices
- IFS Connect for Sending CTC E-invoices
