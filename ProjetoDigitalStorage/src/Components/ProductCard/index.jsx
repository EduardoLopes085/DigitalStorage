import React, { useState, useEffect } from 'react';
import '../ProductCard/productCard.css';
import { useParams } from 'react-router-dom';
import ProductCardSelection from '../ProductCardSelection';

function ProductCard() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);  // Estado para armazenar os dados do produto
  const [loading, setLoading] = useState(true);  // Estado para controle de carregamento
  const [error, setError] = useState(null);  // Estado para armazenar erros, caso haja

  useEffect(() => {
    // Fazendo a requisição para buscar o produto com o id
    fetch(`https://api-store-do1w.onrender.com/shoes?limit=1`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Produto não encontrado');
        }
        return res.json();
      })
      .then((json) => {
        // Verifique se o retorno é um array e acesse o primeiro item
        if (json && json.length > 0) {
          setProduct(json[0]);  // Armazena o primeiro produto no estado
        } else {
          throw new Error('Produto não encontrado na lista');
        }
        setLoading(false);  // Atualiza o estado de carregamento
      })
      .catch((err) => {
        setError(err.message);  // Caso haja um erro, armazena a mensagem de erro
        setLoading(false);
      });
  }, [id]);  // Recarrega quando o id mudar

  // Exibindo o componente enquanto carrega
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Exibindo mensagem de erro caso haja um erro
  if (error) {
    return <div>{`Erro: ${error}`}</div>;
  }

  return (
    <div className="productCard">
      <div className="pCardContainer">
        <div className='productRoute'>
          <p>
            <a href="">Home </a>/<a href=""> Produtos</a> / <a href="">Tênis</a> / <a href="">{product.nome}</a>
          </p>
        </div>

        <div className='productCardBuy'>
          <div className='BuyCarroussel'>
            {/* Imagem do produto */}
            <img src={product.imagem_url} alt={product.nome} />
          </div>

          <div className='productDescription'>
            {/* Nome do produto */}
            <h3 className='productName'>{product.nome}</h3>
            
            {/* Detalhes do produto */}
            <p className='productFilter'>{product.modelo} | {product.marca} | REF: {product.referencia}</p>
            
            {/* Avaliação do produto */}
            <p className='productStars'>⭐ {product.nota} estrelas</p>
            
            {/* Preço do produto */}
            <span className='productPrice'>
              <p className='priceWithDiscount'>R$ {product.preco_desconto}</p>
              <p className='price'>R$ {product.preco_original}</p>
            </span>

            <p className='productDescriptionTitle'>Descrição do produto</p>
            {/* Descrição do produto (não fornecido na API, você pode adicionar ou ajustar conforme necessário) */}
            <p className='productDescriptionText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div>
              <ProductCardSelection />
            </div>

            <button className='productButton'>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;