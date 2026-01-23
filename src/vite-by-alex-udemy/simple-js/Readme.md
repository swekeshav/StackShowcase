Projects can be scaffolded using Vite with the command `npm create vite@latest`.
This command allows you to choose from multiple popular frontend frameworks (React, Vue, Svelte, etc.) and the language (JavaScript or TypeScript).

##### Execution Commands

- `npm run dev`: Starts a local development server with hot reloading.
- `npm run build`: Bundles and optimizes your app for production.
- `npm run preview`: Previews the production build locally before deployment.

### Vite Configuration

The `vite.config.js` file allows customization of the build process.

```javascript
// vite.config.js
export default defineConfig({
    build: {
        minify: false, // Disables minification to keep the output code readable for debugging/learning
    },
})
```

### Module Systems: CJS vs ESM

This project explores the differences between CommonJS (CJS) and ECMAScript Modules (ESM).

| Feature | CommonJS (CJS) | ECMAScript Modules (ESM) |
|---------|----------------|--------------------------|
| **Syntax** | `require()` / `module.exports` | `import` / `export` |
| **Loading** | Synchronous | Asynchronous |
| **Extensions**| `.cjs` (or `.js` if type is commonjs) | `.mjs`, `.js` (if type is module) |
| **Usage** | Traditional Node.js default | Modern standard for Browsers & Node.js |

**Example structure in this project:**

- `common/coolMath.cjs`: Uses CommonJS syntax.
- `esm/coolMath.js`: Uses ESM syntax (enabled by `"type": "module"` in `package.json`).
