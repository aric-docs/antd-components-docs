---
title: Deployment
order: 2
---

# Deployment

Learn how to deploy your dumi documentation site.

## Build for Production

```bash
npm run build
```

This will:

1. Build your documentation site
2. Generate PWA service worker (via workbox)
3. Output to `dist/` directory

## Deployment Options

### GitHub Pages

1. Update `.dumirc.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  publicPath: '/your-repo-name/',
});
```

2. Build and deploy:

```bash
npm run build

# Deploy using gh-pages
npx gh-pages -d dist
```

Or add a deploy script to `package.json`:

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Netlify

1. Connect your repository to Netlify
2. Configure build settings:

```
Build command: npm run build
Publish directory: dist
```

3. Deploy automatically on push

### Vercel

1. Connect your repository to Vercel
2. Configure build settings:

```
Build command: npm run build
Output directory: dist
```

3. Deploy automatically on push

### Custom Server

Serve the `dist/` directory with any static file server:

```bash
# Using serve
npx serve dist

# Using http-server
npx http-server dist
```

## PWA Support

This template includes PWA support via workbox. The service worker is automatically generated during build.

### Configure Workbox

Edit `workbox-config.cjs`:

```javascript
module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,png,svg,json,txt,css,map}'],
  swDest: 'dist/sw.js',
  runtimeCaching: [
    // Add your caching strategies
  ],
};
```

## Environment Variables

You can use environment variables in your documentation:

```bash
# .env
MY_VARIABLE=value
```

Access in `.dumirc.ts`:

```typescript
export default defineConfig({
  themeConfig: {
    name: process.env.MY_VARIABLE,
  },
});
```

## Preview Before Deploy

```bash
npm run build
npm run preview
```

This serves the production build locally for testing.

## CI/CD

### GitHub Actions Example

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 22
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
