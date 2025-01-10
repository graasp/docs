---
title: Staging Updates
description: Updates to the Graasp platform
date: 2025-01-10
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

## Library

- Fixed broken text
- Fix incorrect member fetching

## Backend

- **Add document and link endpoints**: Introduced new API endpoints to manage documents and links.
- **Add migration for downgrading guest memberships**: Added a migration script to handle downgrading guest memberships.
- **Update facet settings process after rebuild**: Adjusted facet settings process to ensure they are properly updated after a rebuild process.
- Corrected issues with the analytics query schem.
- Revised JSON schemas to allow more flexibility.

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
