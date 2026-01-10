# Hello World Remote

Standalone Hello World micro front end configured as a Module Federation remote that exposes UI primitives to other webpack hosts.

## Architecture

- Entry point [`hello-world.js`](src/webpack-tutorial/hello-world/src/hello-world.js) bootstraps the page, registers the `HelloWorldButton`, and wires SCSS + Handlebars assets.
- [`webpack.dev.config.js`](src/webpack-tutorial/hello-world/webpack.dev.config.js) serves the bundle on **<http://localhost:9001/>** and exposes the remote entry via `ModuleFederationPlugin` so the dashboard host can dynamically import `HelloWorldPage` and `HelloWorldButton`.
- [`webpack.production.config.js`](src/webpack-tutorial/hello-world/webpack.production.config.js) mirrors the dev setup but emits hashed filenames suitable for long‑term caching.

### Remote Interface

| Exposed module | File | Purpose |
| --- | --- | --- |
| `HelloWorldApp/HelloWorldButton` | [`components/hello-world-button/hello-world-button.js`](src/webpack-tutorial/hello-world/src/components/hello-world-button/hello-world-button.js) | Renders the styled CTA button used across hosts |
| `HelloWorldApp/HelloWorldPage` | [`components/hello-world-page/hello-world-page.js`](src/webpack-tutorial/hello-world/src/components/hello-world-page/hello-world-page.js) | Full page composition that mounts the heading + button |

Any host can consume the remote by declaring:

```js
new ModuleFederationPlugin({
  remotes: {
    HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
  },
})
```

## Local Development

```bash
npm install
npm run dev
```

Key behaviours:

- Dev server writes HTML to `dist/hello-world.html` so the remote entry is always available on refresh.
- SCSS is injected via `style-loader` for instant HMR feedback.
- Asset modules inline images < $8\text{KB}$ while larger files are emitted to `dist/assets`.

Visit `http://localhost:9001/hello-world.html` to verify the standalone build. When the dashboard (`localhost:9000`) is running, navigation to `/hello-world-page` lazy-loads this remote automatically.

## Production Build

```bash
npm run build
```

Outputs:

- `dist/hello-world.[contenthash].js` and `dist/hello-world.[contenthash].css`
- `dist/remoteEntry.js` for Module Federation consumers
- Static HTML generated via `HtmlWebpackPlugin`

To serve the optimized bundle together with its API mocks:

```bash
npm start
```

This command runs [`src/server.js`](src/webpack-tutorial/hello-world/src/server.js) and mounts the compiled assets on `http://localhost:9001`.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Launch webpack dev server with HMR on port 9001 |
| `npm run build` | Produce optimized production assets under `dist/` |
| `npm start` | Serve the production build via Express |

## Tech Stack

- **Webpack 5** with asset modules, SCSS pipeline, and Module Federation.
- **Babel** (`@babel/preset-env`) targeting modern evergreen browsers.
- **Handlebars** templates for HTML scaffolding.
- **Sass** for component-scoped styling.

## Troubleshooting

1. **Dashboard cannot fetch remote** → ensure Hello World dev server is running and that `publicPath` remains `http://localhost:9001/`.
2. **Styles missing inside host** → confirm the host imports the exposed component rather than duplicating markup; SCSS is bundled alongside the remote chunk.
3. **CORS/network errors** → both remote and host must run over HTTP (not file://); restart the dev servers if ports were already bound.

## License

ISC
