---
title: Query client
slug: apps-query-client
---

# Query client for apps

As you start to build your app from [the template](./5-app-template.md), you will see that it comes with a pre-configured query client. This configuration is located in `src/config/queryClient.ts` and contains everything you need to configure the apps query client.

More informations on how to use the query client can be found in [its repo](https://github.com/graasp/graasp-apps-query-client).

### queryClient.ts

```ts
import { configureQueryClient } from '@graasp/apps-query-client';

import notifier from '@/utils/notifier';

import { API_HOST, GRAASP_APP_KEY, MOCK_API, WS_HOST } from './env';

const {
  queryClient,
  QueryClientProvider,
  hooks,
  API_ROUTES,
  mutations,
  ReactQueryDevtools,
  QUERY_KEYS,
} = configureQueryClient({
  API_HOST,
  notifier,
  refetchOnWindowFocus: !import.meta.env.DEV,
  keepPreviousData: true,
  // avoid refetching when same data are closely fetched
  staleTime: 1000, // ms
  GRAASP_APP_KEY,
  isStandalone: MOCK_API,
  WS_HOST,
  enableWebsocket: true,
});

export {
  ReactQueryDevtools,
  queryClient,
  QueryClientProvider,
  hooks,
  mutations,
  API_ROUTES,
  QUERY_KEYS,
};
```

### Configuring the apps query client

The configure query client, let's breakdown the initial configuration passed to the function `configureQueryClient`:

```ts
configureQueryClient({
  API_HOST,
  notifier,
  refetchOnWindowFocus: !import.meta.env.DEV,
  keepPreviousData: true,
  // avoid refetching when same data are closely fetched
  staleTime: 1000, // ms
  GRAASP_APP_KEY,
  isStandalone: MOCK_API,
  WS_HOST,
  enableWebsocket: true,
});
```

- `API_HOST`: The default API host. This should be configured to point toward the Graasp API or your local development server.
- `notifier`: A function of type [`Notifier`](https://github.com/graasp/graasp-apps-query-client/blob/39ca322cca72cbc5245730600bfb844b2191c0a9/src/types.ts#L16) to process messages from the query client.
- `refetchOnWindowFocus`: The name is explicit.
- `keepPreviousData`: Keep current data when refetching new data.
- `staleTime`: Time during which the data cannot be refetched after a fetch.
- `GRAASP_APP_KEY`: The key of your application. This key must match the one in the database. Think about requesting one when you will deploy your app in production and use it on [graasp.org](https://graasp.org).
- `isStandalone`: If true, the query client will consider that the app **is not** embedded in another frontend such as the *Graasp Player* or *Graasp Builder*.
- `WS_HOST`: Provide the host for the websocket API.
- `enableWebsocket`: Enable the protocol for realtime notifications by the server through websockets.

### Using the apps query client

:::warning
Doc under construction.
:::
