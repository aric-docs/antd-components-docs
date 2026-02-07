---
title: Other Components
order: 6
---

# Other Components

Additional utility and helper components for common UI patterns.

## AcButton / AcConfirmButton

Button components with confirmation support.

### AcButton

Basic button component with enhanced styling.

```tsx
import { AcButton } from '@jswork/antd-components';

function Example() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <AcButton type="primary" onClick={handleClick}>
      Click Me
    </AcButton>
  );
}
```

### AcConfirmButton

Button with confirmation dialog before action.

```tsx
import { AcConfirmButton } from '@jswork/antd-components';

function Example() {
  const handleDelete = () => {
    console.log('Confirmed delete');
  };

  return (
    <AcConfirmButton
      onConfirm={handleDelete}
      confirmTitle="Are you sure?"
      confirmDescription="This action cannot be undone."
      type="primary"
      danger
    >
      Delete
    </AcConfirmButton>
  );
}
```

### API

| Property           | Description                             | Type                                                     | Default     |
| ------------------ | --------------------------------------- | -------------------------------------------------------- | ----------- |
| onClick            | Button click handler                    | `() => void`                                             | -           |
| onConfirm          | Confirmation callback (AcConfirmButton) | `() => void`                                             | -           |
| confirmTitle       | Confirmation dialog title               | `string`                                                 | -           |
| confirmDescription | Confirmation dialog description         | `string`                                                 | -           |
| type               | Button type                             | `'primary' \| 'default' \| 'dashed' \| 'link' \| 'text'` | `'default'` |
| danger             | Show danger style                       | `boolean`                                                | `false`     |
| children           | Button content                          | `ReactNode`                                              | -           |

---

## AcSearch

Search input component with enhanced features.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcSearch } from '@jswork/antd-components';

function Example() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    console.log('Searching for:', value);
  };

  return (
    <AcSearch
      value={searchTerm}
      onChange={({ target }) => setSearchTerm(target.value)}
      onSearch={({ target }) => handleSearch(target.value)}
      placeholder="Search..."
    />
  );
}
```

### API

| Property    | Description                       | Type                              | Default |
| ----------- | --------------------------------- | --------------------------------- | ------- |
| value       | Search term                       | `string`                          | -       |
| onChange    | Callback when input changes       | `({ target: { value } }) => void` | -       |
| onSearch    | Callback when search is triggered | `({ target: { value } }) => void` | -       |
| placeholder | Input placeholder                 | `string`                          | -       |

---

## AcExtraSearch

Extended search component with URL sync support.

### Basic Usage

```tsx
import { AcExtraSearch } from '@jswork/antd-components';

function Example() {
  return (
    <AcExtraSearch
      name="search"
      queryKey="keywords"
      routerType="hash"
      placeholder="Search..."
    />
  );
}
```

### API

| Property    | Description             | Type                              | Default  |
| ----------- | ----------------------- | --------------------------------- | -------- |
| name        | Form field name         | `string`                          | -        |
| queryKey    | URL query parameter key | `string`                          | -        |
| routerType  | Router type             | `'hash' \| 'browser' \| 'memory'` | `'hash'` |
| placeholder | Input placeholder       | `string`                          | -        |

---

## AcAlert

Alert notification component for displaying messages.

### Basic Usage

```tsx
import { AcAlert } from '@jswork/antd-components';

function Example() {
  return (
    <AcAlert
      type="info"
      message="Alert message"
      description="Detailed description of the alert"
      showIcon
      closable
    />
  );
}
```

### API

| Property    | Description          | Type                                          | Default  |
| ----------- | -------------------- | --------------------------------------------- | -------- |
| type        | Alert type           | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` |
| message     | Alert message        | `string`                                      | -        |
| description | Detailed description | `string`                                      | -        |
| showIcon    | Show icon            | `boolean`                                     | `false`  |
| closable    | Allow closing        | `boolean`                                     | `false`  |

---

## AcBreadcrumb

Breadcrumb navigation component for showing page hierarchy.

### Basic Usage

```tsx
import { AcBreadcrumb } from '@jswork/antd-components';

function Example() {
  const items = [
    { title: 'Home', path: '/' },
    { title: 'Components', path: '/components' },
    { title: 'Form Input', path: '/components/form-input' },
  ];

  return <AcBreadcrumb items={items} />;
}
```

### API

| Property | Description      | Type                                     | Default |
| -------- | ---------------- | ---------------------------------------- | ------- |
| items    | Breadcrumb items | `Array<{ title: string; path: string }>` | -       |

---

## AcCodeFlask

Code editor component based on CodeFlask for code editing and display.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcCodeFlask } from '@jswork/antd-components';

function Example() {
  const [code, setCode] = useState(
    'function hello() {\n  console.log("Hello World");\n}',
  );

  return (
    <AcCodeFlask
      value={code}
      onChange={(newCode) => setCode(newCode)}
      language="javascript"
      lineNumbers
    />
  );
}
```

### API

| Property    | Description                | Type                     | Default        |
| ----------- | -------------------------- | ------------------------ | -------------- |
| value       | Code content               | `string`                 | -              |
| onChange    | Callback when code changes | `(code: string) => void` | -              |
| language    | Programming language       | `string`                 | `'javascript'` |
| lineNumbers | Show line numbers          | `boolean`                | `false`        |
| readOnly    | Read-only mode             | `boolean`                | `false`        |

---

## AcInteractiveList

Interactive list component with actions for each item.

### Basic Usage

```tsx
import { AcInteractiveList } from '@jswork/antd-components';

function Example() {
  const items = [
    { id: 1, title: 'Item 1', description: 'Description 1' },
    { id: 2, title: 'Item 2', description: 'Description 2' },
    { id: 3, title: 'Item 3', description: 'Description 3' },
  ];

  const handleAction = (item) => {
    console.log('Action on:', item);
  };

  return (
    <AcInteractiveList
      items={items}
      renderItem={(item) => (
        <div>
          <span>{item.title}</span>
          <button onClick={() => handleAction(item)}>Action</button>
        </div>
      )}
    />
  );
}
```

### API

| Property   | Description                   | Type                     | Default |
| ---------- | ----------------------------- | ------------------------ | ------- |
| items      | List items                    | `T[]`                    | -       |
| renderItem | Render function for each item | `(item: T) => ReactNode` | -       |

---

## AcCheckableDropdown

Dropdown with checkable options for multiple selections.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcCheckableDropdown } from '@jswork/antd-components';

function Example() {
  const [selectedItems, setSelectedItems] = useState(['item1']);

  const dropdownOptions = [
    { value: 'item1', label: 'Option 1' },
    { value: 'item2', label: 'Option 2' },
    { value: 'item3', label: 'Option 3' },
  ];

  return (
    <AcCheckableDropdown
      value={selectedItems}
      onChange={({ target }) => setSelectedItems(target.value)}
      items={dropdownOptions}
      buttonText="Select Options"
    />
  );
}
```

### API

| Property   | Description                     | Type                                      | Default |
| ---------- | ------------------------------- | ----------------------------------------- | ------- |
| value      | Selected item values            | `string[]`                                | -       |
| onChange   | Callback when selection changes | `({ target: { value } }) => void`         | -       |
| items      | Dropdown options                | `Array<{ value: string; label: string }>` | -       |
| buttonText | Button text                     | `string`                                  | -       |

---

## AcFormActions

Form action buttons component for submit/cancel actions.

### Basic Usage

```tsx
import { AcFormActions } from '@jswork/antd-components';

function Example() {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <AcFormActions
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      submitText="Save"
      cancelText="Cancel"
    />
  );
}
```

### API

| Property   | Description        | Type                     | Default     |
| ---------- | ------------------ | ------------------------ | ----------- |
| onSubmit   | Submit callback    | `() => void`             | -           |
| onCancel   | Cancel callback    | `() => void`             | -           |
| submitText | Submit button text | `string`                 | `'Submit'`  |
| cancelText | Cancel button text | `string`                 | `'Cancel'`  |
| submitType | Submit button type | `'primary' \| 'default'` | `'primary'` |

---

## AcPreSelect

Pre-selection component for advanced selection patterns with organized options.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcPreSelect } from '@jswork/antd-components';

function Example() {
  const [selection, setSelection] = useState('option1');

  const availableOptions = [
    { value: 'option1', label: 'Option 1', category: 'Category A' },
    { value: 'option2', label: 'Option 2', category: 'Category A' },
    { value: 'option3', label: 'Option 3', category: 'Category B' },
  ];

  return (
    <AcPreSelect
      value={selection}
      onChange={({ target }) => setSelection(target.value)}
      items={availableOptions}
      placeholder="Select an option..."
    />
  );
}
```

### API

| Property    | Description                     | Type                                                         | Default |
| ----------- | ------------------------------- | ------------------------------------------------------------ | ------- |
| value       | Selected value                  | `string`                                                     | -       |
| onChange    | Callback when selection changes | `({ target: { value } }) => void`                            | -       |
| items       | Available options               | `Array<{ value: string; label: string; category?: string }>` | -       |
| placeholder | Select placeholder              | `string`                                                     | -       |

---

## Related Components

- [Form Input Components](/components/form-input) - Input, Textarea, etc.
- [Selection Components](/components/selection) - Select, Radio, Checkbox, etc.
- [Data Display Components](/components/data-display) - Table, Tree, etc.
