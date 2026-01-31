---
title: Form Input Components
order: 1
---

# Form Input Components

Form input components provide enhanced input fields with built-in state management and standardized event handling.

## AcInput

Enhanced input component with controlled state and autoComplete handling.

### Basic Usage

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

### With AutoComplete

```tsx
import { useState } from 'react';
import { AcInput } from '@jswork/antd-components';

function Example() {
  const [text, setText] = useState('');

  return (
    <AcInput
      value={text}
      onChange={({ target }) => setText(target.value)}
      autoComplete={true}
      placeholder="Type to search..."
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Input value | `string` | - |
| onChange | Callback when value changes | `({ target: { value } }) => void` | - |
| autoComplete | Enable autoComplete | `boolean` | `false` |
| placeholder | Input placeholder | `string` | - |

---

## AcTextarea

Textarea component with auto-resize support.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcTextarea } from '@jswork/antd-components';

function Example() {
  const [content, setContent] = useState('');

  return (
    <AcTextarea
      value={content}
      onChange={({ target }) => setContent(target.value)}
      rows={4}
      placeholder="Enter content..."
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Textarea value | `string` | - |
| onChange | Callback when value changes | `({ target: { value } }) => void` | - |
| rows | Number of rows | `number` | `4` |
| placeholder | Textarea placeholder | `string` | - |

---

## AcInputNumber

Number input with validation and formatting.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcInputNumber } from '@jswork/antd-components';

function Example() {
  const [number, setNumber] = useState(0);

  return (
    <AcInputNumber
      value={number}
      onChange={({ target }) => setNumber(target.value)}
      min={0}
      max={100}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Input value | `number` | - |
| onChange | Callback when value changes | `({ target: { value } }) => void` | - |
| min | Minimum value | `number` | - |
| max | Maximum value | `number` | - |
| step | Step value | `number` | `1` |

---

## AcInputCopyable

Input component with copy-to-clipboard functionality.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcInputCopyable } from '@jswork/antd-components';

function Example() {
  const [text, setText] = useState('');

  return (
    <AcInputCopyable
      value={text}
      onChange={({ target }) => setText(target.value)}
      placeholder="Enter text to copy..."
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Input value | `string` | - |
| onChange | Callback when value changes | `({ target: { value } }) => void` | - |
| placeholder | Input placeholder | `string` | - |

---

## AcInputToken

Token-based input for managing tags/keywords.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcInputToken } from '@jswork/antd-components';

function Example() {
  const [tokens, setTokens] = useState([]);

  return (
    <AcInputToken
      value={tokens}
      onChange={({ target }) => setTokens(target.value)}
      placeholder="Add tags..."
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Array of tokens | `string[]` | - |
| onChange | Callback when tokens change | `({ target: { value } }) => void` | - |
| placeholder | Input placeholder | `string` | - |

---

## AcInputHidden

Hidden input component for form data.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcInputHidden } from '@jswork/antd-components';

function Example() {
  const [hiddenValue, setHiddenValue] = useState('secret');

  return (
    <AcInputHidden
      value={hiddenValue}
      onChange={({ target }) => setHiddenValue(target.value)}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Hidden value | `string` | - |
| onChange | Callback when value changes | `({ target: { value } }) => void` | - |

---

## AcInputTags

Tag input component for managing multiple tags.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcInputTags } from '@jswork/antd-components';

function Example() {
  const [tags, setTags] = useState([]);

  return (
    <AcInputTags
      value={tags}
      onChange={({ target }) => setTags(target.value)}
      placeholder="Add tags..."
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Array of tags | `string[]` | - |
| onChange | Callback when tags change | `({ target: { value } }) => void` | - |
| placeholder | Input placeholder | `string` | - |

---

## AcColorPicker

Color picker component that returns hex color values.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcColorPicker } from '@jswork/antd-components';

function Example() {
  const [color, setColor] = useState('#ffcc00');

  return (
    <AcColorPicker
      value={color}
      onChange={({ target }) => setColor(target.value)}
      allowClear
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Hex color value (e.g., #ffcc00) | `string` | - |
| onChange | Callback when color changes | `({ target: { value } }) => void` | - |
| allowClear | Allow clearing the color | `boolean` | `false` |
| placeholder | Placeholder text | `string` | - |

---

## Related Components

- [Selection Components](/components/selection) - Select, Radio, Checkbox, etc.
- [Date & Time Components](/components/date-time) - DatePicker, TimePicker, etc.
