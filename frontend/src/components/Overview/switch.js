import React, { useState } from 'react';
import axios from 'axios';

const LightSwitchButton = () => {
  const [switchValue, setSwitchValue] = useState(0);

  const handleButtonClick = async () => {
    const newValue = switchValue === 1 ? 0 : 1;

    try {
      await axios.post('http://localhost:7000/data', {
        feed_id: 'ctlight-slash',
        value: newValue
      });
      console.log('POST request sent successfully');
      setSwitchValue(newValue);
    } catch (error) {
      console.error('Failed to send POST request:', error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {switchValue === 1 ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default LightSwitchButton;
