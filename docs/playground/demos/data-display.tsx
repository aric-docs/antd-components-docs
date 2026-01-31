import React, { useState } from 'react';
import { AcTable, AcTree, AcCheckableTagList } from '@jswork/antd-components';

export default () => {
  const [treeSelectedKeys, setTreeSelectedKeys] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
  ];

  const data = [
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
    { key: '3', name: 'Joe Black', age: 28, address: 'Sidney No. 1 Lake Park' },
    { key: '4', name: 'Jon Snow', age: 35, address: 'Winterfell Castle' },
  ];

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
      children: [
        { title: 'Child 2-1', key: '2-1' },
        { title: 'Child 2-2', key: '2-2' },
      ],
    },
  ];

  const tags = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt'];

  return (
    <div style={{ padding: '24px' }}>
      <h2>Data Display Components</h2>

      <div style={{ marginBottom: '32px' }}>
        <h4>AcTable</h4>
        <AcTable
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
        />
      </div>

      <div style={{ marginBottom: '32px', display: 'flex', gap: '24px' }}>
        <div style={{ flex: 1 }}>
          <h4>AcTree</h4>
          <AcTree
            selectedKeys={treeSelectedKeys}
            onChange={(keys) => setTreeSelectedKeys(keys)}
            treeData={treeData}
            style={{ minHeight: '200px' }}
          />
          <p style={{ marginTop: '8px', color: '#999' }}>
            Selected: {treeSelectedKeys.join(', ') || '(none)'}
          </p>
        </div>

        <div style={{ flex: 1 }}>
          <h4>AcCheckableTagList</h4>
          <AcCheckableTagList
            value={selectedTags}
            onChange={(tags) => setSelectedTags(tags)}
            tags={tags}
          />
          <p style={{ marginTop: '8px', color: '#999' }}>
            Selected: {selectedTags.join(', ') || '(none)'}
          </p>
        </div>
      </div>
    </div>
  );
};
