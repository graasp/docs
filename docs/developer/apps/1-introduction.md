---
title: General concepts
slug: general-concepts
---


Graasp can embed web applications as a resource. They should be added as an item of type `app` to access the Graasp API and get authenticated with a token.

When an app is added as a resource, it is linked to an item. Therefore, two added apps will correspond to two different items, which leads them to have different item ids, and different app data.

## Features

### App Context {#app-context}

The app context contains additional information which might be interesting for your app such as `members` or `item`.

### App Actions {#app-actions}

App actions are analytic traces the app might save.

### App Data {#app-data}

App data are all data the app might save. App Data are created by a member and are available to in a given scope.

- **Visibility**: Availability of the app data, either `member` or `item` (default: `member`)
  - `member`: the app data can be managed by the creator and members with admin permission. Members with write permission can view them but cannot modify them.
  - `item`: the app data can be managed by the creator and members with admin permission. All other members can view them but cannot modify them.

### App Settings

App settings store the app configuration. Only members with the admin permission can create, update and delete them. The other members can only fetch the app settings.

If the related item is copied, its app settings are copied alongside, opposed to app data.

### File Upload

Apps can upload files, as (app) data or (app) setting.
