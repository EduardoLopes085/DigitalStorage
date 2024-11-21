import React, { useState, useEffect } from 'react';
import SneakerCard from '../SneakerCard/SneakerCard'; 
import '../SneakerCard/SneakerCard.css';
import '../SneakerCard/SneakerList.css';
import ProductFilter from '../ProductFilter/index';


function SneakerList() {
    const [shoes, setShoes] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    // useEffect para buscar os dados da API
    useEffect(() => {
        const fetchShoes = async () => {
            try {
                const response = await fetch('https://api-store-do1w.onrender.com/shoes'); 
                if (!response.ok) throw new Error('Erro ao carregar os dados');
                const data = await response.json(); 
                setShoes(data); 
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false);
            }
        };

        fetchShoes(); 
    }, []); 

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
                            id = {shoe.id}
                            key={shoe.id}  
                            name={shoe.nome} 
                            price={shoe.preco_original} 
                            discount={shoe.preco_desconto} 
                            img={shoe.imagem_url} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SneakerList;
