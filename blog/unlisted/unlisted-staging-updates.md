---
title: Staging Updates
description: Updates to the Graasp platform
date: 2025-02-19
unlisted: true
authors:
  - graasp
---

Below are the latest changes deployed on [Graasp Staging](https://builder.stage.graasp.org).

:::warning[Important notes]

- You might need to create a new account on [the staging environnement](https://auth.stage.graasp.org) since the staging environment uses a different database as production's.
- Use a different browser or an incognito session to prevent cookie collision.

:::

Since the team is working on a consequent refactor of the backend, only minimal yet necessary changes are brought to you in this new release. Read further for more details.

<!-- Everything below this will not be shown in the post overview -->
<!-- truncate -->

## Resolution of Unwanted download of pdf files

Thanks to the feedback of one of our user, an annoying bug has been detected. This bug had been happening when you copy pdf files. Those copies were then, in the player view, automatically downloaded rather than displayed as usual.

A fix has been made live for further copies. Thus if you copy pdf starting today, this bug should not happen anymore. Please let us know if it still happens to you.

:::info[How to stop my pdf files to be downloaded?]

If you have remaining faulty copies of pdf files, please delete them. And replace with the corresponding pdf file OR copy them again. The download action on new pdf files shouldn't happen anymore.

:::

### Library (details)

- Fix card thumbnail sizing in Safari
- Fix card padding on mobile screens

### Backend changes (details)

- Add backend implementation for deleting and uploading many files at once
- Fix copy on files (path, remove automatic content disposition to attachment and cache-control)

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
