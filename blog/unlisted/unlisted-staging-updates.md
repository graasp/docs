---
title: Staging Updates
description: Updates to the Graasp platform
date: 2024-11-05
unlisted: true
authors:
  - graasp
---

Below are the latest changes deployed on [Graasp Staging](https://builder.stage.graasp.org).

:::warning[Important notes]

- You might need to create a new account on [the staging environnement](https://auth.stage.graasp.org) since the staging environment uses a different database as production's.
- Use a different browser or an incognito session to prevent cookie collision.

:::

<!-- Everything below this will not be shown in the post overview -->
<!-- truncate -->

## Builder:

- Remove Published badge in item grid
- Improve File Upload, Etherpad and App creation modals
- Allow to delete pseudonymized login, if it was previously set. This will delete related guests.
- Fix link crash when using an url without protocol
- Fix color issues
- Remove use of display name

## Apps

- Update of dependencies for climate apps, fixing their height

## Backend:

- Add implementation endpoints for tag (create, delete tag)
- Identify and treat the H5P files in the general file upload
- add documentation to member endpoints
- Fix schema errors
- Decrease action export limit time

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
