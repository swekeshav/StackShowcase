# Kiwi Remote

Image-focused micro front end that exposes a `KiwiPage` module over Module Federation so hosts can embed rich media content without duplicating build logic.

## Architecture

- Entry point [`kiwi.js`](src/webpack-tutorial/kiwi/src/kiwi.js) wires the page heading, SCSS, and kiwi image asset before mounting the component tree.
- [`webpack.dev.config.js`](src/webpack-tutorial/kiwi/webpack.dev.config.js) serves the remote on **<http://localhost:9002/>** and exposes `KiwiApp/KiwiPage` via `ModuleFederationPlugin`.
- [`webpack.production.config.js`](src/webpack-tutorial/kiwi/webpack.production.config.js) mirrors dev but emits hashed bundles + extracted CSS for production hosting.

### Remote Interface

| Exposed module | File | Purpose |
| --- | --- | --- |
| `KiwiApp/KiwiPage` | [`components/kiwi-page/kiwi-page.js`](src/webpack-tutorial/kiwi/src/components/kiwi-page/kiwi-page.js) | Renders the hero heading, descriptive copy, and optimized kiwi imagery |

Consumers attach the remote like this:

```js
new ModuleFederationPlugin({
  remotes: {
    KiwiApp: 'KiwiApp@http://localhost:9002/remoteEntry.js',
  },
})
```

## Local Development

```bash
npm install
npm run dev
```

Highlights:

- Dev server writes `kiwi.html` to `dist/` so the remote entry and assets are refreshed automatically.
- Asset modules inline small images (< $8\text{KB}$) and emit larger ones alongside hashes for cache safety.
- SCSS leverages `style-loader` for instant HMR, matching the Hello World remote for consistent styling behaviour.

Navigate to `http://localhost:9002/kiwi.html` to verify the standalone bundle. When the dashboard host (`localhost:9000`) routes to `/kiwi-page`, it lazily loads this remote via dynamic `import()`.

## Production Build

```bash
npm run build
```

The build emits:

- `dist/kiwi.[contenthash].js` and `dist/kiwi.[contenthash].css`
- `dist/remoteEntry.js` for Module Federation consumers
- Static HTML via `HtmlWebpackPlugin`

Serve the optimized output with:

```bash
npm start
```

[`src/server.js`](src/webpack-tutorial/kiwi/src/server.js) spins up the Express host on port 9002 and delivers the compiled assets with history fallback support.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Launch webpack dev server with HMR on port 9002 |
| `npm run build` | Generate optimized assets under `dist/` |
| `npm start` | Serve the production build via Express |

## Troubleshooting

1. **Dashboard fails to load kiwi page** → verify the Kiwi dev server is running and `publicPath` is `http://localhost:9002/`.
2. **Images missing inside host** → confirm consumers import `KiwiApp/KiwiPage`; the SCSS + assets are bundled with the remote chunk.
3. **Port already in use** → stop the previous dev server instance or change the dev server port inside the webpack config.

## License

ISC
