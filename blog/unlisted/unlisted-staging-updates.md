---
title: Staging Updates
description: Updates to the Graasp platform
date: 2025-06-27
unlisted: true
authors:
  - graasp
---

Below are the latest changes deployed on [Graasp Staging](https://builder.stage.graasp.org).

:::warning[Important notes]

- You might need to create a new account on [the staging environnement](https://auth.stage.graasp.org) since the staging environment uses a different database as production's.
- Use a different browser or an incognito session to prevent cookie collision.

:::

We introduce in this new release a range of improvements and fixes that make exporting smoother, as well as a full update of Graasp Library.

<!-- Everything below this will not be shown in the post overview -->
<!-- truncate -->

## Export ZIP Improvements

Exporting items and member data to zip files is now handled by a new zip library and dedicated background workers. This means exports are less likely to fail, and can handle larger data sets without slowing Graasp down. If you want to know more about technical details, [check this page](https://graasp.github.io/docs/developer/references/workers).

## Change Library's underlaying dependency to [Tanstack-start](https://tanstack.com/start/latest)

The Graasp team changed Graasp Library's primary dependency to tanstack-start for a more modern development stack and better suit the other dependencies. Almost no visual change should be noticed. The testing framework was also changed.

## Fixes

- **Cleaner Item Copies:** When you copy items, the original order is now checked and cleaned up automatically to prevent issues caused by bad data.
- Whenever changes are made to the search index, all settings are automatically rebuilt so that filters and attributes stay up to date.
- The system now checks that app origin URLs are formatted correctly, reducing the chance of configuration errors.
- Some internal streaming processes now use more modern and reliable methods, which improves error handling and overall stability.
- Several core libraries have been updated to their latest versions.

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
