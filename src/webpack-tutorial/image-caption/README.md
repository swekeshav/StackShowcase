# Image Caption App

Minimal webpack build that generates an image + caption block and exposes the widget to other Module Federation hosts.

## Architecture

- Entry point [`image-caption.js`](src/webpack-tutorial/image-caption/src/image-caption.js) registers the component and bootstraps styles.
- Component logic + SCSS live under [`components/image-caption/`](src/webpack-tutorial/image-caption/src/components/image-caption/image-caption.js) and render a body-level caption with dynamic text.
- Dev tooling is split across [`webpack.dev.config.js`](src/webpack-tutorial/image-caption/webpack.dev.config.js) and [`webpack.production.config.js`](src/webpack-tutorial/image-caption/webpack.production.config.js); both expose `ImageCaptionApp/ImageCaption` via `ModuleFederationPlugin` so the dashboard host can import it.

## Local Development

```bash
npm install
npm run dev
```

The dev server runs on $http://localhost:9003$ (see `devServer.port`) and writes `image-caption.html` into `dist/`. Hot reload is enabled so SCSS + markup edits appear instantly.

## Production Build

```bash
npm run build
```

Artifacts land inside `dist/` with hashed JS/CSS plus `remoteEntry.js`. To preview the compiled output:

```bash
npm start
```

This launches the lightweight Express host defined in [`src/server.js`](src/webpack-tutorial/image-caption/src/server.js) and serves the static assets with history fallback.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start webpack-dev-server with HMR + Module Federation exposure |
| `npm run build` | Emit optimized JS/CSS and `remoteEntry.js` into `dist/` |
| `npm start` | Serve the production bundle through Express |

## Troubleshooting

1. **Caption not styled** → ensure the consuming host imports `ImageCaptionApp/ImageCaption`; SCSS is bundled with the remote chunk.
2. **Remote fails to load** → verify `publicPath` matches $http://localhost:9003/$ and the dev server is running before launching the host.
3. **Port conflict** → adjust `devServer.port` inside the webpack config if another service already uses 9003.

## License

ISC
