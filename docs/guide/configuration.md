---
title: Configuration
order: 1
---

# Configuration

Learn how to customize your dumi documentation site.

## Dumi Configuration

The main configuration file is `.dumirc.ts` in the project root.

### Basic Configuration

```typescript
import { defineConfig } from 'dumi';

export default defineConfig({
  // Site base path (useful for GitHub Pages)
  base: '/antd-components-docs/',

  // Public path for assets
  publicPath: '/antd-components-docs/',

  // Site logo
  logo: '/antd-components-docs/logo.png',

  // Locales / languages
  locales: [{ id: 'en-US', name: 'English' }],

  // Resolve configuration
  resolve: {
    codeBlockMode: 'passive', // 'passive' | 'active'
  },

  // Theme configuration
  themeConfig: {
    name: 'Your Site Name',
    description: 'Your site description',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started',
      },
    ],
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/your-username/your-repo',
    },
  },

  // Custom styles
  styles: [
    `/* Your custom CSS here */`,
  ],
});
```

## Navigation

Configure the navigation menu in `themeConfig.nav`:

```typescript
nav: [
  {
    title: 'Guide',           // Nav item title
    link: '/guide/index',     // Link to page
  },
  {
    title: 'Components',
    link: '/components/index',
  },
  {
    title: 'External',
    link: 'https://example.com', // External links work too
  },
],
```

## Sidebar

Dumi automatically generates sidebars based on your file structure:

```
docs/
├── guide/
│   ├── getting-started.md    # /guide/getting-started
│   └── configuration.md      # /guide/configuration
└── components/
    └── index.md              # /components/index
```

## Custom Styles

Add custom styles in the `styles` option:

```typescript
styles: [
  `
  .dumi-default-sidebar {
    --dumi-sidebar-width: 320px;
  }
  `,
],
```

## Code Blocks

Configure code block behavior:

```typescript
resolve: {
  // 'active' - shows React Playground for React code
  // 'passive' - plain code blocks
  codeBlockMode: 'passive',
},
```

## Modes

Dumi supports different modes:

- **Doc Mode** - Standard documentation pages
- **Demo Mode** - Component demos with live preview
- **Site Mode** - General-purpose website

## More Configuration Options

See the [official dumi documentation](https://d.umijs.org/config) for all available options.
