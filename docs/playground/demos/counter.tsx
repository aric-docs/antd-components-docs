import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Interactive Counter</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#52c41a',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
      >
        Reset
      </button>
    </div>
  );
};
