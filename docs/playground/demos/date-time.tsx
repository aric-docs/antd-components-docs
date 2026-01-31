import React, { useState } from 'react';
import { AcDatePicker, AcTimePicker, AcRangePicker } from '@jswork/antd-components';

export default () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [dateRange, setDateRange] = useState(null);

  return (
    <div style={{ padding: '24px', maxWidth: '600px' }}>
      <h2>Date & Time Components</h2>

      <div style={{ marginBottom: '24px' }}>
        <h4>AcDatePicker</h4>
        <AcDatePicker
          value={date}
          onChange={({ target }) => setDate(target.value)}
          format="YYYY-MM-DD"
          placeholder="Select a date"
          style={{ width: '100%' }}
        />
        {date && <p>Selected: {date.format('YYYY-MM-DD')}</p>}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4>AcTimePicker</h4>
        <AcTimePicker
          value={time}
          onChange={({ target }) => setTime(target.value)}
          format="HH:mm"
          placeholder="Select time"
          style={{ width: '100%' }}
        />
        {time && <p>Selected: {time.format('HH:mm')}</p>}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4>AcRangePicker</h4>
        <AcRangePicker
          value={dateRange}
          onChange={(value) => setDateRange(value)}
          format="YYYY-MM-DD"
          placeholder={['Start date', 'End date']}
          style={{ width: '100%' }}
        />
        {dateRange && dateRange[0] && dateRange[1] && (
          <p>
            Range: {dateRange[0].format('YYYY-MM-DD')} - {dateRange[1].format('YYYY-MM-DD')}
          </p>
        )}
      </div>
    </div>
  );
};
