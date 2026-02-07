---
title: Tag Components
order: 5
---

# Tag Components

Tag components with various interaction patterns for managing selections and tags.

## AcCheckableTag

Checkable tag component for single selection.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcCheckableTag } from '@jswork/antd-components';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <AcCheckableTag
      value={checked}
      onChange={({ target }) => setChecked(target.value)}
    >
      Tag Label
    </AcCheckableTag>
  );
}
```

### API

| Property | Description                         | Type                              | Default |
| -------- | ----------------------------------- | --------------------------------- | ------- |
| value    | Checked state                       | `boolean`                         | -       |
| onChange | Callback when checked state changes | `({ target: { value } }) => void` | -       |
| children | Tag content                         | `ReactNode`                       | -       |

---

## AcCheckableTagList

Checkable tag list for multiple tag selection.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcCheckableTagList } from '@jswork/antd-components';

function Example() {
  const [selectedTags, setSelectedTags] = useState(['tag1']);

  const items = [
    { value: 'tag1', label: 'Tag1' },
    { value: 'tag2', label: 'Tag2' },
    { value: 'tag3', label: 'Tag3' },
  ];

  return (
    <AcCheckableTagList
      value={selectedTags}
      onChange={({ target }) => setSelectedTags(target.value)}
      items={items}
    />
  );
}
```

### API

| Property | Description                     | Type                                      | Default |
| -------- | ------------------------------- | ----------------------------------------- | ------- |
| value    | Selected tag values             | `string[]`                                | -       |
| onChange | Callback when selection changes | `({ target: { value } }) => void`         | -       |
| items    | Tag items                       | `Array<{ value: string; label: string }>` | -       |

---

## AcEditableTagGroup

Editable tag group for managing multiple tags with add/remove functionality.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcEditableTagGroup } from '@jswork/antd-components';

function Example() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Ant Design']);

  return (
    <AcEditableTagGroup
      value={tags}
      onChange={({ target }) => setTags(target.value)}
    />
  );
}
```

### API

| Property    | Description                    | Type                              | Default |
| ----------- | ------------------------------ | --------------------------------- | ------- |
| value       | Array of tags                  | `string[]`                        | -       |
| onChange    | Callback when tags change      | `({ target: { value } }) => void` | -       |
| placeholder | Input placeholder for new tags | `string`                          | -       |

---

## Related Components

- [Selection Components](/components/selection) - Select, Radio, Checkbox, etc.
- [Form Input Components](/components/form-input) - Input, Textarea, etc.
