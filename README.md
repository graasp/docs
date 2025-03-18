<p align="center">
  <a href="https://graasp.github.io/docs">
    <img width="500px" src="./static/img/graasp-social-card.png" alt="Graasp social card"/>
  </a>
</p>

# Graasp Documentation and news

[![French](https://gitlocalize.com/repo/9771/fr/badge.svg)](https://gitlocalize.com/repo/9771/fr?utm_source=badge)
[![German](https://gitlocalize.com/repo/9771/de/badge.svg)](https://gitlocalize.com/repo/9771/de?utm_source=badge)

This repo hosts the code for the Graasp documentation and news website.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Developing

### Installation

```sh
yarn
```

### Local Development

Create a `.env` file to store your environment variables:

```dotenv
# required Id for website analytics, locally you can set this to whatever
UMAMI_WEBSITE_ID=3f9eb1f6-5f5f-4a28-87a5-312829f1446d

# Base url where you will host the website, locally you can change it to `/` so you can serve the static content using static web server
# Or to mimic the production deployment you can omit it.
BASE="/"
```

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

> [!WARNING]
> If you want to locally develop one of the internationalisations you will have to start the app with the correct local:
> `yarn start --locale fr` This is because the locales are different SPAs (single page apps).

### Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This repo deploys the website to GiHub Pages using GitHub Actions.
