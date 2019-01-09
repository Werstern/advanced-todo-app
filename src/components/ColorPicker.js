import React from 'react';

import './ColorPicker.css';

const ColorPicker = (props) => {

  const {
    colorPalette,
    onColorChange,
    chosenColor } = props;

  return (
    <div className="color-picker__container">
    {
      colorPalette.map(color =>
        <div
          className={`color-picker__color ${(chosenColor === color) ? 'active' : ''}`}
          style={{backgroundColor: color}}
          data-color={color}
          key={color}
          onClick={(e) => onColorChange(e.target.dataset.color)}
        ></div>
      )
    }
    </div>
  );

}

export default ColorPicker;
