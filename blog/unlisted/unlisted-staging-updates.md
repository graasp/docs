---
title: Staging Updates
description: Updates to the Graasp platform
date: 2025-07-17
unlisted: true
authors:
  - graasp
---

Below are the latest changes deployed on [Graasp Staging](https://builder.stage.graasp.org).

:::warning[Important notes]

- You might need to create a new account on [the staging environment](https://auth.stage.graasp.org) since the staging environment uses a different database as production's.
- Use a different browser or an incognito session to prevent cookie collision.

:::

The Graasp team continues to improve the platform in different directions, focusing on consolidating the foundations, from the interfaces to server optimizations. You can find a more detailed list of the changes below.

<!-- Everything below this will not be shown in the post overview -->
<!-- truncate -->

## Update to the available AI models

The Graasp platform has a few integration with conversational agents (through OpenAI). In this update we have upgraded the models we support to make them faster and more efficient.
We now default to [`GPT 4o-mini`](https://platform.openai.com/docs/models/gpt-4o-mini) (previously this was [`GPT 3.5 turbo`](https://platform.openai.com/docs/models/gpt-3.5-turbo)).
Other available options are:

- [`GPT 4.1 nano`](https://platform.openai.com/docs/models/gpt-4.1-nano): allows for a larger context window (up to 1M) and benefits of a later knowledge cut-off (model was trained with data up to June 01 2024)

## Update to the chatbot app

The chatbot app available inside Graasp has been updated to support a simple and user-friendly interface for defining example interactions.

## Other changes

As always we are committed to making the platform faster and more reliable for all our users.
With this update we improved on the following:

- Update French and German language translations
- Allow embedded applications to choose from more sizing options, so they can display their content as best as possible
- Update login button background color to ensure consistent visibility in the app header
- Improve item indexing mechanism: using a dedicated worker and more efficient data-fetching
- Fix a bug where email addresses could be saved with a mixed case. This affected the email update mechanism, where users could be locked out of the platform if they provided an email with mixed case. We now ensure saved emails are in lowercase when requesting an email change to prevent case sensitivity issues.
- Fix an issue where the `/all-collections` page of the library would not forward the search parameters to the new `/search` page. This affected mostly search engine results that would not display the expected result due to missing URL Search parameters.
- Improve spacial awareness in the library by displaying the currently active page in the header. The styling of the links in the header was also updated.
- Fix an issue in the collection page. The "copy link" feature copied an invalid link to the clipboard. It will now copy the correct link to view the collection in the player interface.
- Improve the display of collection title. Titles will now be displayed in full without truncation or ellipsis.
- Update the library favicon to make it consistent with the brand image. The favicon is back to its blue-purple glory !
- Fix a compatibility issue on older devices. We reverted to use a wider available function, so all our users can experience the library.
- Fix a small layout issue in the library collection cards where a collection with a particularly long title could grow to an unwanted width.

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [GitHub repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
