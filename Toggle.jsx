import React, { useState } from 'react';

function ToggleBox() {
  const [bgColor, setBgColor] = useState('lightblue');

  const toggleColor = () => {
    setBgColor(prevColor => (prevColor === 'lightblue' ? 'lightcoral' : 'lightblue'));
  };

  return (
    <div>
      <div style={{ backgroundColor: bgColor, padding: '20px', margin: '20px', textAlign: 'center', justifyContent : 'center' }}>
        <p>The background color is: {bgColor}</p>
      </div>

      <button onClick={toggleColor}>
        Toggle Background Color
      </button>
    </div>
  );
}

export default ToggleBox;
