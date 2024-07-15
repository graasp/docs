---
title: Staging Updates
description: Fresh updates for the Graasp platform
date: 2024-07-15
unlisted: true
authors:
  - graasp
---

Below are the latest changes deployed on [Graasp Staging](https://builder.stage.graasp.org).

:::warning[Important notes]

- You might need to create a new account on [the staging environnement](https://auth.stage.graasp.org) since the staging environment uses a different database as production's.
- Use a different browser or an incognito session to prevent cookie collision.

:::

We've revamped the item list in Builder with a sleek, redesigned interface featuring intuitive drag-and-drop capabilities. Additionally, we've improved the account profile page, quiz app and analytics dashboard! Read further for more details!

<!-- Everything below this will not be shown in the post overview -->
<!-- truncate -->

## Account

- Implemented a dedicated email validation page to enhance security and ensure valid email addresses.
- Added a new section for user preferences in the settings page, allowing users to customize their experience.
- Enabled users to edit various sections of their profile page for better personalization and control.

## Analytics

- Removed the "Starting from Today" option in the **My Statistics** date picker to simplify date selection.
- Improved Arabic translations across the dashboard

## Builder

We've revamped the item list view to feature a more attractive design, which will be refined step by step based on user feedback. This redesign introduces several new features:

:::warning[Operations on multiple items]
The multiple items operations have been disabled for now, but will come back in a very near future. Let us know if it's a key feature you need!
:::

- **Drag & upload files in between items**

![upload in between](./upload-between-items.gif)

- **Drag & upload files in items**

![upload in item](./upload-in-item.gif)

- It's finally here: **moving an item into a folder!**

![move in item](./move-in-item.gif)

Additionally, the following change has been made in the Builder:

- Display the current position on the map, if permitted.

## Library

- Updated all dependency libraries to their latest versions.

## Apps

- **Quiz**:
  - Enabled users to add twice the same questions
  - Enhanced the clarity and quality of the explanation texts

## Backend

- Enhanced the reordering mechanism to allow creating items at a specific position in a list.
- Implemented dependency injection (DI) for streamlined service integration.
- Mentioned email address in email notifications when updating your email.
- Optimized performance with a smart filtering when requesting descendant elements.
- Ensured automatic member logout upon deletion.
- Updated all dependency libraries to their latest versions.

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
