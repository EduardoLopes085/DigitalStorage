import './productCard.css'
import img from '../../public/collection-1.png'
import React, { useState } from 'react';

import ProductCardSelection from '../ProductCardSelection';



function ProductOverview(){
    return(
        <div className="productCard">

            <div className="pCardContainer" >    

                <div className='productRoute' >
                    <p> <a href="">Home </a>/<a href=""> Produtos</a> / <a href="">Tênis</a> / <a href="">Tênis Nike Revolution 6 Next Nature Masculino</a>  </p>
                </div>

                <div className='productCardBuy'>

                    <div className='BuyCarroussel'>
                        
                        <img src={img} alt="" />
                    </div>
                
                    <div className='productDescription'>
                        
                        <h3 className='productName' >Tênis Nike Revolution 6 Next Nature Masculino </h3>
                        
                        <p className='productFilter' >Casual | Nike | REF:38416711 </p>
                        
                        <p className='productStars' >estrelas</p>
                        
                        <span className='productPrice'> <p className='priceWithDiscount' > R$219.00</p> <p className='price' >R$300.00</p> </span>
                        
                        <p className='productDescriptionTitle' >Desrição do produto</p>
                        
                        <p className='productDescriptionText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        
                        <div>
                            <ProductCardSelection/> 
                        </div>
                        
                        <button className='productButton'>comprar</button>

                    </div>
                
                </div>


            </div>

        </div>



    )
}




export default ProductOverview;





