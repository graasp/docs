---
title: Staging Updates
description: Updates to the Graasp platform
date: 2024-10-23
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

## Account

- Update translations
- Remove devtools in production
- Update dependencies
- Fix lang switch
- Send umami analytics to our own server

## Auth

- Change password icon

## Builder

- Optimize fetching items from trash
- Allow sharing by pressing enter
- Refactor of the edition and creation modals (in progress)

## Player

- Refactor to prevent safari crash
- Update dependencies

## Backend

- Optimize GET /recycled
- Update translations

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
