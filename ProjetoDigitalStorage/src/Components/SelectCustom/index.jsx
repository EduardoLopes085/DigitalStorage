import React, { useState } from "react";
import './SelectCustom.css'

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState(" mais relevante ");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="custom-select">
      <div className="custom-select-display">
        <span className="custom-select-label">Ordenar por: </span>
        <span className="custom-select-value">{selectedOption}</span>
      </div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="mais relevante"> Mais Relevante </option>
        <option value="menor preço"> Menor Preço </option>
        <option value="maior preço"> Maior Preço </option>
        <option value="A-Z"> A - Z </option>
        <option value="Z-A"> Z - A </option>
      </select>
      
    </div>
  );
};

export default CustomSelect;