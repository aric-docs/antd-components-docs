import React, { useState } from 'react';
import { AcUpload, AcUploadDragger, AcUploadPicture } from '@jswork/antd-components';
import type { UploadFile } from 'antd/es/upload/interface';

export default () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [draggerFiles, setDraggerFiles] = useState<UploadFile[]>([]);
  const [imageUrl, setImageUrl] = useState('');

  const uploadProps = {
    name: 'file',
    action: '/api/upload',
    onChange: ({ target }) => {
      if (target && target.value) {
        setFileList(target.value);
      }
    },
    value: fileList,
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <h2>Upload Components</h2>

      <div style={{ marginBottom: '32px' }}>
        <h4>AcUpload (Basic)</h4>
        <AcUpload
          value={fileList}
          onChange={({ target }) => setFileList(target.value)}
          action="/api/upload"
          multiple
        >
          <button style={{
            padding: '8px 16px',
            backgroundColor: '#1890ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>
            Click to Upload
          </button>
        </AcUpload>
        <p style={{ marginTop: '8px', color: '#999' }}>
          Files uploaded: {fileList.length}
        </p>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h4>AcUploadDragger</h4>
        <AcUploadDragger
          value={draggerFiles}
          onChange={({ target }) => setDraggerFiles(target.value)}
          action="/api/upload"
          style={{ padding: '20px' }}
        />
        <p style={{ marginTop: '8px', color: '#999' }}>
          Drag and drop files here or click to browse
        </p>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h4>AcUploadPicture</h4>
        <AcUploadPicture
          value={imageUrl}
          onChange={({ target }) => setImageUrl(target.value)}
          action="/api/upload"
        />
        <p style={{ marginTop: '8px', color: '#999' }}>
          Upload an image with preview
        </p>
      </div>
    </div>
  );
};
