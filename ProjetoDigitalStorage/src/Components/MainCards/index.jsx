
import '../MainCards/MainCards.css'

import arrow from '../../public/line-arrow.png'
import SneakerList from '../SneakerCard/SneakerList';

function MainCards(){
    return(
        <div className="ProductsCard">

            <div className="ProductsCardContainer" >
                
                <div className='HeaderCard'>
                    <h1>Produtos em alta</h1>

                    <a href="http://localhost:5173/produtos"> ver todos <img src={arrow} alt="" /> </a>
                </div>

                    

           

                    
            <SneakerList/>
                        
           

                    
        </div>

    </div>




    )


} export default MainCards;


















