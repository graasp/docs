---
sidebar_position: 1
---

# Introduction {#intro}

This is the documentation of the Graasp digital education platform targeted at developers.

:::info

This documentation focuses on Development guides and tutorials (i.e people that write code).

For the end-user documentation, tutorials and reference, please go to [the User docs](/user/intro)

:::

This documentation focuses on:

- the setup and installation of the platform on your machine
- the guidelines and protocols to participate and contribute in the development of Graasp
- a technical description of the architecture and features of Graasp

## Prerequisites {#pre-requisites}

This documentation assumes that you are familiar with the command line.
We will guide you and tell you which commands to run, but it is best if you can understand what they will do.

If you need a complete refresher on how to do web development you should have a look at [the Odin Project](https://www.theodinproject.com/)

## What you'll need

Here we list the tools that you should have installed in order to make your development work easier.

### Required {#required}

- A modern browser: Arc, Chrome, Firefox, Safari or others will work, choose based on your personal preference (it is recommended to have at least 2 installed on your machine in cases where you need to debug browser compatibility issues)
- [Node.js](https://nodejs.org/en/download) version 20.0 or above:
  - We recommend to use [`volta`, a node version manager](https://volta.sh/)
  - You can also use [`nvm`, an older node version manager](https://github.com/nvm-sh/nvm)
- A code editor:
  - We recommend [VSCode](https://code.visualstudio.com) as our main supported development IDE, because we will be using [devcontainers](https://code.visualstudio.com/docs/devcontainers/containers) to create our development environment for the backend.
  - You can also use IntelliJ WebStorm, SublimeText, or even vi, vim, nvim, emacs or nano
- [Docker Desktop](https://www.docker.com/products/docker-desktop/): to run containers
  :::tip
    You do not need to login to Docker.
  :::

### Nice to have {#nice-to-have}

These are a few tools that we find nice to have when developing. Feel free to install them if you see their value. If you don't see an added value maybe don't install them. You can always install them later once you think they can benefit you.

- An API client that allows you to make requests to the backend:
  - We recommend [Bruno](https://www.usebruno.com/): an API client similar to Postman or Insomnia.
  - [Postman](https://www.postman.com/downloads): lets you send API requests with a GUI
- [Starship](https://starship.rs/): a utility to improve your terminal prompt (git branch, node version etc...)

### Special note for people running macOS

Fo users on macOS here is a list of tools that we think will make your life easier:

- [Rectangle.app](https://rectangleapp.com/) a window manager that allows you to re-organize your window layout with the keyboard. It also supports dragging and snapping to edges of the screen. Very light weight, try it out by pressing `ctrl + alt + left arrow`, your current window should now take half the horizontal space on the left. There is a pro version available. IMO the base version is already enough, but if you think you will benefit from the upgrade and want to support the work of the developer, maybe consider buying the pro version.
- [brew](brew.sh) the missing package manager for macOS. You might already have installed it, but if not, it is a good tool to have.

## Best practices {#tools}

We use:

- [Typescript](https://www.typescriptlang.org/)
- [Linters](https://eslint.org/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Test suits: [Cypress](https://www.cypress.io/) and [Playwright](https://playwright.dev/)
- [Storybook](https://storybook.js.org/) for component library design, prototyping and documentation
- [Semantic versioning](https://semver.org/)
