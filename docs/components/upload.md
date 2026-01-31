---
title: Upload Components
order: 4
---

# Upload Components

Upload components provide enhanced file upload functionality with various UI patterns including drag-and-drop, picture upload, and card-style uploads.

## AcUpload

Base upload component with enhanced features.

### Basic Usage

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

### With File Type Restriction

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
      accept=".jpg,.png,.pdf"
    >
      <button>Click to Upload</button>
    </AcUpload>
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Array of uploaded files | `any[]` | - |
| onChange | Callback when files change | `({ target: { value } }) => void` | - |
| action | Upload URL | `string` | - |
| accept | Accepted file types | `string` | - |
| multiple | Allow multiple files | `boolean` | `false` |
| maxCount | Maximum file count | `number` | - |
| name | File field name | `string` | `'file'` |
| headers | Upload request headers | `object` | - |
| data | Upload request data | `object` | - |

---

## AcUploadDragger

Drag-and-drop upload zone.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcUploadDragger } from '@jswork/antd-components';

function Example() {
  const [files, setFiles] = useState([]);

  return (
    <AcUploadDragger
      value={files}
      onChange={({ target }) => setFiles(target.value)}
      action="/api/upload"
    />
  );
}
```

### With Custom Content

```tsx
import { useState } from 'react';
import { AcUploadDragger } from '@jswork/antd-components';
import { InboxOutlined } from '@ant-design/icons';

function Example() {
  const [files, setFiles] = useState([]);

  return (
    <AcUploadDragger
      value={files}
      onChange={({ target }) => setFiles(target.value)}
      action="/api/upload"
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload.
      </p>
    </AcUploadDragger>
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Array of uploaded files | `any[]` | - |
| onChange | Callback when files change | `({ target: { value } }) => void` | - |
| action | Upload URL | `string` | - |
| accept | Accepted file types | `string` | - |
| multiple | Allow multiple files | `boolean` | `false` |
| maxCount | Maximum file count | `number` | - |
| height | Dragger height | `string` \| `number` | - |

---

## AcUploadPicture

Picture upload component with preview.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcUploadPicture } from '@jswork/antd-components';

function Example() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <AcUploadPicture
      value={imageUrl}
      onChange={({ target }) => setImageUrl(target.value)}
      action="/api/upload"
    />
  );
}
```

### With Size Limit

```tsx
import { useState } from 'react';
import { AcUploadPicture } from '@jswork/antd-components';

function Example() {
  const [imageUrl, setImageUrl] = useState('');

  const beforeUpload = (file) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      console.error('Image must be smaller than 2MB!');
    }
    return isLt2M;
  };

  return (
    <AcUploadPicture
      value={imageUrl}
      onChange={({ target }) => setImageUrl(target.value)}
      action="/api/upload"
      beforeUpload={beforeUpload}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Image URL | `string` | - |
| onChange | Callback when image changes | `({ target: { value } }) => void` | - |
| action | Upload URL | `string` | - |
| accept | Accepted image types | `string` | `'image/*'` |
| beforeUpload | Hook before upload | `(file) => boolean` | - |
| maxSize | Maximum file size in bytes | `number` | - |

---

## AcUploadPictureCard

Card-style picture upload component for multiple images.

### Basic Usage

```tsx
import { useState } from 'react';
import { AcUploadPictureCard } from '@jswork/antd-components';

function Example() {
  const [images, setImages] = useState([]);

  return (
    <AcUploadPictureCard
      value={images}
      onChange={(value) => setImages(value)}
      action="/api/upload"
    />
  );
}
```

### With Max Count

```tsx
import { useState } from 'react';
import { AcUploadPictureCard } from '@jswork/antd-components';

function Example() {
  const [images, setImages] = useState([]);

  return (
    <AcUploadPictureCard
      value={images}
      onChange={(value) => setImages(value)}
      action="/api/upload"
      maxCount={5}
    />
  );
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Array of image URLs | `string[]` | - |
| onChange | Callback when images change | `(value) => void` | - |
| action | Upload URL | `string` | - |
| accept | Accepted image types | `string` | `'image/*'` |
| maxCount | Maximum image count | `number` | - |
| listType | Upload list style | `'picture-card'` \| `'picture'` | `'picture-card'` |

---

## Common Upload Props

All upload components support these common props:

### Response Format

The upload action should return a response in this format:

```json
{
  "status": "success",
  "url": "https://example.com/uploaded-file.jpg"
}
```

### Custom Request

```tsx
import { useState } from 'react';
import { AcUpload } from '@jswork/antd-components';

function Example() {
  const [files, setFiles] = useState([]);

  const customRequest = (options) => {
    const { file, onSuccess, onError } = options;

    // Your custom upload logic
    fetch('/api/upload', {
      method: 'POST',
      body: file,
    })
    .then(response => response.json())
    .then(result => {
      onSuccess(result);
    })
    .catch(error => {
      onError(error);
    });
  };

  return (
    <AcUpload
      value={files}
      onChange={({ target }) => setFiles(target.value)}
      customRequest={customRequest}
    />
  );
}
```

### File Status

Upload files can have different statuses:

- `uploading` - File is being uploaded
- `done` - File uploaded successfully
- `error` - Upload failed

### Upload Events

```tsx
<AcUpload
  value={files}
  onChange={({ target }) => setFiles(target.value)}
  action="/api/upload"
  onProgress={(percent, file) => {
    console.log('Upload progress:', percent);
  }}
  onSuccess={(response, file) => {
    console.log('Upload success:', response);
  }}
  onError={(error, file) => {
    console.log('Upload error:', error);
  }}
/>
```

## Upload Best Practices

### 1. File Size Validation

```tsx
const beforeUpload = (file) => {
  const maxSize = 2 * 1024 * 1024; // 2MB
  if (file.size > maxSize) {
    console.error('File is too large!');
    return false;
  }
  return true;
};
```

### 2. File Type Validation

```tsx
<AcUpload
  accept=".jpg,.jpeg,.png"
  beforeUpload={(file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      console.error('You can only upload image files!');
      return false;
    }
    return true;
  }}
/>
```

### 3. Upload Progress

```tsx
const [progress, setProgress] = useState(0);

<AcUpload
  action="/api/upload"
  onProgress={(percent) => {
    setProgress(percent);
  }}
/>
```

## Related Components

- [Form Input Components](/components/form-input) - Input, Textarea, InputNumber, etc.
- [Data Display Components](/components/data-display) - Table, Tree, Card, etc.
