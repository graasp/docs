---
title: Staging Updates
description: Updates to the Graasp platform
date: 2024-09-24
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

- Update dependencies.
- Update translations.

## Auth

- Update dependencies.
- **Forgot Password**: We've added a **Forget Password** feature for easier account access. If you forget your password, you can refer to this [documentation](/user/account/forgot-password).

## Builder

- Update translations.
- Optimize thumbnails when fetching items.
- Update react-query dependency to v5.
- Decrease item selection drag scope, allowing to hover and select text again
- Show hidden setting in share tab, and disable read memberships when enabled
- Fix edit modal content and navigation updates

## Player

- Optimize thumbnails when fetching items.
- Update react-query dependency to v5.

## Library

- On page fetching, show loading collections.
- Update react-query dependency to v5.

# Backend

- Optimize thumbnails when fetching items and caching.
- Fix pseudonymized login in children
- Improvement of openapi specification
- Prevent special characters in usernames

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
