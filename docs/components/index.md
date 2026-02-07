---
title: Components Overview
order: 0
---

# Components Overview

antd-components provides a comprehensive set of enhanced components built on top of Ant Design 5.x with improved state management, form integration, and UX patterns.

## Component Categories

### Form Input Components

Enhanced input components with built-in state management and standardized event handling.

- **[AcInput](/components/form-input#acinput)** - Enhanced input with autoComplete
- **[AcTextarea](/components/form-input#actextarea)** - Textarea with auto-resize support
- **[AcInputNumber](/components/form-input#acinputnumber)** - Number input with validation
- **[AcInputCopyable](/components/form-input#acinputcopyable)** - Input with copy-to-clipboard
- **[AcInputToken](/components/form-input#acinputtoken)** - Token-based input
- **[AcInputHidden](/components/form-input#acinputhidden)** - Hidden input for forms
- **[AcInputTags](/components/form-input#acinputtags)** - Tag input component
- **[AcColorPicker](/components/form-input#accolorpicker)** - Color picker (returns hex)

[View Documentation](/components/form-input)

### Selection Components

Components for selecting options from lists.

- **[AcSelect](/components/selection#acselect)** - Enhanced select dropdown
- **[AcTreeSelect](/components/selection#actreeselect)** - Tree-structured select
- **[AcRadioGroup](/components/selection#acradiogroup)** - Radio button group
- **[AcCheckbox](/components/selection#accheckbox)** - Single checkbox
- **[AcCheckboxGroup](/components/selection#accheckboxgroup)** - Checkbox group
- **[AcSwitch](/components/selection#acswitch)** - Toggle switch
- **[AcSlider](/components/selection#acslider)** - Single slider
- **[AcSliderRange](/components/selection#acsliderrange)** - Range slider
- **[AcRate](/components/selection#acrate)** - Star rating
- **[AcTransfer](/components/selection#actransfer)** - Transfer list

[View Documentation](/components/selection)

### Date & Time Components

Date and time selection components.

- **[AcDatePicker](/components/date-time#acdatepicker)** - Date picker
- **[AcTimePicker](/components/date-time#actimepicker)** - Time picker
- **[AcRangePicker](/components/date-time#acrangepicker)** - Date range picker

[View Documentation](/components/date-time)

### Upload Components

File upload components with various UI patterns.

- **[AcUpload](/components/upload#acupload)** - Base upload component
- **[AcUploadDragger](/components/upload#acuploaddragger)** - Drag-and-drop upload
- **[AcUploadPicture](/components/upload#acuploadpicture)** - Picture upload with preview
- **[AcUploadPictureCard](/components/upload#acuploadpicturecard)** - Card-style picture upload

[View Documentation](/components/upload)

### Data Display Components

Components for displaying and interacting with data.

- **[AcTable](/components/data-display#actable)** - Enhanced table
- **[AcTableLinks](/components/data-display#actablelinks)** - Table with link columns
- **[AcTableStatusSwitcher](/components/data-display#actablestatusswitcher)** - Table with status switcher
- **[AcTableToggleSwitcher](/components/data-display#actabletoggleswitcher)** - Table with toggle switcher
- **[AcTree](/components/data-display#actree)** - Tree component
- **[AcCardExtras](/components/data-display#accardextras)** - Card with extra actions

[View Documentation](/components/data-display)

### Tag Components

Tag components with various interaction patterns.

- **[AcCheckableTag](/components/tag-components#accheckabletag)** - Checkable tag
- **[AcCheckableTagList](/components/tag-components#accheckabletaglist)** - Checkable tag list
- **[AcEditableTagGroup](/components/tag-components#aceditabletaggroup)** - Editable tag group

[View Documentation](/components/tag-components)

### Other Components

Additional utility and helper components.

- **[AcButton](/components/other-components#acbutton)** - Button component
- **[AcConfirmButton](/components/other-components#acconfirmbutton)** - Button with confirmation
- **[AcSearch](/components/other-components#acsearch)** - Search input component
- **[AcExtraSearch](/components/other-components#acextrasearch)** - Extended search with URL sync
- **[AcAlert](/components/other-components#acalert)** - Alert notification component
- **[AcBreadcrumb](/components/other-components#acbreadcrumb)** - Breadcrumb navigation
- **[AcCodeFlask](/components/other-components#accodeflask)** - Code editor component
- **[AcInteractiveList](/components/other-components#acinteractivelist)** - Interactive list component
- **[AcCheckableDropdown](/components/other-components#accheckabledropdown)** - Dropdown with checkable options
- **[AcFormActions](/components/other-components#acformactions)** - Form action buttons component
- **[AcPreSelect](/components/other-components#acpreselect)** - Pre-selection component

[View Documentation](/components/other-components)

## Component Naming Convention

All components follow a consistent naming pattern:

```tsx
// Ac prefix for all components
import { AcInput, AcSelect, AcDatePicker } from '@jswork/antd-components';

// Functional component variants (Fc suffix)
import { AcInputFc } from '@jswork/antd-components';

// Prop types
import type { AcInputProps } from '@jswork/antd-components/dist/input';
```

## Standardized Event Pattern

Most components use a consistent event pattern:

```tsx
// onChange receives { target: { value } }
onChange={({ target }) => {
  console.log(target.value); // The new value
}}
```

## Form Integration

All form components integrate with `@ebay/nice-form-react`:

```tsx
import { NiceForm } from '@ebay/nice-form-react';
import { AcInput, AcSelect } from '@jswork/antd-components';

const schema = {
  properties: {
    username: {
      type: 'string',
      title: 'Username',
      component: 'ac-input',
    },
    role: {
      type: 'string',
      title: 'Role',
      component: 'ac-select',
      enum: ['admin', 'user', 'guest'],
    },
  },
};

function FormExample() {
  return (
    <NiceForm
      schema={schema}
      components={{
        'ac-input': AcInput,
        'ac-select': AcSelect,
      }}
    />
  );
}
```

## Import Options

```tsx
// Import all components
import { AcInput, AcSelect, AcDatePicker } from '@jswork/antd-components';

// Import individual component
import { AcInput } from '@jswork/antd-components/dist/input';

// Import with types
import { AcInput } from '@jswork/antd-components/dist/input';
import type { AcInputProps } from '@jswork/antd-components/dist/input';
```

## Related Resources

- [Getting Started](/guide/getting-started) - Installation and setup
- [Live Preview](https://afeiship.github.io/antd-components/) - Interactive component showcase
- [GitHub Repository](https://github.com/afeiship/antd-components) - Source code and issues
