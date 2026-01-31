---
title: Getting Started
order: 0
---

# Getting Started

antd-components is a collection of wrapped and enhanced Ant Design components for React applications. It provides production-ready components with additional features such as state management, form integration, and improved UX patterns.

## Prerequisites

- Node.js >= 16
- React 18+
- Ant Design 5.x

## Installation

### Install Package

```bash
npm install -S @jswork/antd-components
```

### Peer Dependencies

The library requires these peer dependencies:

```bash
npm install -S antd @ant-design/icons @ebay/nice-form-react react react-dom react-router-dom
```

Or install all at once:

```bash
npm install -S @jswork/antd-components antd @ant-design/icons @ebay/nice-form-react react react-dom react-router-dom
```

## Setup

### 1. Import Styles

Import the styles in your application's entry point:

```tsx
// CSS
import '@jswork/antd-components/dist/style.css';

// or SCSS
import '@jswork/antd-components/dist/style.scss';
```

### 2. Import Components

You can import components in different ways:

#### Import All Components

```tsx
import { AcInput, AcDatePicker, AcSelect, AcButton } from '@jswork/antd-components';
import '@jswork/antd-components/dist/style.scss';

function App() {
  return (
    <div>
      <AcInput />
      <AcDatePicker />
    </div>
  );
}
```

#### Import Individual Component

```tsx
import { AcInput } from '@jswork/antd-components/dist/input';
```

#### Import with Types

```tsx
import { AcInput } from '@jswork/antd-components/dist/input';
import type { AcInputProps } from '@jswork/antd-components/dist/input';
```

## Quick Examples

### Basic Input

```tsx
import { useState } from 'react';
import { AcInput } from '@jswork/antd-components';

function Example() {
  const [text, setText] = useState('');

  return (
    <AcInput
      value={text}
      onChange={({ target }) => setText(target.value)}
      placeholder="Enter text..."
    />
  );
}
```

### Select with Options

```tsx
import { useState } from 'react';
import { AcSelect } from '@jswork/antd-components';

function Example() {
  const [selected, setSelected] = useState(undefined);

  return (
    <AcSelect
      value={selected}
      onChange={({ target }) => setSelected(target.value)}
      options={[
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' }
      ]}
    />
  );
}
```

### Date Picker

```tsx
import { useState } from 'react';
import { AcDatePicker } from '@jswork/antd-components';

function Example() {
  const [date, setDate] = useState(null);

  return (
    <AcDatePicker
      value={date}
      onChange={({ target }) => setDate(target.value)}
      format="YYYY-MM-DD"
    />
  );
}
```

### Upload Component

```tsx
import { useState } from 'react';
import { AcUpload } from '@jswork/antd-components';

function Example() {
  const [files, setFiles] = useState([]);

  return (
    <AcUpload
      value={files}
      onChange={({ target }) => setFiles(target.value)}
      action="/api/upload"
    />
  );
}
```

## Component Naming Convention

All components in antd-components follow a consistent naming pattern:

- **Ac Prefix**: All component names start with `Ac` (e.g., `AcInput`, `AcDatePicker`)
- **Fc Suffix**: Functional component variants use `Fc` suffix (e.g., `AcInputFc`)
- **Prop Types**: Each component exports its props type (e.g., `AcInputProps`)

```tsx
import {
  AcInput,           // Class component
  AcInputFc,         // Functional component variant
  type AcInputProps  // Props type definition
} from '@jswork/antd-components';
```

## Event Handling Pattern

Most components use a standardized event pattern for consistency:

```tsx
// onChange receives an object with target.value
onChange={({ target }) => {
  console.log(target.value); // The new value
}}

// This is similar to native DOM events
onChange={(event) => {
  console.log(event.target.value);
}}
```

## Form Integration

antd-components integrates with `@ebay/nice-form-react` for schema-based form generation:

```tsx
import { NiceForm } from '@ebay/nice-form-react';
import { AcInput, AcSelect, AcDatePicker } from '@jswork/antd-components';

const schema = {
  properties: {
    username: {
      type: 'string',
      title: 'Username',
      component: 'ac-input'
    },
    role: {
      type: 'string',
      title: 'Role',
      component: 'ac-select',
      enum: ['admin', 'user', 'guest']
    },
    birthDate: {
      type: 'string',
      title: 'Birth Date',
      component: 'ac-date-picker'
    }
  }
};

function FormExample() {
  return (
    <NiceForm
      schema={schema}
      components={{
        'ac-input': AcInput,
        'ac-select': AcSelect,
        'ac-date-picker': AcDatePicker
      }}
    />
  );
}
```

## Next Steps

- [Form Input Components](/components/form-input) - Explore input components
- [Selection Components](/components/selection) - Explore selection components
- [Date & Time Components](/components/date-time) - Explore date/time components
- [Upload Components](/components/upload) - Explore upload components
- [Data Display Components](/components/data-display) - Explore data display components
