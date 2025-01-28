import { useNavigate } from 'react-router-dom';
import tenis from '../../public/Layer-2.png'
import './ProductCard.css'

function ProductCard(props) {
    const navigate = useNavigate()
    return (
        <div className="Card" onClick={() => navigate('/sneaker')}>

            <div className='CardCenter'>

                <img className='CardBackground' src={props.img} alt="sneaker photo" />
                <div className='CardText' >
                    <div>
                        <p className='SneakerTitle'>{props.name} - {props.gender}</p>
                    </div>
                    <div className='SneakerPrice'>
                        <p className='SneakerOriginalPrice'> ${props.price}</p>   <p className='SneakerDiscountPrice'>${props.discount}</p> 
                    </div>
                </div>

            </div>

        </div>



    );



}




export default ProductCard