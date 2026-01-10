# Dashboard Host

Module Federation host that stitches together the `HelloWorldApp` and `KiwiApp` remotes to render full micro front end experiences behind a simple navigation shell.

## Features

- [`src/dashboard.js`](src/webpack-tutorial/dashboard/src/dashboard.js) builds a runtime navigation model and lazily loads the remote pages based on the current route.
- [`components/navigation-bar/navigation-bar.js`](src/webpack-tutorial/dashboard/src/components/navigation-bar/navigation-bar.js) renders the minimal navigation shell and styles it with component-scoped SCSS.
- [`webpack.dev.config.js`](src/webpack-tutorial/dashboard/webpack.dev.config.js) configures the host to run on **<http://localhost:9000>** and registers the remotes:
  - `HelloWorldApp@http://localhost:9001/remoteEntry.js`
  - `KiwiApp@http://localhost:9002/remoteEntry.js`
- [`webpack.production.config.js`](src/webpack-tutorial/dashboard/webpack.production.config.js) mirrors the dev setup but emits hashed bundles and extracts CSS for cache-friendly deploys.

## Getting Started

```bash
npm install
npm run dev
```

This spins up `webpack-dev-server` on port 9000. Two additional remotes must be running locally:

1. `HelloWorldApp` (`src/webpack-tutorial/hello-world`, port 9001)
2. `KiwiApp` (`src/webpack-tutorial/kiwi`, port 9002)

The dev server writes `dashboard.html` to `dist/`. Use the navigation bar to switch between `/hello-world-page` and `/kiwi-page`; each route triggers a federated dynamic `import()`.

## Production Build

```bash
npm run build
```

Artifacts land in `dist/` and include hashed JS/CSS bundles plus `dashboard.html`. Serve them with any static host or use the lightweight Express server:

```bash
npm start
```

This executes [`src/server.js`](src/webpack-tutorial/dashboard/src/server.js) which proxies requests to the compiled assets and maintains history fallback so deep links work after reloads.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the host on port 9000 with HMR + Module Federation remotes |
| `npm run build` | Generate production bundles under `dist/` |
| `npm start` | Run the Express server that serves the production build |

## Troubleshooting

1. **404 when switching routes** → ensure `historyApiFallback` remains enabled in the dev config so `/hello-world-page` rewrites to `dashboard.html`.
2. **Remote not found errors** → confirm each remote dev server (ports 9001 & 9002) is running before starting the host.
3. **CORS/mixed content warnings** → host and remotes must all run over HTTP with matching protocols and accessible ports.

## License

ISC
