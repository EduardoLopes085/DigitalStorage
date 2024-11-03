import tenis from '../../public/produc-image-1.jpeg'
import '../MainCards/MainCards.css'

import arrow from '../../public/line-arrow.png'

function MainCards(){
    return(
        <div className="ProductsCard">

            <div className="ProductsCardContainer" >
                
                <div className='HeaderCard'>
                    <h1>Produtos em alta</h1>

                    <a href=""> ver todos <img src={arrow} alt="" /> </a>
                </div>

                    

                <div className='CardContainer'>
                    <div className='Row'>

                        <div className="Card">
                                                   
                            <div className='CardCenter' >

                                {/* <div className='CardBackground'> </div> */}
                                <img className='CardBackground'  src={tenis} alt="" />
                                <div className='CardText' >
                                    <div>
                                        K-Swiss V8 - Masculino
                                    </div>
                                    <div>
                                        $200 - $100
                                    </div>
                                </div>

                            </div>



                        </div>

                        <div className="Card">
                        
                            <div className='CardCenter' >

                                {/* <div className='CardBackground'> </div> */}
                                <img className='CardBackground'  src={tenis} alt="" />
                                <div className='CardText' >
                                    <div>
                                        K-Swiss V8 - Masculino
                                    </div>
                                    <div>
                                        $200 - $100
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="Card">
                        
                            <div className='CardCenter' >

                                {/* <div className='CardBackground'> </div> */}
                                <img className='CardBackground'  src={tenis} alt="" />
                                <div className='CardText' >
                                    <div>
                                        K-Swiss V8 - Masculino
                                    </div>
                                    <div>
                                        $200 - $100
                                    </div>
                                </div>

                            </div>
                        
                        </div>


                        <div className="Card">
                        
                           <div className='CardCenter' >

                                {/* <div className='CardBackground'> </div> */}
                                <img className='CardBackground'  src={tenis} alt="" />
                                <div className='CardText' >
                                    <div>
                                        K-Swiss V8 - Masculino
                                    </div>
                                    <div>
                                        $200 - $100
                                    </div>
                                </div>

                            </div>
                        
                        </div>

                    </div>

                    <div className='Row' >
                        
                    <div className="Card">
                                                   
                                                   <div className='CardCenter' >
                       
                                                       {/* <div className='CardBackground'> </div> */}
                                                       <img className='CardBackground'  src={tenis} alt="" />
                                                       <div className='CardText' >
                                                           <div>
                                                               K-Swiss V8 - Masculino
                                                           </div>
                                                           <div>
                                                               $200 - $100
                                                           </div>
                                                       </div>
                       
                                                   </div>
                       
                       
                       
                                               </div>
                       
                                               <div className="Card">
                                               
                                                   <div className='CardCenter' >
                       
                                                       {/* <div className='CardBackground'> </div> */}
                                                       <img className='CardBackground'  src={tenis} alt="" />
                                                       <div className='CardText' >
                                                           <div>
                                                               K-Swiss V8 - Masculino
                                                           </div>
                                                           <div>
                                                               $200 - $100
                                                           </div>
                                                       </div>
                       
                                                   </div>
                                               </div>
                       
                                            <div className="Card">
                                               
                                                <div className='CardCenter' >
                       
                                                    {/* <div className='CardBackground'> </div> */}
                                                    <img className='CardBackground'  src={tenis} alt="" />
                                                    <div className='CardText' >
                                                        <div>
                                                            K-Swiss V8 - Masculino
                                                        </div>
                                                        <div>
                                                            $200 - $100
                                                        </div>
                                                    </div>
                       
                                                </div>
                                               
                                            </div>
                       
                       
                                            <div className="Card">
                                               
                                                <div className='CardCenter' >
                       
                                                    {/* <div className='CardBackground'> </div> */}
                                                    <img className='CardBackground'  src={tenis} alt="" />
                                                    <div className='CardText' >
                                                        <div>
                                                            K-Swiss V8 - Masculino
                                                        </div>
                                                        <div>
                                                            $200 - $100
                                                        </div>
                                                    </div>
                       
                                                </div>
                                               
                    </div>
                </div>



            </div>

                    
        </div>

    </div>




    )


} export default MainCards;


















