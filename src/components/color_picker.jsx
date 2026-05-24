import React, { useState } from 'react';
import './color_picker.css'

function color_picker(){
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', '#000000'];

  const handleColorClick = (color) => {
    setBackgroundColor(color);
  }
    return (
        <div className='color-picker-App' style={{backgroundColor}}>
      <h1 className='color-picker-title'>Color Picker</h1>
      <div className='color-palette'>
        {colors.map((color, index) => (
          <div
            key={index}
            className='color-box'
            style={{backgroundColor: color}}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>

      <div className='custom-color-picker'>
        <input type='color'
          value={backgroundColor}
          onChange={(e) => handleColorClick(e.target.value)}>
          </input>
      </div>
    </div>
    );
}

export default color_picker;