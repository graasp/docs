---
sidebar_position: 10
sidebar_label: 🐞 Troubleshooting
---

# Troubleshooting

Common issues and their workaround

:::info
If you do not find a solution to your issue here, contact us via GitHub by opening an issue.
If you find a solution about a problem you faced, please let us know so we can add them to this page, for future users.
:::

## Make sure you have installed dependencies

Run `yarn` at the root of the project (same level as the package.json file). You should see a `node_modules` folder get generated.

## CORS error with app

Apps need to be registered with a corresponding publisher. Publisher decides which origins are allowed.

:::danger
The CORS check is done at startup, so if changes are made on the DB, they will take effect only at the next restart.
:::
