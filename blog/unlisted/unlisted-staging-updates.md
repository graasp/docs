---
title: Staging Updates
description: Updates to the Graasp platform
date: 2024-09-13
unlisted: true
authors:
  - graasp
---

Below are the latest changes deployed on [Graasp Staging](https://builder.stage.graasp.org).

:::warning[Important notes]

- You might need to create a new account on [the staging environnement](https://auth.stage.graasp.org) since the staging environment uses a different database as production's.
- Use a different browser or an incognito session to prevent cookie collision.

:::

Now that summer is nearly over, we are back with some updates, bug fixes and support for more file types. Read on for more !

<!-- Everything below this will not be shown in the post overview -->
<!-- truncate -->

## Player: Increased audio file type support

| format              | support             | share of items |
| ------------------- | ------------------- | -------------- |
| audio/mpeg          | ✅ already supported | 78%            |
| audio/x-m4a         | 🆕 support added    | 10%            |
| audio/mp4           | ✅ already supported | 5%             |
| audio/x-wav         | ✅ already supported | 2.5%           |
| audio/wav           | ✅ already supported | 1%             |
| audio/mp3           | ✅ already supported | 1%             |
| audio/ogg           | 🆕 support added    | 1%             |
| audio/vnd.dlna.adts | 🆕 support added    | <0.5%          |
| audio/x-flac        | 🆕 support added    | <0.05%         |
| audio/x-stm         | ❌ no support        | <0.05%         |
| audio/x-aiff        | ❌ no support        | <0.05%         |
| audio/x-hx-aac-adts | ❌ no support        | <0.05%         |
| audio/aac           | 🆕 support added    | <0.05%         |
| audio/flac          | 🆕 support added    | <0.05%         |
| audio/midi          | ❌ no support        | <0.05%         |
| audio/x-ms-wma      | ❌ no support        | <0.05%         |

## Builder

- Update icons to fit the new design
- Add a helper text in the publication page that reminds users they can use the "Enter" key to quickly create tags.

## Account

- A not-found page was added
- **Support Arabic**: users who select the arabic language will now enjoy a right-to-left interface. Feedback welcome.
- Small bug fixes and translation updates.

## Analytics

- Fixed a small issue related to how actions are counted in the interface.

## Miscellaneous bug fixes

- **Etherpad export**: It is now possible to export an etherpad document.
- Small fixes and updates.

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
