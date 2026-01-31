---
title: Getting Started
order: 0
---

# Getting Started

Dumi Docs Template is a starting point for building documentation sites with dumi. This template comes with pre-configured tooling and best practices.

## Prerequisites

- Node.js >= 22 (use [.nvmrc](/.nvmrc) with nvm)
- npm, yarn, or pnpm

## Installation

### Clone the Template

```bash
git clone https://github.com/afeiship/antd-components-docs.git
cd antd-components-docs
```

### Install Dependencies

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

## Development

### Start Dev Server

```bash
npm run dev
```

The documentation site will be available at `http://localhost:8000`

### Directory Structure

```
antd-components-docs
├── .dumirc.ts          # Dumi configuration
├── docs                # Documentation files
│   ├── index.md       # Home page
│   ├── guide          # Guide section
│   └── components     # Component documentation
├── public             # Static assets
│   └── logo.png       # Site logo
└── workbox-config.cjs # PWA configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run start` - Alias for `npm run dev`

## Configuration

The main configuration is in [`.dumirc.ts`](/.dumirc.ts):

```ts
import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/antd-components-docs/',           // Base path for deployment
  publicPath: '/antd-components-docs/',     // Public path for assets
  logo: '/antd-components-docs/logo.png',   // Site logo
  locales: [{ id: 'en-US', name: 'English' }],
  themeConfig: {
    name: 'Dumi Docs',           // Site name
    description: 'A dumi documentation template project.',
    nav: [...],                  // Navigation
    socialLinks: {
      github: 'https://github.com/afeiship/antd-components-docs',
    },
  },
});
```

## Adding Content

### Creating Pages

Create markdown files in the `docs` directory:

```markdown
---
title: My Page
order: 1
---

# My Page Content

Write your documentation here.
```

### Organizing Sections

Create subdirectories to organize your documentation:

```
docs/
├── guide/
│   ├── getting-started.md
│   ├── configuration.md
│   └── deployment.md
└── components/
    ├── index.md
    └── button.md
```

## Next Steps

- [Configuration](/guide/configuration) - Customize your documentation site
- [Deployment](/guide/deployment) - Deploy your documentation site
