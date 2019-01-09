import React from 'react';

import './Header.css';

const Header = (props) => {
  const {
    title,
    onBgChange,
    backgroundImage
   } = props;

  const backgrounds = [
    'background1.jpg',
    'background2.jpg',
    'background3.jpg',
    'background4.jpg',
    'background5.jpg',
    'background6.jpg',
    'background7.jpg',
    'background8.jpg'];

  return (
    <div className="header">
      <h2 className="app__header">{title}</h2>
      <select
        onChange={(e) => onBgChange(e.target.value)}
        value={backgroundImage}
        id="soflow-color"
      >
      {
        backgrounds.map(background => {
          return <option key={background} value={background}>
                  {background}
                 </option>
        })
      }
      </select>
    </div>
  );

}

export default Header;
