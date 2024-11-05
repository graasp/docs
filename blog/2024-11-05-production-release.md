---
title: November 5th, Updates
description: Updates to the Graasp platform
date: 2024-11-05
authors:
  - graasp
---

The updates focus on improving user experience, performance, and infrastructure. Key changes include Material UI 6 upgrades across several components, enhanced login and reset flows, optimized backend endpoints, and improvements to search and item management. Read further for details.

<!-- Everything below this will not be shown in the post overview -->
<!-- truncate -->

We're working on an improvement for categories in our OER library. To head to direction, we first started to migrate the **language** categories. Starting from now, the item's language will be used by the searching engine in the library to find matching collections. Please set your items' language with your content's language if it exists. Currently Graasp supports _english_, _french_, _german_, _italian_, _spanish_ and _arabic_.

## Auth

- Allow to press Enter to login with email
- Show message when resetting password is successful
- Upgrade to Material UI 6
- Update French and German translations

## Builder

- Replace language categories with item lang
- Refactor creation and edition dialogs
- Clear item selection on navigation
- Upgrade to Material UI 6

## Library

- Use supported languages instead of language category in search bar
- Upgrade to Material UI 6

## Player

- Upgrade to Material UI 6

## Backend

- Add simpler health endpoint for quicker health response
- Index item lang in meilisearch
- Remove GET tags endpoints
- Split upload csv between individual and group creation
- Improve schemas
  - optional param for actions
  - allow local file when updating item schema
  - do not check password format on password login
- Escape title in emails for special characters
- Infrastructure:
  - Put nudenet back in container, setup single db instance
  - Move Redis in a container

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).
