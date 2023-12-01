---
sidebar_position: 3
---

# Setting up Backend

## Running containers
- First go to the [repo](https://github.com/graasp/graasp) and clone the repo locally.
- Open the repo in vscode. Make sure extension "Dev Containers" is downloaded and enabled.
- Then open the folder in the dev-container by using the command palette `cmd` + `shift` + `P` (or `ctrl` instead of `cmd`), and typing **Open Folder in Container**.

## Install dependecies
After the containers are up and running, `yarn install` to install dependencies inside containers.

## Add environment variables
Go [Readme configuration](https://github.com/graasp/graasp#configuration) and copy it to a new root file in your backend folder named `.env.development`.

Run following to get a new `SECURE_SESSION_SECRET_KEY`:
```
npx @fastify/secure-session > secret-key && node -e "let fs=require('fs'),file=path.join(__dirname, 'secret-key');console.log(fs.readFileSync(file).toString('hex'));fs.unlinkSync(file)"
```

Put the new key into `SECURE_SESSION_SECRET_KEY` field in `env.development`, and also other fields that can be the same as `SECURE_SESSION_SECRET_KEY` (use the search function to find them).

## Running backend

Now we can `yarn watch` to start backend.

If everything went well, go `https://localhost:3000/status`, you should see OK.

:::tip
Your browser might not be able to resolve `localstack`. To use localstack with the Docker installation, it is necessary to edit your `/etc/hosts` with the following line `127.0.0.1 localstack`. This is necessary because the backend creates signed urls with the localstack container hostname. Without changing the hosts, the development machine cannot resolve the http://localstack hostname.
:::