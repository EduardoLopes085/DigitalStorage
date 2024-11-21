import '../ProductFilter/ProductFilter.css'

import { useState } from 'react';

const Filtro = () => {
  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [genero, setGenero] = useState([]);
  const [estado, setEstado] = useState('');

  const handleCheckboxChange = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const handleRadioChange = (value) => {
    setEstado(value);
  };

  return (
    <div className="filtro">
      
      <div className='filterAlign'>
        
        <div>
          <h3>Filtrar por</h3>
          <div>
            <h4>Marca</h4>
            {['Adidas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma'].map((marca) => (
              <label key={marca}>
                <input
                  type="checkbox"
                  value={marca}
                  checked={marcas.includes(marca)}
                  onChange={() => handleCheckboxChange(marca, marcas, setMarcas)}
                />
                {marca}
              </label>
            ))}
          </div>
          <div>
            <h4>Categoria</h4>
            {['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'].map((categoria) => (
              <label key={categoria}>
                <input
                  type="checkbox"
                  value={categoria}
                  checked={categorias.includes(categoria)}
                  onChange={() => handleCheckboxChange(categoria, categorias, setCategorias)}
                />
                {categoria}
              </label>
            ))}
          </div>
          <div>
            <h4>Gênero</h4>
            {['Masculino', 'Feminino', 'Unisex'].map((generoItem) => (
              <label key={generoItem}>
                <input
                  type="checkbox"
                  value={generoItem}
                  checked={genero.includes(generoItem)}
                  onChange={() => handleCheckboxChange(generoItem, genero, setGenero)}
                />
                {generoItem}
              </label>
            ))}
          </div>
          <div>
            <h4>Estado</h4>
            {['Novo', 'Usado'].map((estadoItem) => (
              <label key={estadoItem}>
                <input
                  type="radio"
                  value={estadoItem}
                  checked={estado === estadoItem}
                  onChange={() => handleRadioChange(estadoItem)}
                />
                {estadoItem}
              </label>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Filtro;
