---
title: March 17th, Updates
description: Updates to the Graasp platform
date: 2025-03-17
authors:
  - graasp
---

The team is currently working on a consequent refactor of the backend, but still bring to you fixes of reported bugs. Read further for more details.

<!-- Everything below this will not be shown in the post overview -->
<!-- truncate -->

## Resolution of Unwanted download of pdf files

Thanks to the feedback of one of our user, an annoying bug has been detected. This bug had been happening when you copy pdf files. Those copies were then, in the player view, automatically downloaded rather than displayed as usual.

A fix has been made live for further copies. Thus if you copy pdf starting today, this bug should not happen anymore. Please let us know if it still happens to you.

:::info[How to stop my pdf files to be downloaded?]

If you have remaining faulty copies of pdf files, please delete them. And replace with the corresponding pdf file OR copy them again. The download action on new pdf files shouldn't happen anymore.

:::

## Trash does not show sub-elements

Under particular conditions, some sub-items might not appear in the trash despite being deleted. It has been quickly fixed by the team, in order for users to access their elements they want to retrieve. However, the total count of trashed items could be incorrect (the displayed number can be higher than expected). A patch to correct this error will follow soon.

### Library (details)

- Fix card thumbnail sizing in Safari
- Fix card padding on mobile screens

### Backend changes (details)

- Add backend implementation for deleting and uploading many files at once
- Fix copy on files (path, remove automatic content disposition to attachment and cache-control)
- Recycle bin shows deleted children (whose membership are inherited). Total count can however be falsy.
- Fix link in the email sent on membership request

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).
