# @iconify/vue Bare-Bones Demo

A minimal Vue 3 project demonstrating @iconify/vue usage.

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

## Fix for CORS Errors

This project now uses **locally installed icon sets** instead of fetching from CDN, which prevents CORS errors. The icon JSON files are bundled with your app, so no network requests are needed.

## What This Demonstrates

1. **Basic Icons** - Simple icon usage with default size
2. **Sized Icons** - Custom width/height props
3. **Colored Icons** - Using the color prop
4. **Different Icon Sets** - Multiple icon libraries in one project

## Icon Format

Icons use the format: `{prefix}:{icon-name}`

Examples:
- `mdi:home` - Material Design Icons
- `fa:user` - Font Awesome
- `bi:github` - Bootstrap Icons
- `heroicons:home` - Hero Icons

## Find More Icons

Browse all available icons at: https://icon-sets.iconify.design/