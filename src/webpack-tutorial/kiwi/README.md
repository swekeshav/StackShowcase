# Webpack Tutorial

A comprehensive webpack tutorial project demonstrating modern webpack configuration, build optimization, and development workflows.

## Overview

This project showcases various webpack features including:
- Multiple entry points
- Asset management (images, CSS, SCSS)
- JavaScript transpilation with Babel
- Handlebars template integration
- Code splitting and optimization
- Development and production configurations
- Webpack Dev Server with hot module replacement

## Project Structure

```
webpack-tutorial/
├── src/
│   ├── components/          # Reusable components
│   │   ├── heading/
│   │   ├── hello-world-button/
│   │   └── kiwi-image/
│   ├── hello-world.js      # Entry point for hello-world page
│   ├── kiwi.js             # Entry point for kiwi page
│   ├── page-template.hbs   # Handlebars template for HTML generation
│   └── server.js           # Express server for production
├── dist/                   # Build output directory
├── webpack.dev.config.js   # Development webpack configuration
├── webpack.production.config.js  # Production webpack configuration
└── package.json
```

## Features

### Build Configuration
- **Multiple Entry Points**: Separate bundles for `hello-world` and `kiwi` pages
- **Code Splitting**: Automatic chunk splitting for shared dependencies
- **Asset Optimization**: Image optimization with inline base64 for small files (< 8KB)
- **CSS Processing**: SCSS compilation with separate CSS extraction in production
- **JavaScript Transpilation**: Babel with preset-env for modern JavaScript support
- **Template Engine**: Handlebars for dynamic HTML generation

### Development Features
- **Hot Module Replacement**: Live reloading during development
- **Source Maps**: Enabled for debugging
- **Dev Server**: Webpack Dev Server on port 9000

### Production Features
- **Content Hashing**: Cache-busting with content hashes in filenames
- **CSS Extraction**: Separate CSS files for better caching
- **Code Minification**: Automatic minification in production mode
- **Runtime Chunk**: Separate runtime chunk for better caching

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:9000`

### Production Build

Build the project for production:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

### Production Server

Run the Express server to serve the production build:

```bash
npm start
```

## Available Scripts

- `npm run dev` - Start webpack dev server with hot reloading
- `npm run build` - Build for production with optimizations
- `npm start` - Start Express server for production build

## Technologies Used

### Core
- **Webpack 5** - Module bundler
- **Babel** - JavaScript compiler
- **Handlebars** - Template engine

### Loaders
- `babel-loader` - Transpile ES6+ JavaScript
- `css-loader` - Process CSS files
- `sass-loader` - Compile SCSS to CSS
- `style-loader` - Inject CSS into DOM (development)
- `handlebars-loader` - Process Handlebars templates

### Plugins
- `html-webpack-plugin` - Generate HTML files
- `mini-css-extract-plugin` - Extract CSS to separate files (production)
- `clean-webpack-plugin` - Clean output directory before builds

### Development Tools
- `webpack-dev-server` - Development server with HMR

## Configuration Details

### Development Configuration (`webpack.dev.config.js`)
- Mode: `development`
- Inline CSS injection with `style-loader`
- Source maps enabled
- Dev server on port 9000
- Hot module replacement enabled

### Production Configuration (`webpack.production.config.js`)
- Mode: `production`
- CSS extraction to separate files
- Content hashing for cache busting
- Code splitting with shared chunks
- Runtime chunk separation
- Minification enabled

## Entry Points

1. **hello-world**: Demonstrates basic component rendering
2. **kiwi**: Demonstrates image asset handling

## Output Files

### Development
- `hello-world.js` / `kiwi.js` - JavaScript bundles
- `hello-world.html` / `kiwi.html` - Generated HTML pages

### Production
- `hello-world.[hash].js` / `kiwi.[hash].js` - Hashed JavaScript bundles
- `hello-world.[hash].css` / `kiwi.[hash].css` - Hashed CSS files
- `runtime.[hash].js` - Runtime chunk
- Optimized image assets

## Learn More

This project serves as a learning resource for:
- Webpack configuration best practices
- Modern JavaScript build tooling
- Asset optimization strategies
- Development vs production workflows
- Code splitting and bundle optimization

## License

ISC

