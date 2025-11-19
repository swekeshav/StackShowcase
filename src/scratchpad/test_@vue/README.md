# Vue Basics - No Build Tools

A minimal Vue 3 project to understand Vue framework scaffolding **without** using build tools like Vite.

## What This Is

This is a bare-bones Vue 3 setup that runs directly in the browser using the global build. No bundlers, no transpilers, no complexity - just Vue and HTML.

## Project Structure

```
test_@vue/
├── index.html          # Main HTML file with Vue code
├── package.json        # Tracks Vue dependency
└── node_modules/       # Contains Vue library (via npm)
```

## How It Works

1. Vue is loaded from local `node_modules` (installed via npm)
2. The HTML file includes Vue using a `<script>` tag
3. Vue code is written inline in the HTML file
4. Opens directly in the browser - no dev server needed

## Setup

```bash
# Install dependencies
npm install

# Open in browser
# Just double-click index.html or use a simple server:
npx http-server
```

## Key Features

- ✅ **No build tools** - No Vite, Webpack, or Rollup
- ✅ **Local Vue** - Uses npm package instead of CDN for offline work
- ✅ **Minimal setup** - Just HTML and JavaScript
- ✅ **Learning-focused** - Understand Vue without tooling complexity

## Why No Build Tools?

This project demonstrates:
- How Vue works at its core
- The difference between development and production setups
- What build tools actually do (by not using them)

## Limitations

Without build tools, you cannot use:
- ❌ Single File Components (`.vue` files)
- ❌ Hot Module Replacement
- ❌ Modern ES6+ modules
- ❌ TypeScript
- ❌ Component-level CSS scoping

## When to Use Build Tools

For real projects, use `npm create vue@latest` with Vite to get:
- Single File Components
- Better developer experience
- Optimized production builds
- Modern JavaScript features

## Notes

- The CDN option is commented out in [`index.html`](index.html:3) - uncomment to use CDN instead of local package
- Current Vue version: `3.5.24`
- Works in any modern browser