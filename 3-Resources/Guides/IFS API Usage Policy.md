---
type: guide
topic: IFS Cloud API Usage Product Policy
source: notes
created: 2026-08-27
tags: [guide, ifs, api, technical, policy]
---

# API Usage – Product Policy

IFS Cloud. Updated: 24 March 2023. Valid for: IFS Cloud 21R1 (and newer). Approver: RnD Senior Leadership Team.

## Introduction

The functionality and data within IFS Cloud is available for IFS customers to use through various user interfaces as well as through Application Programming Interfaces (APIs). The latter are, for example, used for extending on the outside, integration, add-on development, and reporting/analytics. This document outlines IFS policy for customers' use of these APIs. The purpose is to outline general principles and facilitate understanding.

Please note that this policy cannot exclusively be relied on to determine what use of APIs is permitted, as terms set out in license, maintenance and support agreements can override what is expressed in this policy.

## General

Functionality and data within IFS Cloud is available for IFS customers to use through Application Programming Interfaces (APIs). There are multiple types of APIs available, each of which can be accessed in different ways for the purpose of integration, extending on the outside, reporting/analytics and other use cases.

There are different API classes which indicate the level of documentation, guidance and advice IFS intends to provide for an API, both at present and as the software evolves in future updates and releases. IFS doesn't change APIs unnecessarily, and for premium APIs (see API classes below) makes an extra effort to maintain compatibility and provide guidance when changes are needed.

## Allowed Usage

IFS customers are allowed to use the API types and classes below provided all usage is in compliance with licensing requirements. Unless otherwise explicitly agreed, IFS takes no responsibility for non-IFS software or other artifacts developed using the APIs.

It is the responsibility of the customer to make sure APIs are used appropriately, and that the user of those APIs has enough knowledge not to cause problems — such as license violations, process blockages, or performance issues — that may result from inappropriate use.

Support for how to use APIs is not covered by most IFS support agreements. For example, a customer will not be able to receive help from the IFS support centre for questions about how to use a particular API function. Customers who want help understanding correct API usage may purchase such services separately.

## API Types and Access

Functionality and data is made available through different types of APIs (for different purposes), each of which should only be accessed in the ways described below.

| API Type | Access Via | Typical Usage(s) |
| --- | --- | --- |
| oData APIs (projections) | oData v4 endpoint exposing entity sets and actions. Any HTTPS client. IFS Connect. | Extending on the outside (add-on development, custom UI development, automating with RPA, …); system integration; automation (using Workflow Designer) within IFS Cloud. |
| oData APIs (entities)* | oData v4 endpoint exposing a single entity set with CRUD actions. Trusted HTTPS client that is part of a trusted system**. Not for direct access by end users or from end-user devices. IFS Cloud configuration tools (e.g. Workflow Designer). | Extending on the outside; system integration; master data management. |
| Information Sources (BI access views) | Database views. Indirectly via APIs. Database logon. | Reporting, transfer data to data warehouse. |
| Events | Outbound messages. IFS Connect. | Send notifications; system integration; initiate automation within IFS Cloud. |

\* Since the use of data entities is more restricted (e.g. trusted systems only) and comes with a lower API class than projections, the recommendation is to always use projections as a first preference, and data entities only when there is no projection that supports the specific scenario.

\*\* A software system that has a governed, validated, and secure integration to IFS Cloud.

## API Classes and Expectations

The API class indicates the level of responsibility IFS intends to take for an API over time. The following API classes are defined:

| API Class | Description / Expectation |
| --- | --- |
| Premium | Visible in API explorer. Technical specifications (OpenAPI v3, v2) and technical documentation provided. IFS intends to provide comprehensive documentation on appropriate use, strives to maintain compatibility across releases, and provides early warning and guidance for changes such as moving to a new API version. New and old versions are kept in parallel for at least one release when breaking changes are needed. |
| Standard | Visible in API explorer. Technical specifications (OpenAPI v3, v2) and technical documentation provided. IFS intends to provide a list of breaking API changes alongside service and release updates. |
| StandardEntity | Visible in API explorer but requires activation by a system administrator before use. Technical specifications (OpenAPI v3, v2) and technical documentation provided. Only allowed usage is for configuration tools within IFS Cloud and system-to-system integration with other trusted system(s). IFS intends to provide a list of breaking API changes alongside service and release updates. Defects reported are assigned priority 3 and addressed in a future release update. The customer is responsible for consequences of inappropriate use and must ensure individuals using StandardEntity class APIs have sufficient understanding of IFS Cloud to use them appropriately. |

For all API classes, IFS's policy is to not make breaking changes to APIs in service updates. Exceptions (e.g. a breaking change critical to fixing a security vulnerability) are documented with the release information for that service update. Breaking API changes in a release are documented at the point of Early Access (EA).

These expectations apply only to APIs in the core layer of the Layered Application Architecture (LAA) — APIs in other layers, and core-layer APIs that have been customized or configured, are the full responsibility of the customer.

An API, regardless of class, can also be marked **Deprecated**, meaning it is planned for removal in a future release; customers are advised to switch to a different API.

## Related
- [[2-Areas/Technical|Technical]]
