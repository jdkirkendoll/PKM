---
type: guide
topic: Human Capital Management 101
source: web
created: 2026-09-02
tags: [guide, ifs, hcm]
---

# Human Capital Management 101

IFS Cloud Human Capital Management (HCM) covers everything a company needs to administer, schedule, pay, develop, and staff its workforce — from the organization chart an employee sits in, through the hours they work and the pay they receive, to how they're recruited, trained, and developed over their career. Read this before working through the [[3-Resources/BDR/Human Capital Management|Human Capital Management BDR]] table row by row: HCM is one of the larger functional areas in IFS Cloud, and its basic data breaks into over a dozen sub-areas that build on each other in a fairly specific order rather than forming one single hierarchy or a handful of independent toolkits.

## Summary

HCM's basic data starts with two foundational layers everything else depends on: **Organisation Administration** (the organization/position structure, job grades, and company-level property codes an employee is placed into) and **Employee Administration** (the employee master record itself — numbering, access rules, categories, and personal/employment data). On top of that sits the machinery for tracking time and paying people: **Administer Schedules and Rules** and **Time and Attendance Reporting** define wage codes, shifts, and clocking devices; **Payroll** consumes that time data (plus its own data-preparation and calculation setup) to actually pay employees; **Expense Administration** and **Shop Floor Employee Reporting** are two more specialized ways time and cost get captured (travel/expense claims, and production-floor operation reporting). A separate cluster covers people rather than pay: **Benefits Administration**, **Human Resource Planning**, **Recruitment**, **Employee Development**, and **Training Administration** together plan for, source, and grow the workforce. Finally, **Project Reporting** basic data — largely shared with IFS Financials/Projects — governs how an employee's time and cost flow into project cost and customer invoicing once it's captured. Confidence in the source material varies sharply across this guide: Organisation Administration, Employee Administration, and Schedules and Rules are backed by fairly detailed local documentation, while much of Payroll, Recruitment, Benefits Administration, Human Resource Planning, and Shop Floor Employee Reporting rests on inferred, moderate-confidence summaries — treat those sections as a reasonable orientation, not a precise specification.

## Details

### Organisation Administration: the structural foundation

Before an employee can be entered anywhere, the organization they belong to has to exist:

- **[[3-Resources/Glossary/Define Organisation Unit Levels|Organisation Unit Levels]]** set the shape of the org tree (e.g. division, department, section) before individual **[[3-Resources/Glossary/Define Organisation Units|Organisation Units]]** — the actual nodes employees are assigned to, which also carry cost/expense posting information and access-control scope — are created under it.
- **[[3-Resources/Glossary/Define Positions|Positions]]** form a parallel chain-of-authority structure tied to the organization structure by a shared structure ID; employees are assigned to positions, not just units, to determine reporting lines and access.
- **[[3-Resources/Glossary/Define Position Access|Position Access]]** grants access at the position level, refined by **[[3-Resources/Glossary/Define Position Access Authority Levels|Position Access Authority Levels]]** (how far down the hierarchy an access grant reaches, and how delegation works).
- **[[3-Resources/Glossary/Define Job Grades|Job Grades]]** classify jobs into a ranked structure that can carry a **[[3-Resources/Glossary/Define Job Grade Salary Ranges|Job Grade Salary Range]]** (min/mid/max pay band) — job grades are also reused later in Human Resource Planning.
- **[[3-Resources/Glossary/Register Company Offices|Company Offices]]** are registered and then **[[3-Resources/Glossary/Link Company Office to Company|linked to a company]]** so they're available elsewhere in the org structure.
- **[[3-Resources/Glossary/Define Property Codes for Company, Office, Position and Job|Property Codes for Company, Office, Position and Job]]** extend the standard data model with configurable fields and behavior flags at each of those levels, each optionally constrained to a **[[3-Resources/Glossary/Define List of values for property codes|List of Values]]** and given a **[[3-Resources/Glossary/Register translation to property code|translation]]** for multi-language display.

### Employee Administration: the employee master record

With the organization in place, Employee Administration configures how the employee record itself behaves. **[[3-Resources/Glossary/Set up Automatic generation of Employee Number|Automatic generation of Employee Number]]** and **[[3-Resources/Glossary/Configure Wizard Steps|Configure Wizard Steps]]** (the guided New Employment/Terminate Employment process) set up the mechanics of registering and removing employees, supported by **[[3-Resources/Glossary/Enter Path to MS Word templates|MS Word template paths]]** for generating offer letters and contracts.

Access to employee data is layered and deliberately restrictive — each level below is granted separately:

- **[[3-Resources/Glossary/Give User Access to all Employees|Access to all employees]]**
- **[[3-Resources/Glossary/Give User Access to selected Employees in own company|Selected employees in one's own company]]**
- **[[3-Resources/Glossary/Give User Access to selected Employees in other companies|Selected employees in other companies]]**
- **[[3-Resources/Glossary/Give User Access to Groups of Former Employees|Groups of former employees]]**, itself built on **[[3-Resources/Glossary/Enter Former Employee Groups|Former Employee Groups]]**
- **[[3-Resources/Glossary/Give User Access to Protected Persons|Protected Persons]]** — employees whose personal data is hidden even from an otherwise-authorized supervisor
- **[[3-Resources/Glossary/Give user Access to own master data|Self-access to one's own master data]]** and **[[3-Resources/Glossary/Define Rules for Self Service|Rules for Self Service]]**, controlling what an employee can see or change about themselves

The employee record can also be extended with **[[3-Resources/Glossary/Define Employee Free fields used in Employee Files Info 1|Free Fields]]** and **[[3-Resources/Glossary/Define Employee Properties used in Employee Files Info 2|Property Codes]]**, each optionally restricted to a **[[3-Resources/Glossary/Define List of values for Free Fields and Property Codes|list of values]]** and given a **[[3-Resources/Glossary/Enter Translation to Free Fields and Property Codes|translation]]** — the same pattern used for company-level property codes above.

A long list of classification codes rounds out the employee record:

- **[[3-Resources/Glossary/Enter Personal Document Types|Personal Document Types]]** (passports, visas, licences)
- **[[3-Resources/Glossary/Enter Relationship Types|Relationship Types]]** (for dependents/emergency contacts)
- **[[3-Resources/Glossary/Enter Assignment Types|Assignment Types]]** (why an employee holds a position)
- **[[3-Resources/Glossary/Enter Employment Types|Employment Types]]** (permanent, temporary, seasonal)
- **[[3-Resources/Glossary/Enter Reasons for Leaving|Reasons for Leaving]]**
- **[[3-Resources/Glossary/Enter Employee Categories|Employee Categories]]** (a non-date-effective grouping that also drives financial posting control)
- **[[3-Resources/Glossary/Enter Evacuation Areas|Evacuation Areas]]**
- **[[3-Resources/Glossary/Enter Employee Status Code|Employee Status Codes]]** (Preliminary, Active, Terminated)
- **[[3-Resources/Glossary/Enter Employment Reduction Types|Employment Reduction Types]]** (parental leave, sabbatical, etc.)
- **[[3-Resources/Glossary/Enter Employment Agreement|Employment Agreements]]**
- **[[3-Resources/Glossary/Enter Event Diary|Event Diary]]** entry types
- **[[3-Resources/Glossary/Enter Additional Info Types|Additional Info Types]]**
- **[[3-Resources/Glossary/Enter Generic Lists of Values|Generic Lists of Values]]** reused across several fields

Compensation-adjacent setup lives here too:

- **[[3-Resources/Glossary/Enter Pay Types|Pay Types]]** for additional/bonus pay, scheduled via **[[3-Resources/Glossary/Enter Periods of Additional Pay Types|Periods of Additional Pay Types]]**
- **[[3-Resources/Glossary/Define Periods and Displayed rates|Periods and Displayed Rates]]** for how a salary figure is shown across pay bases
- **[[3-Resources/Glossary/Define format for salary updates|Format for salary updates]]** (percentage vs. fixed amount) for mass salary changes
- **[[3-Resources/Glossary/Define Reasons for Salary Changes|Reasons for Salary Changes]]** for audit trail

### Administer Schedules and Rules: wage codes and work-time rules

This layer defines the vocabulary that Time and Attendance and Payroll both build on:

- A **[[3-Resources/Glossary/Enter Wage Class|Wage Class]]** groups employees who share the same wage codes, day types, and work-hour rules (typically a pay basis or union agreement).
- A **[[3-Resources/Glossary/Enter Wage Code|Wage Code]]** classifies every type of hour or absence an employee can report — normal time, overtime, specific absence types — and is what ultimately drives what gets transferred to Payroll.
- **[[3-Resources/Glossary/Enter Absence Wage Code Parameters|Absence Wage Code Parameters]]** control how an absence-type wage code participates in overtime and balance calculations.
- **[[3-Resources/Glossary/Translate Wage Code for OT cash to OT comp|Translating overtime cash to compensatory time]]** controls how overtime hours convert between cash and time-off, while **[[3-Resources/Glossary/Specify Wage code for sequential OT|specifying wage codes for sequential OT]]** splits a day's accumulated overtime hours across a series of overtime wage codes as duration thresholds are crossed (e.g. the first two hours to one code, the next four to another).
- **[[3-Resources/Glossary/Enter Absence Category|Absence Category]]** groups related absence wage codes for reporting.
- **[[3-Resources/Glossary/Enter Selection Group|Selection Group]]** tags employees for schedules-and-rules processing and Employee Selection Templates.
- Scheduling itself is built from **[[3-Resources/Glossary/Enter Shift|Shift]]** (the allowed starting points of a cycle schedule), **[[3-Resources/Glossary/Enter Week Type|Week Type]]** (the working-time pattern a given week represents), **[[3-Resources/Glossary/Enter Worktime Compliance Rule|Worktime Compliance Rules]]** (checking reported/scheduled time against legal or agreed limits), and **[[3-Resources/Glossary/Enter Worktime Reconciliation Time Period|Worktime Reconciliation Time Period]]** (the period a time balance is checked and adjusted against).

### Time and Attendance Reporting: capturing worked time

Where Schedules and Rules defines the vocabulary, this sub-area configures how raw clockings become time-card data:

- **[[3-Resources/Glossary/Define 1-10 Period per Minute|1/10 Period per Minute]]** sets the conversion between clocked minutes and the decimal-period units the rest of Time and Attendance expects.
- **[[3-Resources/Glossary/Define Test & Error Messages|Test & Error Messages]]** customizes the notes shown when a clocking triggers a validation issue.
- Physical clocking hardware is registered as **[[3-Resources/Glossary/Register Time Clock Types|Time Clock Types]]**, with **[[3-Resources/Glossary/Register Time Clock Type Details|Time Clock Type Details]]** and **[[3-Resources/Glossary/Configure Time Clock Type Details Items|Time Clock Type Details Items]]** mapping each device type's specific fields and function keys into the data model.
- A **[[3-Resources/Glossary/Connect Card ID to Employee|Card ID]]** links a physical badge to an employee, and a **[[3-Resources/Glossary/Link User to Time Clock Version|user is linked to a time clock version]]** so their clockings use the right rule set.
- **[[3-Resources/Glossary/Define User Card Parameters|User Card Parameters]]** define per-card behavior such as acceptable clocking windows.

### Payroll: turning time and pay data into pay

Payroll's own BDR is split into three phases that run in sequence.

**Data Preparation** sets up the reference data payroll calculation needs:

- **[[3-Resources/Glossary/Create Wage Code Parameters|Wage Code Parameters]]** — the payroll-side calculation rules for each wage code, distinct from — but analogous to — the Time and Attendance wage codes above
- **[[3-Resources/Glossary/Create Seniority Parameters|Seniority Parameters]]**
- **[[3-Resources/Glossary/Enter Tax Office Details|Tax Office Details]]** and **[[3-Resources/Glossary/Enter Bank Details|Bank Details]]** — both prerequisites for statutory reporting and payment routing
- a **[[3-Resources/Glossary/Select File Format for Payments|Payment File Format]]**
- **[[3-Resources/Glossary/Create Leaving Scenarios|Leaving Scenarios]]** (standard final-pay steps tied to a leaving reason)
- **[[3-Resources/Glossary/Create Loan and Contribution Parameters|Loan and Contribution Parameters]]** and the **[[3-Resources/Glossary/Create Institutions|Institutions]]** (banks, pension funds, unions) they're paid to
- the **[[3-Resources/Glossary/Map T&A and Payroll Wage Codes|mapping between Time & Attendance and Payroll wage codes]]**
- **[[3-Resources/Glossary/Create Absence Parameters|Absence Parameters]]** (how absence categories are treated for pay)
- **[[3-Resources/Glossary/Create Illness IDs|Illness IDs]]** for tracking sickness spells

**Payroll Calculation** then sets up:

- **[[3-Resources/Glossary/Create Employee Matching Templates|Employee Matching Templates]]** (dynamic employee groups for running payroll or reports)
- a **[[3-Resources/Glossary/Create Payroll List Template|Payroll List Template]]**
- the payroll-specific **[[3-Resources/Glossary/Create Wage Codes|Wage Codes]]** (pay elements like basic pay, overtime premiums, allowances)
- **[[3-Resources/Glossary/Create Wage Code Calculation Groups|Wage Code Calculation Groups]]**
- statutory/union **[[3-Resources/Glossary/Create Regulations|Regulations]]**
- **[[3-Resources/Glossary/Create Payroll Periods|Payroll Periods]]**

Finally, **Booking Payroll** posts the results:

- a **[[3-Resources/Glossary/Create Payroll Wage Class|Payroll Wage Class]]** groups employees for posting purposes and is **[[3-Resources/Glossary/Link Payroll Wage Class to Payroll wage codes|linked to its wage codes]]**
- **[[3-Resources/Glossary/Create Payroll Postings|Payroll Postings]]** define the actual debit/credit accounting
- **[[3-Resources/Glossary/Create Loan Posting Types|Loan Posting Types]]** book employee loan disbursements and repayments

### Expense Administration: employee expense reimbursement

Expense Administration reuses the Time and Attendance **[[3-Resources/Glossary/Enter Wage Code|Wage Code]]** concept to classify travel/expense-related pay, then layers its own rules on top. **[[3-Resources/Glossary/Register Expense Rules and Expense Codes|Expense Rules and Expense Codes]]** define how allowances/deductions/reimbursements are calculated and the line-item categories employees select from. Allowance calculation is itself a short chain:

- **[[3-Resources/Glossary/Register Allowance Rules|Allowance Rules]]** control per-diem/subsistence calculation
- **[[3-Resources/Glossary/Register Allowance Compensation Rules|Allowance Compensation Rules]]** refine that calculation for provided meals/accommodation, alongside **[[3-Resources/Glossary/Register Default Deductions|Default Deductions]]**
- **[[3-Resources/Glossary/Register Allowance Compensations Abroad|Allowance Compensations Abroad]]** extends the same logic to international travel

Entertainment spend gets its own parallel classification:

- **[[3-Resources/Glossary/Register Entertainment Categories|Entertainment Categories]]**
- **[[3-Resources/Glossary/Register Entertainment Expense Codes|Entertainment Expense Codes]]**
- **[[3-Resources/Glossary/Register Entertainment Expense Control|Entertainment Expense Control]]** (approval/policy limits)

Rounding out Expense Administration:

- **[[3-Resources/Glossary/Register Milage Limits|Mileage Limits]]** set private-vehicle reimbursement rates, and rules are put into effect by **[[3-Resources/Glossary/Register and link Exp Rule Assignment|assigning them]]** to employees, categories, or org units.
- **[[3-Resources/Glossary/Register Employee Payment Basic Data|Employee Payment Basic Data]]** and **[[3-Resources/Glossary/Register Payment Methods|Payment Methods]]** set up paying employees directly (outside a full payroll run) — for example to settle expense claims.

### Shop Floor Employee Reporting: production-floor time capture

A small, manufacturing-specific sibling of Time and Attendance:

- **[[3-Resources/Glossary/Register Machine Code|Machine Codes]]** and **[[3-Resources/Glossary/Register Interrupt Code|Interrupt Codes]]** (downtime reasons) let shop-floor employees report time and interruptions against specific equipment.
- **[[3-Resources/Glossary/Register Employee Operation Assignment|Employee Operation Assignment]]** authorizes which shop order operations an employee can report against.

### Benefits Administration: employee benefit plans

- **[[3-Resources/Glossary/Enter Benefit Plan Provider|Benefit Plan Providers]]** (insurers, pension funds) are registered first.
- Plans are grouped into a **[[3-Resources/Glossary/Enter Benefit Plan Category|Benefit Plan Category]]** (health, retirement, life insurance).
- Each plan offers an **[[3-Resources/Glossary/Enter Benefit Plan Option List|Option List]]** of coverage tiers an employee can choose from.
- **[[3-Resources/Glossary/Enter Qualifying Events|Qualifying Events]]** (marriage, birth of a child, etc.) permit benefit elections to change outside the normal enrollment window.

### Human Resource Planning: workforce and competence planning

This sub-area reuses **[[3-Resources/Glossary/Define Job Grades|Job Grades]]** from Organisation Administration and adds several classification schemes used for competence-requirement analysis:

- **[[3-Resources/Glossary/Register Functional Areas|Functional Areas]]** (the discipline a job belongs to)
- **[[3-Resources/Glossary/Register Education and Experience Basic Info|Education and Experience Basic Info]]**
- **[[3-Resources/Glossary/Register Work Condition factors|Work Condition Factors]]** (noise, heights, chemical exposure)
- **[[3-Resources/Glossary/Register Group and Categories|Group and Categories]]** (general-purpose classification)
- **[[3-Resources/Glossary/Register Physical and Personality Characteristics|Physical and Personality Characteristics]]**

Together these let a job's requirements be compared against an employee's actual qualifications.

### Recruitment: bringing people in

Recruitment's basic data configures the sourcing and selection process before any job opportunity is opened:

- **[[3-Resources/Glossary/Register Advertisment Media Type|Advertisement Media Type]]** (where a job is advertised), **[[3-Resources/Glossary/Register Advertising Company|Advertising Company]]** (who placed it), and **[[3-Resources/Glossary/Register Employment Agency|Employment Agency]]** are all registered separately so recruitment-source reporting can distinguish them, alongside **[[3-Resources/Glossary/Register Applicant Sources|Applicant Sources]]**.
- **[[3-Resources/Glossary/Register Standard Recruitment Activities|Standard Recruitment Activities]]** define the consistent screening/interview/offer sequence a job opportunity follows, scored using a **[[3-Resources/Glossary/Register Qualitative Selection Level|Qualitative Selection Level]]** scale.
- **[[3-Resources/Glossary/Change Recruiment Identity|Recruitment Identity]]** numbering governs the key series used across the process (requisition, job opportunity, applicant IDs).
- **[[3-Resources/Glossary/Register Work Category|Work Category]]** (full-time, contract, seasonal) and **[[3-Resources/Glossary/Register Region|Region]]** classify a job opportunity.
- **[[3-Resources/Glossary/Register Recruiment Document Templates|Recruitment Document Templates]]** generate offer/rejection correspondence.
- **[[3-Resources/Glossary/Register Standard Induction Program|Standard Induction Program]]** is the Recruitment-side equivalent of an onboarding template for new hires.

### Employee Development: growing people once hired

Employee Development centers on the N-box Performance and Potential Matrix used for succession and talent planning:

- **[[3-Resources/Glossary/Register Career Planning Periods|Career Planning Periods]]** structure the planning cycle.
- **[[3-Resources/Glossary/Register Career Potentiality Levels|Career Potentiality Levels]]** and **[[3-Resources/Glossary/Register Career Performance Indicators|Career Performance Indicators]]** are the two axes plotted against each other in that matrix.
- **[[3-Resources/Glossary/Register Career Advancement Types|Career Advancement Types]]** (promotion, lateral move) and their **[[3-Resources/Glossary/Identify Career Advancement Levels|Career Advancement Levels]]** structure how far an employee can progress, informed by **[[3-Resources/Glossary/Register Normal Career Paths|Normal Career Paths]]** (typical progressions for a role).
- A **[[3-Resources/Glossary/Register Matching Profile|Matching Profile]]** is the qualification profile an employee's actual qualifications are compared against in Gap Analysis.

### Training Administration: courses and training logistics

Training courses are built from a catalog:

- **[[3-Resources/Glossary/Register Course and Material Category|Course and Material Category]]** classifies the catalog before **[[3-Resources/Glossary/Register General Course Info|General Course Info]]** (the catalog entry itself) and **[[3-Resources/Glossary/Register Detailed Course Info|Detailed Course Info]]** (syllabus, prerequisites, competencies gained) are entered.
- Delivering a course needs **[[3-Resources/Glossary/Register Training Room and Equipment|Training Room and Equipment]]** booked, a **[[3-Resources/Glossary/Register Trainer General Info|Trainer]]** (internal or linked to a **[[3-Resources/Glossary/Register Training Institute General Info|Training Institute]]**), and — for non-employee attendees — **[[3-Resources/Glossary/Register External Participant General Info|External Participant General Info]]** and **[[3-Resources/Glossary/Register External Participant Detailed Info|Detailed Info]]**.
- **[[3-Resources/Glossary/Register Training Cost Type and Category|Training Cost Type and Category]]** tracks what a training event costs.
- **[[3-Resources/Glossary/Register Training Evaluation|Training Evaluation]]** sets up post-course feedback.
- **[[3-Resources/Glossary/Register Training Report Templates|Training Report Templates]]** produce standard output like attendance certificates.

### Project Reporting: employee time and cost flowing into projects

The largest single BDR sub-category touches HCM only at the edges — it's largely shared IFS Financials/Projects basic data that governs what happens once an employee's time or cost is reported to a project.

It starts with general prerequisites that must all exist before project transactions can post:

- **[[3-Resources/Glossary/Create Company (Process)|Create Company]]**
- **[[3-Resources/Glossary/Create Accounting Rules Basic Data (Process)|Accounting Rules Basic Data]]**
- **[[3-Resources/Glossary/Project Accounting Basic Data (Process)|Project Accounting Basic Data]]**
- **[[3-Resources/Glossary/Accounts Receivables Basic Data|Accounts Receivables Basic Data]]**

**Report codes** classify what kind of work/cost is being registered:

- A **[[3-Resources/Glossary/Register Report Code|Report Code]]** is registered, made **[[3-Resources/Glossary/Register Available Report Codes|available]]** in context, and optionally **[[3-Resources/Glossary/Connect Report Code to Activity|connected to a project activity]]**.
- Codes are grouped via **[[3-Resources/Glossary/Register report Code Group|Report Code Group]]** (**[[3-Resources/Glossary/Connect Report Code to report code Group|connecting a code to its group]]**) and given an **[[3-Resources/Glossary/Give Report Code an Invoice text|invoice text]]**.
- **[[3-Resources/Glossary/Define Posting Types|Posting Types]]** control exactly which ledger postings each project event generates.

**Pricing employee time** follows a priority order, most specific source first:

- **[[3-Resources/Glossary/Use Actual Cost for Employee Internal Price|Actual employee cost]]**, if enabled, takes priority over every fallback below
- otherwise the most specific rate wins: **[[3-Resources/Glossary/Register Internal Cost per Project Detail and Report Code|Internal Cost per Project Detail and Report Code]]** is checked first
- falling back to the less specific **[[3-Resources/Glossary/Register Internal Cost Per Report Code|Internal Cost Per Report Code]]**
- and finally the general **[[3-Resources/Glossary/Register Standard Internal Cost Per Employee|Standard Internal Cost Per Employee]]** if nothing more specific is found
- with a **[[3-Resources/Glossary/Register Price Adjustment|Price Adjustment]]** layered on top of whichever rate is selected

On top of that:

- **[[3-Resources/Glossary/Set up basic data to enable overhead to Project Labour Time|Overhead on project labour time]]** and **[[3-Resources/Glossary/Set up Dilution of Labour basic Data|Dilution of Labour]]** add further loading rules.
- Employees are grouped for this purpose via **[[3-Resources/Glossary/Register Resource Group|Resource Group]]** (**[[3-Resources/Glossary/Connect Employee to Resource Group|connecting an employee to one]]**).

**Selling that time to a customer** uses:

- A **[[3-Resources/Glossary/Register Sales Price List|Sales Price List]]** with **[[3-Resources/Glossary/Register Sales Price per List, Group and Report Code|prices per list/group/report code]]**, **[[3-Resources/Glossary/Connect Sales Price List to Customer|connected to a customer]]** or **[[3-Resources/Glossary/Connect Sales Price to Project|to a specific project]]**.
- Customer setup: **[[3-Resources/Glossary/Register Customer Currency and Type|Customer Currency and Type]]** and an alternate **[[3-Resources/Glossary/Register Customers Paying Customer|Paying Customer]]**.
- A **[[3-Resources/Glossary/Define Project Invoice Plan|Project Invoice Plan]]** or **[[3-Resources/Glossary/Register Max Invoice Amount on Project|Max Invoice Amount]]** cap.

Margins can be layered on top of cost at both the project and customer level:

- **[[3-Resources/Glossary/Connect Expense Margin to Project|Expenses]]**, at the project level, or **[[3-Resources/Glossary/Connect Expense Margin to Customer|per customer]]**
- **[[3-Resources/Glossary/Connect Material Margin to Project|Material]]**, at the project level
- **[[3-Resources/Glossary/Connect Material Withdrawal Margin to Customer|Material withdrawal]]**, at the customer level
- **[[3-Resources/Glossary/Connect Supplier Invoice Margin to Project|Supplier invoices]]**, at the project level, or **[[3-Resources/Glossary/Connect Supplier Invoice Margin to Customer|per customer]]**

Each of these has a general, company-wide default that the project- or customer-level setting can override: **[[3-Resources/Glossary/Register Travel Expense Margin|Travel Expense Margin]]**, **[[3-Resources/Glossary/Register Material Withdrawal margin|Material Withdrawal Margin]]**, and **[[3-Resources/Glossary/Register Supplier invoice Margin|Supplier Invoice Margin]]**.

Finally:

- **[[3-Resources/Glossary/Register Project Preposting|Project Preposting]]** carries default accounting code-strings onto project transactions.
- **[[3-Resources/Glossary/Register Project Program|Project Program]]** (**[[3-Resources/Glossary/Connect Project to Project Program|connecting a project to it]]**) groups related projects for consolidated reporting.

## How it fits together

HCM isn't one hierarchy the way Costing is, but it also isn't a set of fully independent toolkits the way Quality Management's five setups are — it's closer to a dependency chain with several parallel branches hanging off the same trunk. Organisation Administration and Employee Administration are strict prerequisites: nothing else can be configured until an org structure and an employee record shape exist. Schedules and Rules and Time and Attendance Reporting build directly on that to capture worked time, which Payroll then consumes (through its own three-phase Data Preparation → Calculation → Booking sequence) to actually pay people; Expense Administration and Shop Floor Employee Reporting are narrower, parallel ways of capturing time/cost that feed the same underlying wage-code and payroll machinery rather than a separate one. Benefits Administration, Human Resource Planning, Recruitment, Employee Development, and Training Administration form a looser, more independent cluster concerned with the people side rather than the pay side — you can set up Recruitment without having touched Training Administration, for instance — though Human Resource Planning and Employee Development both lean on Job Grades and organizational data from the foundational layer. Project Reporting sits apart from all of this as largely generic Financials/Projects basic data that HCM only touches at the point where an employee's reported time or expense needs a cost and a price.

Confidence in this guide's own structure is mixed with the underlying material's: the ordering above (organization → employee → time/pay → people-planning → project reporting) is this guide's own synthesis, not something stated outright in IFS's documentation, though it follows the same grouping IFS's own Human Capital Management process model uses (Organization Administration and Employee Administration as core administrative areas, workforce planning and staffing as one cluster, talent/development as another, and a separate "Transfer to Payroll" integration point). Within the Details section, treat entries flagged `Confidence: moderate` in their own glossary pages — heavily concentrated in Payroll, Recruitment, Benefits Administration, Human Resource Planning, and Shop Floor Employee Reporting — as a reasonable orientation to what the activity is for, not a confirmed specification of exact field names or configuration steps.

## Related
- [[2-Areas/Human Capital Management|Human Capital Management]]
- [[3-Resources/BDR/Human Capital Management|Human Capital Management (BDR)]]

## Sources
- [Human Capital Management — IFS Cloud Process Model](https://docs.ifs.com/ifsclouddocs/26r1/lang/en/ProcessModels/Process_Model/HumanCapitalManagement.htm)
- Full source list per data point: see each linked glossary entry's own Sources section.
