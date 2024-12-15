import React from 'react';

import './index.css'

const Points = ({
  unit,
  discount,
  price,
  isSelected,
  onClick,
  showDropdowns= false,
  size1,
  color1,
  setSize1,
  setColor1,
  size2,
  color2,
  setSize2,
  setColor2,
  selectedUnit
}) => {
  return (
    <>
    <div className={`unit-option ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div>
      <input type="radio" checked={isSelected} readOnly />
      <label>
        <span className="unit-label">{unit} Unit</span>
        <span className="discount">{discount}</span>
      </label>
      
      {selectedUnit ===1 &&<p className='price'>Standard price</p> }
      </div>
      
      <span className="price">${price}.00 USD</span>
    </div>
          <div>
          {showDropdowns && isSelected && (
            <div class="dropdowns">
            <div class="header">
              <label>Size</label>
              <label>Colour</label>
            </div>
            <div class="dropdown">
              <span>#1</span>
              <select>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
              <select>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </div>
            <div class="dropdown">
              <span>#2</span>
              <select>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
              <select>
                <option value="">Select</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </div>
          </div>
          )}
          </div>
        </>
  );
};

export default Points;
