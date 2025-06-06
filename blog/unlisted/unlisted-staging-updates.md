---
title: Staging Updates
description: Updates to the Graasp platform
date: 2025-06-06
unlisted: true
authors:
  - graasp
---

Below are the latest changes deployed on [Graasp Staging](https://builder.stage.graasp.org).

:::warning[Important notes]

- You might need to create a new account on [the staging environnement](https://auth.stage.graasp.org) since the staging environment uses a different database as production's.
- Use a different browser or an incognito session to prevent cookie collision.

:::

This update introduces a completed contact page, refined the import/export functionalities, and various backend optimizations and bug fixes for better performance and reliability. Read further for details.

<!-- Everything below this will not be shown in the post overview -->
<!-- truncate -->

### Frontend

- **Complete Contact Page**: Implemented the full contact page UI and logic.
- **Show Download Options**: Enabled "Download as ZIP" for folders and "Download" for single files. Downloading a ZIP will send an email to download the archive instead of direct download.
- **Contact Info in Maintenance Banner**: Added contact information display in the site-wide maintenance banner.
- **File Upload Error Notifications**: Added error messages when file uploads fail, improving user feedback.
- **Quiz app**: The navigation is located below instead of above the question.

### Backend

- **App Handling in export and import**: Backend logic added to handle both import and export of APP-specific items.
- **Thumbnails Handling in export and import**: Enabled export and import of thumbnails for items, improving media consistency.
- **Move Membership Endpoints**: Refactored routes related to memberships for better structure and maintainability.
- **Send Export Notification Emails**: Added functionality to send email notifications when a raw export is completed.
- **Featured Collections Endpoint**: Created an endpoint to manage and retrieve featured collections more efficiently.
- **Allow transparent double like on items**: Resolved issue allowing users to like an item more than once.

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).

:::info[For editors and developers]
Feel free to update this text before we officially release it using the "Edit this page" button at the end of the article
:::
