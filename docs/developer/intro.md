---
sidebar_position: 1
---

# Introduction

This is the documentation of the Graasp digital education platform targeted at developers.

:::info

This documentation focuses on Development guides and tutorials (i.e people that write code).

For the end-user documentation, tutorials and reference, please go to [the User docs](/user/intro)

:::

This documentation focuses on:

- the setup and installation of the platform on your machine
- the guidelines and protocols to participate and contribute in the development of Graasp
- a technical description of the architecture and features of Graasp

## Prerequisites

This documentation assumes that you are familiar with the command line.
We will guide you and tell you which commands to run, but it is best if you can understand what they will do.

If you need a complete refresher on how to do web development you should have a look at [the Odin Project](https://www.theodinproject.com/)

## What you'll need

Here we list the tools that you should have installed in order to make your development work easier.

### Required

- A modern browser: Chrome, Firefox or others will work, choose based on your personal preference
- [Node.js](https://nodejs.org/en/download) version 20.0 or above:
  - We recommend to use [`nvm`, the node version manager](https://github.com/nvm-sh/nvm)
- A code editor: we recommend that you use [VSCode](https://code.visualstudio.com) because we will be using [devcontainers](https://code.visualstudio.com/docs/devcontainers/containers) to create our development environment for the backend.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/): to run containers

### Nice to have

- [Postman](https://www.postman.com/downloads): lets you send API requests with a GUI
- [Starship](https://starship.rs/): a utility to improve your terminal prompt (git branch, node version etc...)

## Best practices

We use:

- [Typescript](https://www.typescriptlang.org/)
- [Linters](https://eslint.org/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Test suits: [Cypress](https://www.cypress.io/) and [Playwright](https://playwright.dev/)
- [Semantic versionning](https://semver.org/)
