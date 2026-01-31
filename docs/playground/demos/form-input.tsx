import React, { useState } from 'react';
import { AcInput, AcTextarea, AcInputNumber, AcColorPicker } from '@jswork/antd-components';
import './form-input.less';

export default () => {
  const [text, setText] = useState('');
  const [content, setContent] = useState('');
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState('#1890ff');

  return (
    <div style={{ padding: '24px', maxWidth: '600px' }}>
      <h2>Form Input Components</h2>

      <div style={{ marginBottom: '16px' }}>
        <h4>AcInput</h4>
        <AcInput
          value={text}
          onChange={({ target }) => setText(target.value)}
          placeholder="Enter some text..."
          style={{ width: '100%' }}
        />
        <p>Value: {text || '(empty)'}</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h4>AcTextarea</h4>
        <AcTextarea
          value={content}
          onChange={({ target }) => setContent(target.value)}
          rows={4}
          placeholder="Enter multiple lines..."
          style={{ width: '100%' }}
        />
        <p>Characters: {content.length}</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h4>AcInputNumber</h4>
        <AcInputNumber
          value={number}
          onChange={({ target }) => setNumber(target.value)}
          min={0}
          max={100}
          style={{ width: '200px' }}
        />
        <p>Value: {number}</p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h4>AcColorPicker</h4>
        <AcColorPicker
          value={color}
          onChange={({ target }) => setColor(target.value)}
          allowClear
        />
        <p>Selected Color: <span style={{ color, fontWeight: 'bold' }}>{color}</span></p>
      </div>
    </div>
  );
};
