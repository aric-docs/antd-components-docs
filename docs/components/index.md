---
title: Components Overview
order: 0
---

# Components

This section is for documenting your components.

## Structure

Organize your component documentation in this directory:

```
docs/
└── components/
    ├── index.md           # This file
    ├── button.md          # Button component docs
    ├── input.md           # Input component docs
    └── ...
```

## Component Documentation Template

```markdown
---
title: ComponentName
order: 1
---

# ComponentName

Brief description of the component.

## When To Use

- Use case 1
- Use case 2

## Examples

### Basic Usage

```tsx
import { ComponentName } from 'your-package';

<ComponentName />
```

## API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| prop1 | Description | `string` | - |
| prop2 | Description | `number` | `0` |
```

## Writing Component Docs

1. Create a markdown file for each component
2. Use frontmatter to set title and order
3. Include code examples with syntax highlighting
4. Document all props with a table

## Next Steps

- Explore specific component documentation
- Check out the [API Reference](/api)
