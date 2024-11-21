import React, { useState, useEffect } from 'react';
import SneakerCard from '../SneakerCard/SneakerCard'; // Importando o componente de card
import '../SneakerCard/SneakerCard.css';
import '../SneakerCard/SneakerList.css';
import ProductFilter from '../ProductFilter/index';


function SneakerList() {
    const [shoes, setShoes] = useState([]);  // Estado para armazenar os dados dos tênis
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState(null);  // Estado para armazenar possíveis erros

    // useEffect para buscar os dados da API
    useEffect(() => {
        const fetchShoes = async () => {
            try {
                const response = await fetch('https://api-store-do1w.onrender.com/shoes'); // URL da API
                if (!response.ok) throw new Error('Erro ao carregar os dados');
                const data = await response.json(); // Convertendo a resposta para JSON
                setShoes(data); // Atualizando o estado com os dados recebidos
            } catch (err) {
                setError(err.message); // Se ocorrer erro, atualiza o estado de erro
            } finally {
                setLoading(false); // Atualiza o estado de carregamento quando a requisição terminar
            }
        };

        fetchShoes(); // Chama a função para buscar os dados
    }, []); // O array vazio significa que o efeito roda uma vez, quando o componente é montado

    // Renderização condicional com base no estado
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        
        <div className='SneakerContainer'>
            
            <div className='FilterSnikersList'>
                
                <ProductFilter/>
                
                <div className="SneakerList">
                    {shoes.map((shoe) => (
                        <SneakerCard
                            key={shoe.id}  // Usando o id único de cada tênis
                            name={shoe.nome} // Passando o nome
                            price={shoe.preco_original} // Passando o preço original
                            discount={shoe.preco_desconto} // Passando o preço com desconto
                            img={shoe.imagem_url} // Passando a imagem
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SneakerList;
