import './MainCards.css'

import arrow from '../../public/line-arrow.png'
import ProductCard from '../ProductCard';

function MainCards(){
    
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
    return(
        <div className="ProductsCard">

            <div className="ProductsCardContainer" >
                
                <div className='HeaderCard'>
                    <h1>Produtos em alta</h1>

                    <a href="/produtos"> ver todos <img src={arrow} alt="" /> </a>
                </div>
       
                <div className='CardContainer'>
                   
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




    )


} export default MainCards;


















