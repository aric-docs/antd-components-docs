---
title: Data Display Components
order: 5
---

# Data Display Components

Data display components provide enhanced ways to present and interact with data, including tables, trees, cards, and more.

## AcTable

Enhanced table component with additional features.

### Basic Usage

```tsx
import { AcTable } from '@jswork/antd-components';

function Example() {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
  ];

  const data = [
    { key: '1', name: 'John', age: 32, address: 'New York' },
    { key: '2', name: 'Jane', age: 28, address: 'London' },
    { key: '3', name: 'Bob', age: 45, address: 'Paris' },
  ];

  return <AcTable columns={columns} dataSource={data} />;
}
```

### API

| Property   | Description       | Type                             | Default |
| ---------- | ----------------- | -------------------------------- | ------- |
| columns    | Table columns     | `Column[]`                       | -       |
| dataSource | Table data        | `any[]`                          | -       |
| rowKey     | Unique row key    | `string` \| `(record) => string` | `'key'` |
| loading    | Loading state     | `boolean`                        | `false` |
| pagination | Pagination config | `object` \| `false`              | -       |

---

## AcTableLinks

Enhanced table with support for link columns.

### Basic Usage

```tsx
import { AcTableLinks } from '@jswork/antd-components';

function Example() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      link: true, // Enable link for this column
    },
    { title: 'Age', dataIndex: 'age', key: 'age' },
  ];

  const data = [
    { key: '1', name: 'John', age: 32 },
    { key: '2', name: 'Jane', age: 28 },
  ];

  const handleClick = (record) => {
    console.log('Clicked:', record);
  };

  return (
    <AcTableLinks
      columns={columns}
      dataSource={data}
      onLinkClick={handleClick}
    />
  );
}
```

### API

| Property    | Description                   | Type                             | Default |
| ----------- | ----------------------------- | -------------------------------- | ------- |
| columns     | Table columns                 | `Column[]`                       | -       |
| dataSource  | Table data                    | `any[]`                          | -       |
| onLinkClick | Callback when link is clicked | `(record) => void`               | -       |
| rowKey      | Unique row key                | `string` \| `(record) => string` | `'key'` |

---

## AcTableStatusSwitcher

Enhanced table with status switcher functionality.

### Basic Usage

```tsx
import { AcTableStatusSwitcher } from '@jswork/antd-components';

function Example() {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      statusSwitcher: true, // Enable status switcher
    },
  ];

  const data = [
    { key: '1', name: 'John', status: 'active' },
    { key: '2', name: 'Jane', status: 'inactive' },
  ];

  const handleStatusChange = (record, newStatus) => {
    console.log('Status changed:', record, newStatus);
  };

  return (
    <AcTableStatusSwitcher
      columns={columns}
      dataSource={data}
      onStatusChange={handleStatusChange}
    />
  );
}
```

### API

| Property       | Description                  | Type                             | Default |
| -------------- | ---------------------------- | -------------------------------- | ------- |
| columns        | Table columns                | `Column[]`                       | -       |
| dataSource     | Table data                   | `any[]`                          | -       |
| onStatusChange | Callback when status changes | `(record, status) => void`       | -       |
| rowKey         | Unique row key               | `string` \| `(record) => string` | `'key'` |

---

## AcTableToggleSwitcher

Enhanced table with toggle switcher functionality.

### Basic Usage

```tsx
import { AcTableToggleSwitcher } from '@jswork/antd-components';

function Example() {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Enabled',
      dataIndex: 'enabled',
      key: 'enabled',
      toggle: true, // Enable toggle switch
    },
  ];

  const data = [
    { key: '1', name: 'John', enabled: true },
    { key: '2', name: 'Jane', enabled: false },
  ];

  const handleToggle = (record, checked) => {
    console.log('Toggled:', record, checked);
  };

  return (
    <AcTableToggleSwitcher
      columns={columns}
      dataSource={data}
      onToggle={handleToggle}
    />
  );
}
```

### API

| Property   | Description                  | Type                             | Default |
| ---------- | ---------------------------- | -------------------------------- | ------- |
| columns    | Table columns                | `Column[]`                       | -       |
| dataSource | Table data                   | `any[]`                          | -       |
| onToggle   | Callback when toggle changes | `(record, checked) => void`      | -       |
| rowKey     | Unique row key               | `string` \| `(record) => string` | `'key'` |

---

## AcTree

Tree component for hierarchical data.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcTree } from '@jswork/antd-components';

function Example() {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const treeData = [
    {
      title: 'Parent 1',
      key: '1',
      children: [
        { title: 'Child 1-1', key: '1-1' },
        { title: 'Child 1-2', key: '1-2' },
      ],
    },
    {
      title: 'Parent 2',
      key: '2',
      children: [{ title: 'Child 2-1', key: '2-1' }],
    },
  ];

  return (
    <AcTree
      selectedKeys={selectedKeys}
      onChange={(keys) => setSelectedKeys(keys)}
      treeData={treeData}
    />
  );
}
```

### API

| Property     | Description                     | Type             | Default |
| ------------ | ------------------------------- | ---------------- | ------- |
| selectedKeys | Selected keys                   | `string[]`       | -       |
| onChange     | Callback when selection changes | `(keys) => void` | -       |
| treeData     | Tree data structure             | `TreeDataNode[]` | -       |
| checkable    | Show checkboxes                 | `boolean`        | `false` |
| expandedKeys | Expanded keys                   | `string[]`       | -       |

---

## AcCardExtras

Card component with extra actions and features.

### Basic Usage

```tsx
import { AcCardExtras } from '@jswork/antd-components';

function Example() {
  return (
    <AcCardExtras title="Card Title" extra={<a href="#">More</a>}>
      <p>Card content goes here.</p>
    </AcCardExtras>
  );
}
```

### With Actions

```tsx
import { AcCardExtras } from '@jswork/antd-components';

function Example() {
  const actions = [
    { icon: 'edit', onClick: () => console.log('Edit') },
    { icon: 'delete', onClick: () => console.log('Delete') },
  ];

  return (
    <AcCardExtras title="Card Title" actions={actions}>
      <p>Card content goes here.</p>
    </AcCardExtras>
  );
}
```

### API

| Property | Description                 | Type        | Default |
| -------- | --------------------------- | ----------- | ------- |
| title    | Card title                  | `ReactNode` | -       |
| extra    | Extra content in the header | `ReactNode` | -       |
| actions  | Action buttons              | `Action[]`  | -       |
| children | Card content                | `ReactNode` | -       |
| bordered | Show border                 | `boolean`   | `true`  |

---

## Related Components

- [Tag Components](/components/tag-components) - CheckableTag, CheckableTagList, EditableTagGroup
- [Form Input Components](/components/form-input) - Input, Textarea, InputNumber, etc.
- [Selection Components](/components/selection) - Select, Radio, Checkbox, etc.
