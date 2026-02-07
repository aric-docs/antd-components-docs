import React, { useState } from 'react';
import { AcMarkdownEditor } from '@jswork/antd-components';

export default () => {
  const [markdown, setMarkdown] = useState(`# Welcome to AcMarkdownEditor

This is a powerful markdown editor with live preview.

## Features

- **Real-time preview** - See your markdown rendered instantly
- **Syntax highlighting** - Code blocks are highlighted
- **Easy to use** - Just type and see the results

## Code Example

\`\`\`javascript
function hello() {
  console.log('Hello, World!');
}
\`\`\`

## Lists

1. First item
2. Second item
3. Third item

## Try It Out

Start typing markdown on the left and see the preview on the right!
`);

  return (
    <div style={{ padding: '24px' }}>
      <h2>AcMarkdownEditor Demo</h2>

      <div style={{ marginBottom: '16px' }}>
        <h4>Markdown Editor with Live Preview</h4>
        <AcMarkdownEditor
          value={markdown}
          onChange={({ target }) => setMarkdown(target.value)}
          height="500px"
        />
        <p style={{ marginTop: '12px', color: '#666', fontSize: '14px' }}>
          Character count: {markdown.length} | Line count: {markdown.split('\n').length}
        </p>
      </div>

      <div style={{ marginTop: '24px', padding: '16px', background: '#f5f5f5', borderRadius: '4px' }}>
        <h4>Current Markdown Value:</h4>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '12px' }}>
          {markdown}
        </pre>
      </div>
    </div>
  );
};
