import '../ProductCard/productCard.css'
import img from '../../public/collection-1.png'

function productCard(){
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
                        <h3>Tênis Nike Revolution 6 Next Nature Masculino </h3>
                        <p>Casual | Nike | REF:38416711 </p>
                        <p>estrelas</p>
                        <span>R$ 219,00</span>
                        <p>Desrição do produto</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>Tamanho</p>
                        <p>39 40 41 42 43</p>
                        <p>cor</p>
                        <p>azul salmon cinza roxo</p>
                        <button>comprar</button>
                    </div>
                
                </div>


            </div>

        </div>



    )
}




export default productCard;





