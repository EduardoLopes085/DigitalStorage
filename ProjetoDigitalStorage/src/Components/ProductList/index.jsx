import tenis from '../../public/Layer-2.png';
import arrow from '../../public/line-arrow.png';

import SelectCustom from '../SelectCustom/index'
import ProductCard from '../ProductCard';

import './productList.css'

function ProductsList() {
    const sneakers = [
        { img: '/Layer-2.png', name: 'K-Swiss V8', gender: 'masculino', price: 200, discount: 100 },
        { img: '/Layer-2.png', name: 'Nike Revolution 6 Next Nature', gender: 'masculino', price: 319.99, discount: 219.99 },
        { img: '/Layer-2.png', name: 'Adidas Ultraboost Light', gender: 'feminino', price: 599.99, discount: 499.99 },
        { img: '/Layer-2.png', name: 'Puma RS-X', gender: 'masculino', price: 399.99, discount: 349.99 },
        { img: '/Layer-2.png', name: 'Asics Gel-Nimbus 25', gender: 'feminino', price: 749.99, discount: 649.99 },
        { img: '/Layer-2.png', name: 'Reebok Nano X3', gender: 'masculino', price: 499.99, discount: 449.99 },
        { img: '/Layer-2.png', name: 'Mizuno Wave Prophecy 11', gender: 'feminino', price: 999.99, discount: 899.99 },
        { img: '/Layer-2.png', name: 'Fila KR5', gender: 'masculino', price: 249.99, discount: 199.99 },
    ];   
    
    
    
    return (
        <div className='Products'>

            <div className='ProductsContainer'>

                <div className='ProductsPageHeader'>
                    <div className='ProductsResults'>
                        <p>Resultados para "Tênis"  </p>
                        <span> - </span>
                        <span className='FindItens'> 389 produtos </span>
                    </div>


                    <SelectCustom/>

                </div>

                <div className='ListAllProducts'>
                    <div className='ProductsFilter'>
                        <div>
                            <h1>Filtrar por: </h1>
                        </div>

                        <div className="BrandFilter">
                            <fieldset>
                                <legend>Marca</legend>

                                <div>
                                    <input type="checkbox" name="brand" id="brand-adidas" value="adidas" />
                                    <label htmlFor="brand-adidas">Adidas</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="brand" id="brand-balenciaga" value="balenciaga" />
                                    <label htmlFor="brand-balenciaga">Balenciaga</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="brand" id="brand-kswiss" value="kswiss" />
                                    <label htmlFor="brand-kswiss">K-Swis</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="brand" id="brand-nike" value="nike" />
                                    <label htmlFor="brand-nike">Nike</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="brand" id="brand-puma" value="puma" />
                                    <label htmlFor="brand-puma">Puma</label>
                                </div>
                            </fieldset>
                        </div>

                        <div className="CategoryFilter">
                            <fieldset>
                                <legend>Categoria</legend>

                                <div>
                                    <input type="checkbox" name="category" id="category-esporte-lazer" value="esporte-lazer" />
                                    <label htmlFor="category-esporte-lazer">Esporte e Lazer</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="category" id="category-casual" value="casual" />
                                    <label htmlFor="category-casual">Casual</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="category" id="category-utilitario" value="utilitario" />
                                    <label htmlFor="category-utilitario">Utilitário</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="category" id="category-corrida" value="corrida" />
                                    <label htmlFor="category-corrida">Corrida</label>
                                </div>
                            </fieldset>
                        </div>

                        <div className="GenderFilter">
                            <fieldset>
                                <legend>Gênero</legend>

                                <div>
                                    <input type="checkbox" name="gender" id="gender-masculino" value="masculino" />
                                    <label htmlFor="gender-masculino">Masculino</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="gender" id="gender-feminino" value="feminino" />
                                    <label htmlFor="gender-feminino">Feminino</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="gender" id="gender-unisex" value="unisex" />
                                    <label htmlFor="gender-unisex">Unisex</label>
                                </div>
                            </fieldset>
                        </div>

                    </div>

                    <div className='ShowAllProducts'>
                        
                    {sneakers.map((sneaker, index) => (
                        <ProductCard 
                        key = {index}
                        img = {sneaker.img}
                        name = {sneaker.name}
                        gender = {sneaker.gender}
                        price = {sneaker.price}
                        discount = {sneaker.discount}                        
                        />
                    ))}

                    </div>
                </div>



            </div>


        </div>
    )


} export default ProductsList;


















