// Component 1: Handles size selection
import React, { useState } from 'react';
import '../ProductCardSelection/ProductCardSelection.css';
import './selectorSize.css'

const SelectorSize = ({ selectedSize, onSizeChange }) => {
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
              onChange={() => onSizeChange(size)}
            />
            <label htmlFor={`size-${size}`} className="size-button">{size}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SelectorSize;