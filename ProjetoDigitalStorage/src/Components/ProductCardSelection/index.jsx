import '../ProductCard/productCard.css'
import React, { useState } from 'react';
import '../ProductCardSelection/ProductCardSelection.css'




const ProductCardSelection = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
      <p className="size-title">Tamanho</p>
      <div className="productSizes">
        {['39', '40', '41', '42', '43'].map((size) => (
          <React.Fragment key={size}>
            <input
              type="radio"
              id={`size-${size}`}
              name="size"
              className="size-radio"
              checked={selectedSize === size}
              onChange={() => handleSizeChange(size)}
            />
            <label htmlFor={`size-${size}`} className="size-button">{size}</label>
          </React.Fragment>
        ))}
      </div>

      <p className="color-title">cor</p>
      <div className="productColors">
        {[
          { color: 'azul', hex: '#6FEEFF' },
          { color: 'salmon', hex: '#FF6969' },
          { color: 'cinza', hex: '#5E5E5E' },
          { color: 'roxo', hex: '#6D70B7' }
        ].map(({ color, hex }) => (
          <React.Fragment key={color}>
            <input
              type="radio"
              id={`color-${color}`}
              name="color"
              className="color-radio"
              checked={selectedColor === color}
              onChange={() => handleColorChange(color)}
            />
            <label
              htmlFor={`color-${color}`}
              className="color-circle"
              style={{ backgroundColor: hex }}
            ></label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductCardSelection;





