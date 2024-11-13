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

- Redesign the link creation modal to fix bugs when editing a valid link's text.
- Redesign the folder creation and editing modals for improved functionality.

## Apps:

- **Quiz**:
  - Translate various question types for better accessibility.
  - Allow repeated words in "Fill the Blanks" questions.

## Backend:

- Add support for tags by creating tag and item-tag entities, and introduce an endpoint to retrieve tags for items.
- Include a temperature parameter in chatbot API queries for customization.
- Rename item tag settings (hidden, public) as item visibility.
- Correct the password reset email to include accurate content.

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
