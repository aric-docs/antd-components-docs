---
title: Date & Time Components
order: 3
---

# Date & Time Components

Date and time components provide enhanced date and time selection with built-in state management and standardized event handling.

## AcDatePicker

Date picker component with various format options.

### Basic Usage

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

### With Placeholder

```tsx
import { useState } from 'react';
import { AcDatePicker } from '@jswork/antd-components';

function Example() {
  const [date, setDate] = useState(null);

  return (
    <AcDatePicker
      value={date}
      onChange={({ target }) => setDate(target.value)}
      placeholder="Select a date"
      format="YYYY-MM-DD"
    />
  );
}
```

### Disabled Date

```tsx
import { useState } from 'react';
import { AcDatePicker } from '@jswork/antd-components';
import dayjs from 'dayjs';

function Example() {
  const [date, setDate] = useState(null);

  const disabledDate = (current) => {
    // Disable dates before today
    return current && current < dayjs().startOf('day');
  };

  return (
    <AcDatePicker
      value={date}
      onChange={({ target }) => setDate(target.value)}
      disabledDate={disabledDate}
      format="YYYY-MM-DD"
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Selected date | `Dayjs` | `null` |
| onChange | Callback when date changes | `({ target: { value } }) => void` | - |
| format | Date format | `string` | `'YYYY-MM-DD'` |
| placeholder | Picker placeholder | `string` | - |
| disabledDate | Function to disable dates | `(current) => boolean` | - |
| allowClear | Allow clearing the date | `boolean` | `true` |

---

## AcTimePicker

Time picker component for selecting time.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcTimePicker } from '@jswork/antd-components';

function Example() {
  const [time, setTime] = useState(null);

  return (
    <AcTimePicker
      value={time}
      onChange={({ target }) => setTime(target.value)}
      format="HH:mm"
    />
  );
}
```

### With Time Format

```tsx
import { useState } from 'react';
import { AcTimePicker } from '@jswork/antd-components';

function Example() {
  const [time, setTime] = useState(null);

  return (
    <AcTimePicker
      value={time}
      onChange={({ target }) => setTime(target.value)}
      format="HH:mm:ss"
      placeholder="Select time"
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Selected time | `Dayjs` | `null` |
| onChange | Callback when time changes | `({ target: { value } }) => void` | - |
| format | Time format | `string` | `'HH:mm'` |
| placeholder | Picker placeholder | `string` | - |
| allowClear | Allow clearing the time | `boolean` | `true` |

---

## AcRangePicker

Date range picker component for selecting a date range.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcRangePicker } from '@jswork/antd-components';

function Example() {
  const [dates, setDates] = useState(null);

  return (
    <AcRangePicker
      value={dates}
      onChange={(value) => setDates(value)}
      format="YYYY-MM-DD"
    />
  );
}
```

### With Placeholders

```tsx
import { useState } from 'react';
import { AcRangePicker } from '@jswork/antd-components';

function Example() {
  const [dates, setDates] = useState(null);

  return (
    <AcRangePicker
      value={dates}
      onChange={(value) => setDates(value)}
      placeholder={['Start date', 'End date']}
      format="YYYY-MM-DD"
    />
  );
}
```

### With Preset Ranges

```tsx
import { useState } from 'react';
import { AcRangePicker } from '@jswork/antd-components';
import dayjs from 'dayjs';

function Example() {
  const [dates, setDates] = useState(null);

  const ranges = {
    'Today': [dayjs(), dayjs()],
    'This Week': [dayjs().startOf('week'), dayjs().endOf('week')],
    'This Month': [dayjs().startOf('month'), dayjs().endOf('month')]
  };

  return (
    <AcRangePicker
      value={dates}
      onChange={(value) => setDates(value)}
      ranges={ranges}
      format="YYYY-MM-DD"
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Selected date range | `[Dayjs, Dayjs]` | `null` |
| onChange | Callback when range changes | `(value) => void` | - |
| format | Date format | `string` | `'YYYY-MM-DD'` |
| placeholder | Picker placeholders | `[string, string]` | - |
| ranges | Preset ranges | `Record<string, [Dayjs, Dayjs]>` | - |
| allowClear | Allow clearing the range | `boolean` | `true` |

---

## Common Props

All date and time components support common Ant Design DatePicker props:

- `disabled` - Disable the picker
- `size` - Size of the input (`'large'` | `'middle'` | `'small'`)
- `className` - Custom className
- `style` - Custom style
- `showTime` - Show time picker (for DatePicker and RangePicker)
- `bordered` - Show border

## Date Formatting

Use [dayjs](https://day.js.org/) format tokens:

| Token | Output | Description |
|-------|--------|-------------|
| `YYYY` | `2024` | 4-digit year |
| `YY` | `24` | 2-digit year |
| `MM` | `01-12` | Month with zero padding |
| `M` | `1-12` | Month without zero padding |
| `DD` | `01-31` | Day with zero padding |
| `D` | `1-31` | Day without zero padding |
| `HH` | `00-23` | Hour (24-hour) with zero padding |
| `H` | `0-23` | Hour (24-hour) without zero padding |
| `mm` | `00-59` | Minute with zero padding |
| `m` | `0-59` | Minute without zero padding |
| `ss` | `00-59` | Second with zero padding |
| `s` | `0-59` | Second without zero padding |

### Format Examples

```tsx
// Date only
format="YYYY-MM-DD"        // 2024-01-15
format="YYYY/MM/DD"        // 2024/01/15
format="MM-DD-YYYY"        // 01-15-2024

// Time only
format="HH:mm"             // 14:30
format="HH:mm:ss"          // 14:30:45
format="HH:mm:ss.SSS"      // 14:30:45.123

// Date and time
format="YYYY-MM-DD HH:mm"  // 2024-01-15 14:30
format="YYYY-MM-DDTHH:mm"  // 2024-01-15T14:30
```

## Related Components

- [Form Input Components](/components/form-input) - Input, Textarea, InputNumber, etc.
- [Selection Components](/components/selection) - Select, Radio, Checkbox, etc.
