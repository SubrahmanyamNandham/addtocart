import React, { useState } from 'react';
import Points from './Points';
import './index.css'

const ProveWay = () => {
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [size1, setSize1] = useState("S");
  const [color1, setColor1] = useState("Black");
  const [size2, setSize2] = useState("S");
  const [color2, setColor2] = useState("");

  const pricing = {
    1: { discount: "10% Off", price: 10 },
    2: { discount: "20% Off", price: 18 },
    3: { discount: "30% Off", price: 24 },
  };

  return (
    <div>
     <div className="bogo-banner">
      <h2 className="bogo-title">YAY! It's BOGO</h2>
    </div>
    <div className='proveway'>
      <Points
        unit={1}
        discount={pricing[1].discount}
        price={pricing[1].price}
        isSelected={selectedUnit === 1}
        onClick={() => setSelectedUnit(1)}
        showDropdowns
        size1={size1}
        selectedUnit={selectedUnit}
        color1={color1}
        setSize1={setSize1}
        setColor1={setColor1}
        size2={size2}
        color2={color2}
        setSize2={setSize2}
        setColor2={setColor2}
      />
      <Points
        unit={2}
        discount={pricing[2].discount}
        price={pricing[2].price}
        isSelected={selectedUnit === 2}
        onClick={() => setSelectedUnit(2)}
        showDropdowns
        size1={size1}
        color1={color1}
        setSize1={setSize1}
        setColor1={setColor1}
        size2={size2}
        color2={color2}
        setSize2={setSize2}
        setColor2={setColor2}
      />
      <Points
        unit={3}
        discount={pricing[3].discount}
        price={pricing[3].price}
        isSelected={selectedUnit === 3}
        onClick={() => setSelectedUnit(3)}
        showDropdowns
        size1={size1}
        color1={color1}
        setSize1={setSize1}
        setColor1={setColor1}
        size2={size2}
        color2={color2}
        setSize2={setSize2}
        setColor2={setColor2}
      />
      <div className='summary'>
        <p className='freeDelivery'>Free Delivery</p>
        <p className='total'>Total: ${pricing[selectedUnit].price}.00 USD</p>
      </div>
      <button className="add-to-cart">+ Add to Cart</button>
    </div>
    
    <p className='pumper'>@ powered by pumper</p>
    </div>
  );
};

export default ProveWay;
