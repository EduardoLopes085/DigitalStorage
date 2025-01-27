import tenis from '../../public/Layer-2.png'
import './ProductCard.css'

function ProductCard(props) {
    return (
        <div className="Card">

            <div className='CardCenter' >

                <img className='CardBackground' src={props.img} alt="sneaker photo" />
                <div className='CardText' >
                    <div>
                        <p className='SneakerTitle'>{props.name} - {props.gender}</p>
                    </div>
                    <div>
                        <p className='SneakerPrice'>${props.price} - ${props.discount}</p>
                    </div>
                </div>

            </div>

        </div>



    );



}




export default ProductCard