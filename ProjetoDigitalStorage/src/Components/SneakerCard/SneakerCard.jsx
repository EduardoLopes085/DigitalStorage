import '../SneakerCard/SneakerCard.css'

function SneakerCard(props) {
    return (
        <div className="Card">
            <div className="CardCenter">
                <img className="CardBackground" src={props.img} alt={props.name} />
                <div className="CardText">
                    <div>
                        <p>{props.name}</p>
                    </div>
                    <div>
                        {/* Exibindo o preço com desconto se existir, caso contrário, exibe o preço original */}
                        <p>
                            {props.discount < props.price 
                                ? <><span style={{textDecoration: 'line-through'}}>{props.price}</span> {props.discount}</> 
                                : props.price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SneakerCard;
