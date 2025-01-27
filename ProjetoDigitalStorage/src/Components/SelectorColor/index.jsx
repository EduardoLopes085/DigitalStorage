// Component 2: Handles color selection
import React from 'react';
import '../ProductCardSelection/ProductCardSelection.css';

const SelectorColor = ({ selectedColor, onColorChange }) => {
  return (
    <div>
      <p className="color-title">Cor</p>
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
              onChange={() => onColorChange(color)}
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

export default SelectorColor;

























