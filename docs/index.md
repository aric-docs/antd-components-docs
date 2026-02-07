---
title: antd-components
hero:
  title: ac-components
  description: A collection of wrapped and enhanced Ant Design components for React applications with state management, form integration, and improved UX
  actions:
    - text: Get Started
      link: /guide/getting-started
    - text: GitHub
      link: https://github.com/afeiship/antd-components
    - text: Live Preview
      link: https://afeiship.github.io/antd-components/
features:
  - title: Enhanced Ant Design
    emoji: 🎨
    description: Production-ready wrapper components built on top of Ant Design 5.x
  - title: State Management
    emoji: 🔄
    description: Built-in controlled component state handling with standardized event patterns
  - title: Form Integration
    emoji: 📝
    description: Compatible with @ebay/nice-form-react for schema-based form generation
  - title: TypeScript Support
    emoji: 🔒
    description: Full type definitions with exported prop types for better DX
  - title: Multiple Variants
    emoji: 🎯
    description: Many components provide both class and functional component variants
  - title: Production Ready
    emoji: 🚀
    description: Optimized for real-world applications with upload solutions and table utilities
---

## Quick Start

### Installation

```bash
npm install -S @jswork/antd-components
```

### Basic Usage

```tsx
import { AcDatePicker, AcInput } from '@jswork/antd-components';
import '@jswork/antd-components/dist/style.scss';

function App() {
  return (
    <div>
      <AcInput value={text} onChange={({ target }) => setText(target.value)} />
      <AcDatePicker
        value={date}
        onChange={({ target }) => setDate(target.value)}
      />
    </div>
  );
}
```

## Key Features

### Component Naming Convention

All components use the `Ac` prefix (e.g., `AcInput`, `AcDatePicker`) for easy identification:

```tsx
import {
  AcInput,
  AcSelect,
  AcDatePicker,
  AcUpload,
  AcTable,
} from '@jswork/antd-components';
```

### Standardized Event Pattern

Most components use a consistent event pattern for state management:

```tsx
// onChange receives { target: { value } }
onChange={({ target }) => {
  console.log(target.value); // New value
}}
```

### Import Options

```tsx
// Import all components
import { AcInput, AcDatePicker } from '@jswork/antd-components';

// Import individual component
import { AcInput } from '@jswork/antd-components/dist/input';

// Import prop types
import type { AcInputProps } from '@jswork/antd-components/dist/input';
```

## Documentation

- [Guide](/guide/getting-started) - Installation and setup instructions
- [Form Input Components](/components/form-input) - AcInput, AcTextarea, AcInputNumber, AcMarkdownEditor, and more
- [Selection Components](/components/selection) - AcSelect, AcTreeSelect, AcRadioGroup, and more
- [Date & Time Components](/components/date-time) - AcDatePicker, AcTimePicker, AcRangePicker
- [Upload Components](/components/upload) - AcUpload, AcUploadDragger, AcUploadPicture
- [Data Display Components](/components/data-display) - AcTable, AcTree, AcCardExtras
- [Tag Components](/components/tag-components) - AcCheckableTag, AcCheckableTagList, AcEditableTagGroup
- [Other Components](/components/other-components) - AcButton, AcSearch, AcAlert, and more

## Resources

- [Homepage](https://js.work) - Official project homepage
- [Live Preview](https://afeiship.github.io/antd-components/) - Interactive component showcase
- [GitHub Repository](https://github.com/afeiship/antd-components) - Source code and issues
- [NPM Package](https://www.npmjs.org/package/@jswork/antd-components) - Package information
