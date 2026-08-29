---
type: guide
topic: IFS Connect & Connectivity
source: web
created: 2026-08-29
tags: [guide, ifs, integration]
---

# IFS Connect & Connectivity

An introduction to IFS Cloud's integration/messaging layer: how business logic inside IFS Cloud talks to external systems, devices, and other IFS databases without either side needing to know the details of the other.

## Summary

**[[3-Resources/Glossary/IFS Connect|IFS Connect]]** is IFS Cloud's integration broker: it converts messages between IFS Cloud's internal JSON format and external protocols (HTTP, mail, FTP/SFTP, JMS, REST, SOAP) using pluggable **[[3-Resources/Glossary/Transport Connector|Transport Connectors]]**, and decides where each message goes using **[[3-Resources/Glossary/Routing Rule|Routing Rules]]** and **[[3-Resources/Glossary/Routing Address|Routing Addresses]]** — so a business logic method never has to know which connector delivered or will deliver its message, and a new connector works with every existing integration automatically. Alongside it, **[[3-Resources/Glossary/IFS Connectivity|IFS Connectivity]]** is an older, separate asynchronous mechanism for moving messages between an Out Message Box and an In Message Box (same database, another database, or the file system) — still used for site-to-site replication and some legacy message-class-based integrations. Layered on top of both are specific integration use cases this vault's source docs cover in detail: e-invoicing (receiving inbound e-invoices and sending outbound CTC e-invoices) and external sales-tax calculation via Vertex or Avalara.

## Details

### IFS Connect fundamentals

IFS Connect runs inside a Connect Container alongside REST APIs and a SOAP Gateway, sitting between IFS Cloud's database and the outside world. Any [[3-Resources/Glossary/Transport Connector|Transport Connector]] can execute any Integration Projection Action/Function or PL/SQL method with an inbound message, and any business logic can use any connector to send an outbound message — the two sides are decoupled entirely by configuration. Ready-to-use connectors ship for Mail (POP3/IMAP/SMTP), HTTP/HTTPS, FTP/FTPS/SFTP, and JMS, and a development framework exists to build custom connectors.

### Setting up IFS Connect

Configuration lives under Solution Manager / Integration / IFS Connect / **Setup IFS Connect**, organized into configuration groups — each a set of named instances:

- **Servers** — the single instance of settings the Connect application itself runs on.
- **Readers** and **Senders** — per-instance configuration for each [[3-Resources/Glossary/Transport Connector|Transport Connector]] (e.g. a FILE_READER polling a directory, an HTTP_SENDER calling a remote URL).
- **[[3-Resources/Glossary/Envelope|Envelopes]]** — message-encapsulation formats available to the system.
- **[[3-Resources/Glossary/Transformer|Transformers]]** — Java or XSLT message converters.
- **Message Queues** — the queues used by background (asynchronous) processing.
- **Routing** — where [[3-Resources/Glossary/Simplified Routing|Simplified Routing]] is enabled or disabled per direction.
- **Print Task Templates** — configuration IFS Connect uses to create new [[3-Resources/Glossary/Application Message|Application Messages]] for Print Agent jobs.

Envelope and transformer files are uploaded/downloaded as binary parameters; an unmodified one supplied by IFS has its **Customized** flag unchecked so it can be safely overridden by a future upgrade, but the flag is set automatically the moment a customer edits the value, protecting that edit from being silently overwritten. Whole configuration areas or single instances can be exported to XML and re-imported in one of three modes: **Add** (only inserts instances that don't already exist), **Merge** (adds new instances and updates existing ones), or **Replace** (the file becomes the new configuration — anything not in it, aside from read-only static instances, is removed). Imports are staged for review before being saved.

### IFS Connect properties

Beyond the configuration UI, a large set of `ifs.*` and `fnd.*` server properties tune IFS Connect's runtime behavior — for example `ifs.httpClientConnectTimeout`/`ifs.httpClientReadTimeout` for HTTP client timeouts, `ifs.sftpClientTimeout` for SFTP sessions, `ifs.compressionLevel` for response compression, `ifs.includeClientCredentials` for how OAuth client id/secret are sent, and `fnd.restrictedQueueMaxProcessTime`/`fnd.timerDelayOnError.*` for background-job retry and backoff behavior. These are viewed and edited via IFS Connect → JSF properties → IFS Properties (or an administrator's export), and changing them can affect live integrations, so they're generally a task for an administrator or partner rather than trial-and-error.

### Routing: rules, addresses, and conditions

A [[3-Resources/Glossary/Routing Rule|Routing Rule]] identifies a message — by its format and, optionally, its content or the location it arrived from — and sends it to one or more [[3-Resources/Glossary/Routing Address|Routing Addresses]]. Inbound rules classify a message by its **Route From** value: `SOAP_IFS` and `SOAP_SIMPLE` for known SOAP envelopes carrying routing parameters (`fndcn:Type`, `fndcn:Function`, `fndcn:Sender`, `fndcn:Receiver`) in the header, `UNKNOWN_XML` for XML without a recognized envelope, and `NONE_XML` for non-XML text or binary content (which supports only simple string search, not structured content routing). Outbound rules instead route from `APPLICATION_MESSAGE` (ordinary business-logic messages, matched on `MESSAGE_TYPE`, `MESSAGE_FUNCTION`, `SENDER`, `RECEIVER`) or `REPORT` (Report Designer output, matched on `MESSAGE_TYPE` — one of the logical printers `SEND_XML_TO_CONNECT`, `SEND_FULL_XML_TO_CONNECT`, `SEND_PDF_TO_CONNECT` — plus `MESSAGE_FUNCTION` as the report's unique id, or `SENDER` as the report's result key).

Each [[3-Resources/Glossary/Content Based Condition|Content Based Condition]] on a rule tests one field against a value; when more than one rule could match a message, the rule with the most matching conditions wins, and ties are broken by creation order — which is why it's best practice to make conditions specific enough that ties never matter. Inbound rules can additionally use location-based conditions (e.g. the File Reader instance and filename, or the Mail Reader instance and subject) when content alone can't uniquely identify a message.

A [[3-Resources/Glossary/Routing Address|Routing Address]] names the [[3-Resources/Glossary/Transport Connector|Transport Connector]] to deliver to (REST, PL/SQL, Projection, File, Ftp, Http, Mail, Sftp, or a custom sender) plus format settings — [[3-Resources/Glossary/Envelope|Envelope]], encoding, compression, and any [[3-Resources/Glossary/Transformer|Transformers]] to run on the way out (and Response Transformers for the reply). Multiple addresses attached to one rule can be strung into an **[[3-Resources/Glossary/Address Chain|Address Chain]]**, numbered by Chain Link No, so a single message is processed by each address in sequence — e.g. call a Projection method, then mail the result, then also archive it to a file. For high-volume routing where evaluating every rule's conditions is too slow, **[[3-Resources/Glossary/Simplified Routing|Simplified Routing]]** can be enabled per direction against a single attribute (`MESSAGE_TYPE`, `MESSAGE_FUNCTION`, `SENDER`, or `RECEIVER`) for a fast in-memory lookup, falling back to standard routing when no cached rule matches.

### Technical details of message flow

Inside the Connect Container, a Message Router sits between Connect Readers (which poll or receive inbound traffic and place it on a queue), a Batch Processor (which executes queued messages), Connect Senders, and the SOAP Gateway/REST API surface. Work handled asynchronously by the Batch Processor is tracked as an [[3-Resources/Glossary/Application Message|Application Message]]: a PL/SQL Access Provider call inserts a record into `FNDCN_APPLICATION_MESSAGE_TAB` in state `Released`, a database trigger fires a JMS message stored in `BATCH_PROC_QUEUE_TAB`, and the Batch Processor's Message Driven Bean processes it — ending in `Failed` (with an error message saved on the record) if something goes wrong, or completing normally otherwise. If the registered receiving method doesn't exist, a message can get stuck in state `Transferred` with no automatic way to detect it beyond checking Runtime Monitoring → Background Jobs. These states and details are inspected via the Solution Manager **Application Messages** and **Batch Processor Queue** pages. For performance, the transfer process (`Out_Message_Util_API.Transfer_Data__`) and the processes executing receiving methods can be moved out of the shared default batch queue into dedicated queues if contention becomes a problem.

### IFS Connectivity: a parallel asynchronous system

[[3-Resources/Glossary/IFS Connectivity|IFS Connectivity]] predates and sits alongside IFS Connect: it moves messages asynchronously from an Out Message Box to an In Message Box, either in the same database, in a different database over a DB link, or via the file system / a third-party tool. Two background processes drive it — `Connectivity_SYS.Process_Outbox__` and `Connectivity_SYS.Process_Inbox__` — polling for messages in state `Released`/`Posted` respectively. Because several messages can be processed in parallel, message order on arrival is guaranteed but processing order is not; dependent messages (e.g. a new order followed by a change to that order) must be routed to a queue that allows only one process at a time, or the change can fail because the original isn't committed yet. Data is stored in header/line table pairs — `Out_Message_TAB`/`Out_Message_Line_TAB` and `In_Message_TAB`/`In_Message_Line_TAB` — with columns like `CLASS_ID`, `SENDER`, `RECEIVER`, and `VERSION` available for the receiving application to use.

### Setting up IFS Connectivity

Configuration lives under Solution Manager / Integration / Connectivity / **Setup Connectivity**:

- **[[3-Resources/Glossary/Installation Site|Installation Site]]** — the sites Connectivity can transfer to, linked by an optional DB Link (omitted for same-database transfer), with a Timezone Difference and a flag marking the local site.
- **[[3-Resources/Glossary/Message Class|Message Class]]** — which message types can be sent and/or received, and which method (Action) handles a received one.
- **Message Receiver** — the receiver information needed when transmission uses SQL*Net/SQL rather than files or a third-party tool.
- **Message Media** — the transmission media (MHS, EDI, REPLICATION, CONNECT, INET_TRANS, FINCON, E-INVOICE, RCM_CONNECT) a third-party tool like Amtrix might use; not consumed by Connectivity itself.

Seven system parameters control the background services: `Connectivity available` (a global kill switch for `Connectivity_SYS` public methods), `Connectivity Inbox/Outbox process available` (starts/stops the two background processes), `Connectivity Inbox/Outbox process restart interval`, and cleanup age limits for accepted messages in the Inbox and Outbox.

### Connectivity Inbox and Outbox

The **[[3-Resources/Glossary/Connectivity Inbox|Connectivity Inbox]]** and **[[3-Resources/Glossary/Connectivity Outbox|Connectivity Outbox]]** are the day-to-day administration screens: messages can be explored by Class ID, State, Media Code (Outbox only), or Today's activity; exported to XML and re-imported; and their full detail — including individual message lines — inspected. A message stuck in an error state can usually be recovered without resending from the source: `Incomplete` messages are **Reactivated** back to `Posted`/`Released`, while `Transferred` (Inbox) or `Transferred`/`Rejected` (Outbox) messages are **Reprocessed** back to the same starting state so the transfer runs again.

### Troubleshooting IFS Connect

IFS Connect's logging framework organizes diagnostic output by **Level** (error, warning, info, trace, debug — each less detailed than the last) and **Category** (eleven predefined areas such as `database`, `integration`, `batchprocessor`, `gateway`, `security`, and `timings`), written to a named **Logger** and directed to a **Handler** — either a console handler or a file handler (`textfile` writes plain text, downloadable from the SOAP gateway endpoint at `.../int/soapgateway?log=true`). A global logging level can be set and then overridden per category, but only to something *more* detailed, never less — an invalid override is silently ignored rather than erroring. These are configured on the Solution Manager **Logging Properties** page under IFS Connect → Properties. Separately, an [[3-Resources/Glossary/Application Message|Application Message]] that has failed or is retrying shows its error directly on the Application Messages list, and the underlying JMS message can be inspected on the **Batch Processor Queue** page (cluster name, node id, queue, delivery delay, retry count). Debugging should be switched off again after use, since it measurably slows the system.

### E-invoicing: receiving and sending CTC invoices

For **receiving** inbound e-invoices, the pattern is the same for each supported format: create a [[3-Resources/Glossary/Routing Address|Routing Address]] with Transport Connector `Plsql` pointing at the format's receiving method (e.g. `Receive_Einvoice_Util_API.Receive_Einvoice_Message` for IFS E-invoice 2.0, or `Ubl_Invoice_Exchange_Util_API.Receive_Ubl_Invoice` for IFS UBL Invoice/UBL Invoice 2.1 and their credit-note counterparts), then create an inbound [[3-Resources/Glossary/Routing Rule|Routing Rule]] on the IN1 queue routing from `UNKNOWN_XML`, with a [[3-Resources/Glossary/Content Based Condition|Content Based Condition]] that looks for a distinguishing XML tag (`IFSFinvoice`, or `Invoice`/`CreditNote` plus a matching `UBLVersionID`) before pointing it at the new address.

For **sending** outbound CTC (Continuous Transaction Controls) e-invoices, the relevant basic data is **[[3-Resources/Glossary/E-invoice Processing Type|E-invoice Processing Type]]**, which selects one of three E-invoice Standards (IFS E-invoice 2.0, IFS UBL Invoice, or UBL Invoice 2.1) and a Service Provider. An outbound Routing Rule routes from `APPLICATION_MESSAGE` with `MESSAGE_FUNCTION` equal to `SEND_EINVOICE_MESSAGE` or `SEND_UBL_EINVOICE_MESSAGE`; when invoices for different customers or service providers need to land on different endpoints, additional conditions on `RECEIVER` (or `SENDER`, evaluated against the sending company) select the right rule, with the most-specific rule winning ties as described above. A separate inbound rule (Route From `SOAP_IFS`, matching `fndcn:Function` equals `RECEIVE_EINVOICE_RESPONSE`) receives the provider's response back, typically via a Routing Address using the Projection connector with `MODEL_BASED_XML_TO_JSON` and `TO_MIXED_CASE` transformers ahead of `EinvoiceResponseService.ReceiveEinvoiceResponse`.

### External Tax Integration

**[[3-Resources/Glossary/External Tax Integration|External Tax Integration]]** connects IFS Cloud to third-party tax engines — Vertex Sales Tax (Vertex O Series), Avalara Sales Tax, and AvaTax Brazil — for markets like the US, Canada, and Brazil where tax codes and rates are too numerous and volatile for IFS Cloud's own Accounting Rules tax tables to keep current by hand. Rather than an administrator updating rates manually, IFS Cloud calls out to the external service at the moment a document (e.g. a customer order) needs a tax calculation, and the service returns both the applicable rate and the calculated amount; Vertex updates instantly while Avalara updates monthly. The integration touches Application Services, Accounting Rules, Enterprise basic data, and Customer Order.

## Related
- [[2-Areas/Technical|Technical]]

## Sources
- IFS Cloud Technical Documentation (docs.ifs.com), saved as PDF
- IFS Connect
- IFS Connect Properties
- IFS Connect Troubleshooting
- IFS Connect for Receiving E-invoices
- IFS Connect for Sending CTC E-invoices
- IFS Connectivity Inbox
- IFS Connectivity Outbox
- IFS Connectivity Technical Details
- Setup IFS Connect
- Setup IFS Connectivity
- Routing Rules and Addresses
- External Tax Integration
