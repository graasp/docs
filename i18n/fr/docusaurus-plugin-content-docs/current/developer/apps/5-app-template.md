---
slug: app-template
---

# Patron pour la conception d'applications Graasp

Nous fournissions un patron pour vous permettre de commencer rapidement le développement de votre app Graasp en utilisant le [framework React](https://react.dev/) et notre [client de requête](./apps-query-client).

Vous trouverez le reste des instructions sur comment utiliser le patron dans [le README du patron (en anglais)](https://github.com/graasp/graasp-app-starter-ts-vite/blob/main/README.md).

:::note Ce document concerne la [version 1.1.0](https://github.com/graasp/graasp-app-starter-ts-vite/releases/tag/v1.1.0) du patron. :::

## Utilisation du patron

Nous vous recommandons d'utiliser ce patron avec la [ligne de commande Graasp](https://github.com/graasp/graasp-cli) qui fournit un assistant de création et quelques raffinements utils à la création de votre app.

It est également possible de créer votre app directement dans GitHub en utilisation la fonction GitHub Template trouvable sur la page d'accueil du dépôt du patron. Si vous choisissez cette option, le démarrage du développement local est laissée en exercice au dévelopeur.

### Avec la ligne de commande Graasp

Ce patron peut être utilisé avec [la ligne de commande Graasp](https://www.npmjs.com/package/@graasp/cli?activeTab=readme) pour configurer projet avec une simple ligne:

```bash
npx @graasp/cli@latest new -s graasp/graasp-app-starter-ts-vite
```

La ligne de commande va vous poser quelques questions pour vous aider à configurer votre projet. Les valeurs par défaut proposées:

- Déploiement avec GitHub Actions (recommandé)
- Générer un `appId`
- Installation automatique des dépendances
- Initialisation d'un dépôt git local

<details><summary><h3>Directement depuis GitHub</h3></summary></details>

Si vous choisissez de commencer votre projet manuellement vous devrez effectuer les étapes comme suit:

#### Cloner le patron

Obtenir une copie du dépôt.

##### Utilisation de la fonction "patron" (template)

Clickez sur le boutton `Use this template`. Pour plus d'instructions veuillez consulter [les instructions de la documentation GitHub sur l'utilisation des patrons](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

##### Clone depuis la ligne de commande

Avec `git`:

```sh
git clone
```

Avec la ligne de commande [GitHub CLI](https://cli.github.com/):

```bash
gh repo clone graasp/graasp-app-starter-ts-vite
```

#### Ajout des workflows

Pour déployer votre app avec Github Actions.

#### Renommer

Vous devrez chercher la chaîne de caractères `Graasp App Template` dans le code du projet et la remplacer par le nom de votre application.



### Configuration du dépôt GitHub

Si vous choisissez de déployer votre application avec les workflows GitHub Actions fournis vous devrez créer les secrets suivants:

- `APP_ID`: un UUID v4 qui identifie votre application de manière unique pour le déploiement
- `APP_KEY`: a UUID v4 qui autorise votre application à utiliser l'API Graasp (à obtenir auprès de l'équipe de développement Graasp)
- `SENTRY_DSN`: votre url Sentry pour collecter les rapports de crash et de télémétrie (optionnelle)

## Installation

## Lancer l'application

Créez un fichier `.env.development` à la racine du projet avec le contenu suivant:

```bash
VITE_PORT=3005
VITE_API_HOST=http://localhost:3000
VITE_ENABLE_MOCK_API=true
VITE_GRAASP_APP_KEY=45678-677889
VITE_VERSION=latest
```

## Lancer les tests

Créez un fichier `.env.test` à la racine du projet avec le contenu suivant:

```bash
VITE_PORT=3333
VITE_API_HOST=http://localhost:3636
VITE_ENABLE_MOCK_API=true
VITE_GRAASP_APP_KEY=45678-677889
VITE_VERSION=latest

# dont open browser
BROWSER=none
```
