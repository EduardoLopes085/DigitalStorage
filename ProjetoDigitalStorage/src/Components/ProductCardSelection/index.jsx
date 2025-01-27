// Updated ProductCardSelection component to integrate both
import React, { useState } from 'react';
import SelectorSize from '../SelectorSize/index';
import SelectorColor from '../SelectorColor/index';

const ProductCardSelection = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <div>
      <SelectorSize selectedSize={selectedSize} onSizeChange={setSelectedSize} />
      <SelectorColor selectedColor={selectedColor} onColorChange={setSelectedColor} />
    </div>
  );
};

export default ProductCardSelection;




