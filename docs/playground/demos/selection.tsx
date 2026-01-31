import React, { useState } from 'react';
import { AcSelect, AcRadioGroup, AcCheckboxGroup, AcSwitch, AcRate } from '@jswork/antd-components';

export default () => {
  const [selected, setSelected] = useState(undefined);
  const [radioValue, setRadioValue] = useState('a');
  const [checkedValues, setCheckedValues] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const [rating, setRating] = useState(0);

  const selectOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const radioOptions = [
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
    { value: 'c', label: 'Option C' },
  ];

  const checkboxOptions = [
    { value: '1', label: 'Checkbox 1' },
    { value: '2', label: 'Checkbox 2' },
    { value: '3', label: 'Checkbox 3' },
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '600px' }}>
      <h2>Selection Components</h2>

      <div style={{ marginBottom: '24px' }}>
        <h4>AcSelect</h4>
        <AcSelect
          value={selected}
          onChange={({ target }) => setSelected(target.value)}
          items={selectOptions}
          placeholder="Select an option"
          style={{ width: '100%' }}
        />
        <p>Selected: {selected || '(none)'}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4>AcRadioGroup</h4>
        <AcRadioGroup
          value={radioValue}
          onChange={({ target }) => setRadioValue(target.value)}
          items={radioOptions}
        />
        <p>Selected: {radioValue}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4>AcCheckboxGroup</h4>
        <AcCheckboxGroup
          value={checkedValues}
          onChange={(value) => setCheckedValues(value)}
          items={checkboxOptions}
        />
        <p>Checked: {(checkedValues || []).join(', ') || '(none)'}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4>AcSwitch</h4>
        <AcSwitch
          checked={enabled}
          onChange={({ target }) => setEnabled(target.value)}
        />
        <p>Status: {enabled ? 'Enabled' : 'Disabled'}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4>AcRate</h4>
        <AcRate
          value={rating}
          onChange={({ target }) => setRating(target.value)}
        />
        <p>Rating: {rating} / 5</p>
      </div>
    </div>
  );
};
