---
type: guide
topic: IFS Cloud HCM Access Attributes
source: web
created: 2026-08-26
tags: [guide, ifs, hcm, security]
---

# Create Access Attributes

## Explanation

This activity is used to define a basic access attribute that protects access to data. This protection restricts access to data itself, and not any particular window. It means that a single attribute can influence multiple windows at once. Because of that, advanced knowledge of the application and basic knowledge of databases is necessary to efficiently use the window. To achieve this, the attribute works as a filter placed over a logical unit. Logical units are segments of the programming code responsible for sending and receiving data from the main database. If an access attribute is created and activated for a logical unit, only a user with this attribute assigned will have access to data handled by this unit. To know the responsibilities of a particular logical unit, an in-depth knowledge of the application is required. To make navigation easier, logical units are grouped in folders named after areas of the application they cover. Inside, unit names indicate what sort of data every unit is responsible for.

The attribute created in this activity allows only for the basic access definition - once it is active, users will either have full access to the logical unit, or no access at all.

Access attributes lie at the base of advanced HCM data protection. They work as a filter that controls who can access specific data and what sort of changes can be made. The graphical object structure lists all the areas that can be protected with access attributes. The header displays basic information about the attribute and the table beneath contains advanced attribute configuration.

You can select a logical unit from the graphical object structure. Main folders provide information about the general area that can be protected. In the main folders, logical units are listed. Their names usually suggest what data are they handling.

Following are the options that can be selected in the **Attribute Type** field:

- **Self-Access** - gives it's owner the ability to see and register their own data, connected by their own Person and Employee ID
- **Access to Employee** - gives it's owner access to data of other employees connected by Employee ID
- **Access to Person** - gives access to data of other persons connected by Person ID
- **Access to Organization** - gives access to data which is not connected directly to employees or persons within an organization unit (e.g., headcount plan)

To select the type of the authorization used in other areas of the application, you can use the **Authorization Type** field. In most cases this field should be left **empty**. If you are defining an access attribute for any of the areas listed in the expandable list of values, you need to select the relevant item on that list.
The **Authorization Type** field is used for backwards compatibility with older functionalities relying on HCM access solution where 4 authorization types were available. By default, all attributes that need this field filled in already have it. As such, this field should be left as it is unless there are problems with authorization of items presented in the field's dropdown list.

Set the **Active** option to Yes in order to activate the attribute. If it is set to No, the attribute will not work and all.

## Prerequisites

There are no prerequisites.

## System Effects

As a result of this activity, a basic access attribute will be created. It will allow full access or no access to data stored in the logical unit.

## Related
- [[HR Access Configuration]]
- CRIM006 - UKG Integration (in the PKM-CUST vault) — relevant to the open "who needs an IFS user account" question
