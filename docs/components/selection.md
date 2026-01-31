---
title: Selection Components
order: 2
---

# Selection Components

Selection components provide various ways for users to select options from lists, with enhanced state management and standardized event handling.

## AcSelect

Enhanced select dropdown with async support.

### Basic Usage

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
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' }
      ]}
    />
  );
}
```

### With Placeholder

```tsx
import { useState } from 'react';
import { AcSelect } from '@jswork/antd-components';

function Example() {
  const [selected, setSelected] = useState(undefined);

  return (
    <AcSelect
      value={selected}
      onChange={({ target }) => setSelected(target.value)}
      placeholder="Please select an option"
      options={[
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' }
      ]}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Selected value | `string` \| `string[]` | - |
| onChange | Callback when selection changes | `({ target: { value } }) => void` | - |
| options | Array of options | `{ value, label }[]` | - |
| placeholder | Select placeholder | `string` | - |
| mode | Selection mode | `'single'` \| `'multiple'` \| `'tags'` | `'single'` |

---

## AcTreeSelect

Tree-structured select component for hierarchical data.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcTreeSelect } from '@jswork/antd-components';

function Example() {
  const [selected, setSelected] = useState(undefined);

  const treeData = [
    {
      title: 'Node1',
      value: '1',
      children: [
        { title: 'Child Node1', value: '1-1' },
        { title: 'Child Node2', value: '1-2' }
      ]
    },
    {
      title: 'Node2',
      value: '2'
    }
  ];

  return (
    <AcTreeSelect
      value={selected}
      onChange={(value) => setSelected(value)}
      treeData={treeData}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Selected value | `string` \| `string[]` | - |
| onChange | Callback when selection changes | `(value) => void` | - |
| treeData | Tree data structure | `TreeDataNode[]` | - |
| placeholder | Select placeholder | `string` | - |

---

## AcRadioGroup

Radio button group component for single selection.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcRadioGroup } from '@jswork/antd-components';

function Example() {
  const [selected, setSelected] = useState('a');

  return (
    <AcRadioGroup
      value={selected}
      onChange={({ target }) => setSelected(target.value)}
      options={[
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B' },
        { value: 'c', label: 'Option C' }
      ]}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Selected value | `string` | - |
| onChange | Callback when selection changes | `({ target: { value } }) => void` | - |
| options | Array of radio options | `{ value, label }[]` | - |
| direction | Layout direction | `'horizontal'` \| `'vertical'` | `'horizontal'` |

---

## AcCheckbox

Single checkbox component.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcCheckbox } from '@jswork/antd-components';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <AcCheckbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    >
      Accept terms and conditions
    </AcCheckbox>
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| checked | Checkbox state | `boolean` | `false` |
| onChange | Callback when state changes | `(e) => void` | - |
| children | Checkbox label | `ReactNode` | - |

---

## AcCheckboxGroup

Checkbox group component for multiple selections.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcCheckboxGroup } from '@jswork/antd-components';

function Example() {
  const [checkedValues, setCheckedValues] = useState([]);

  return (
    <AcCheckboxGroup
      value={checkedValues}
      onChange={(value) => setCheckedValues(value)}
      options={[
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' }
      ]}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Array of checked values | `string[]` | - |
| onChange | Callback when selection changes | `(value) => void` | - |
| options | Array of checkbox options | `{ value, label }[]` | - |
| direction | Layout direction | `'horizontal'` \| `'vertical'` | `'horizontal'` |

---

## AcSwitch

Toggle switch component for binary states.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcSwitch } from '@jswork/antd-components';

function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <AcSwitch
      checked={enabled}
      onChange={({ target }) => setEnabled(target.value)}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| checked | Switch state | `boolean` | `false` |
| onChange | Callback when state changes | `({ target: { value } }) => void` | - |
| disabled | Disable the switch | `boolean` | `false` |
| checkedChildren | Content when checked | `ReactNode` | - |
| unCheckedChildren | Content when unchecked | `ReactNode` | - |

---

## AcSlider

Single slider component for value selection.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcSlider } from '@jswork/antd-components';

function Example() {
  const [value, setValue] = useState(50);

  return (
    <AcSlider
      value={value}
      onChange={({ target }) => setValue(target.value)}
      min={0}
      max={100}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Slider value | `number` | - |
| onChange | Callback when value changes | `({ target: { value } }) => void` | - |
| min | Minimum value | `number` | `0` |
| max | Maximum value | `number` | `100` |
| step | Step value | `number` | `1` |

---

## AcSliderRange

Range slider component for selecting a value range.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcSliderRange } from '@jswork/antd-components';

function Example() {
  const [range, setRange] = useState([20, 80]);

  return (
    <AcSliderRange
      value={range}
      onChange={(value) => setRange(value)}
      min={0}
      max={100}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Range values [min, max] | `number[]` | - |
| onChange | Callback when range changes | `(value) => void` | - |
| min | Minimum value | `number` | `0` |
| max | Maximum value | `number` | `100` |
| step | Step value | `number` | `1` |

---

## AcRate

Star rating component.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcRate } from '@jswork/antd-components';

function Example() {
  const [rating, setRating] = useState(0);

  return (
    <AcRate
      value={rating}
      onChange={({ target }) => setRating(target.value)}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Rating value | `number` | `0` |
| onChange | Callback when rating changes | `({ target: { value } }) => void` | - |
| count | Number of stars | `number` | `5` |
| allowHalf | Allow half stars | `boolean` | `false` |

---

## AcTransfer

Transfer list component for moving items between lists.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcTransfer } from '@jswork/antd-components';

function Example() {
  const [targetKeys, setTargetKeys] = useState([]);

  const dataSource = [
    { key: '1', title: 'Item 1' },
    { key: '2', title: 'Item 2' },
    { key: '3', title: 'Item 3' }
  ];

  return (
    <AcTransfer
      value={targetKeys}
      onChange={(value) => setTargetKeys(value)}
      dataSource={dataSource}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Array of target keys | `string[]` | - |
| onChange | Callback when transfer changes | `(value) => void` | - |
| dataSource | Data source for transfer | `Array<{ key, title }>` | - |
| titles | Panel titles | `[string, string]` | - |

---

## Related Components

- [Form Input Components](/components/form-input) - Input, Textarea, InputNumber, etc.
- [Date & Time Components](/components/date-time) - DatePicker, TimePicker, etc.
