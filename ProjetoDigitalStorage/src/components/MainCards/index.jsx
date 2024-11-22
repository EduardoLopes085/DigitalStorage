import '../MainCards/MainCards.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainCards = () => {
  const [tenis, setTenis] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function carregarTenis() {
      try {
        const resposta = await axios.get('http://localhost:3000/teste');
        console.log('Resposta da API:', resposta.data);
        setTenis(resposta.data.data || []); // Garante que `tenis` seja sempre um array
      } catch (error) {
        console.error('Erro ao carregar os tênis:', error);
        setError('Não foi possível carregar os produtos.');
      } 
    }
    carregarTenis();
  }, []);

  

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="ProductsCard">
      <div className="ProductsCardContainer">
        <div className="HeaderCard">
          <h1>Produtos em alta</h1>
          <a href="/produtos">
            Ver todos <img src='' alt="Seta" />
          </a>
        </div>

        <div className="CardContainer">
          <div className="Row">
            {tenis.map((shoe) => (
              <div className="Card" key={shoe.id}>
                <div className="CardCenter">
                  <img
                    src={
                      shoe.images && shoe.images.length > 0
                        ? `${shoe.images[0].path}` // Ajuste para acessar a URL correta
                        : '/default-image.jpg' // Imagem padrão caso nenhuma esteja disponível
                    }
                    className="CardBackground"
                    alt={shoe.name || 'Imagem do produto'}
                  />
                  <div className="CardText">
                    <div className="NomeTenis">{shoe.name}</div>
                    <div className="DescricaoTenis">{shoe.description}</div>
                    <div className="Container_preco">
                      <div className="preco_traçado">
                      {`$ ${shoe.price}`}
                    
                      </div>
                      <div className="preco_desconto">
                        {`$ ${shoe.price_with_discount}`}`
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
