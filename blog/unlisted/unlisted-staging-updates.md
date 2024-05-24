---
title: Staging Updates
description: Fresh updates for the Graasp platform
date: 2024-05-24
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

## Analytics

- Maintain selected filter values across different pages as the user navigates.
- Export actions are restricted to users with write permissions, providing an additional layer of security and data integrity.

## Builder

- Verify permissions for geolocation and hide the "Add Item" option if the user lacks write access to the parent item on the map.
- Track the layout mode within url, enabling users to directly access specific views.

## Player

- Display the current title page in the browser tab, improving navigation and context for users.
- Reduce the size of the island to hide buttons, optimizing the interface for better integration on smaller screens.

## Backend

- Implement a password reset endpoint (development ongoing).
- Add an endpoint to retrieve the most-used apps per user, providing insights into user behavior and preferences.
- Integrate support for the GPT-4o model in the chatbot, enhancing its capabilities.
- Update some project dependencies to their latest versions, ensuring improved security and performance.
- Fix geolocation endpoint to return public items only when necessary.
- Fix geolocation value to contain inherited item.

## Mobile

- Enable scrolling when the keyboard is open on the home screen, improving user experience during input.
- Allow UUID input to navigate directly to a specific item.
- Fix a crash issue on iOS when viewing maps.
- Resolve an issue on iOS where QR codes could not be read and adding a close button to the camera view for better usability.
- Add a map button to the Shared Elements screen.
- Request location permissions from the app configuration, ensuring proper functionality and compliance.

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
