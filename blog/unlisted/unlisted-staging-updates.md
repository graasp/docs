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

## Account:

- **Move Homepage to `/account`**: This change initiates the process of simplifying our client application by relocating the homepage to the `/account` route.
- **Send Analytics to our own server**: Configure Umami analytics to route data to our own server, enhancing data privacy and control.
- **Remove DevTools in Production**: Disable development tools in production to improve security and performance.
- **Update Translations**: Refresh and improve translation files to support new and updated content.
- **Update Dependencies**: Ensure all dependencies are up-to-date to maintain security and compatibility.

## Auth:

- **Replace Password Icon with a Lock Icon**: Update the password field icon to a lock for improved clarity and consistency.

## Builder:

- **Optimize Item Fetching from Trash**: Enhance the performance of fetching items from the trash folder.
- **Enable Sharing with Enter Key**: Allow users to share items by pressing the "Enter" key, improving accessibility and user experience.
- **Refactor Edition and Creation Modals** _(In Progress)_: Redesign and optimize the modal windows for item creation and editing for a clearer code.

## Player:

- **Refactor to Prevent Safari Crashes**: Modify the codebase to resolve crashes in Safari, ensuring a more stable experience for all users.
- **Update Dependencies**: Keep dependencies up-to-date to address potential issues and maintain compatibility.

## Backend:

- **Optimize `GET /recycled` Endpoint**: Improve the efficiency of the `GET /recycled` API endpoint to reduce response times.
- **Update Translations**: Synchronize translations with the frontend for consistency across the application.
- **Enhance Endpoint Schemas**: Refine endpoint schemas for clearer documentation and better validation.

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
