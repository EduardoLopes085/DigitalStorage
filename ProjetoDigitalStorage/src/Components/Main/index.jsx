import '../Main/Main.css'

// import c1 from '../../public/collection-1.png'
// import c2 from '../../public/collection-2.png'
// import c3 from '../../public/collection-3.png'

import phone from '../../assets/headphoneGray.svg'
import tshirt from '../../assets/tshirtGray.svg'
import calca from '../../assets/calcaGray.svg'
import foot from '../../assets/footGray.svg'

function MainContent(){
    return(
        
        <main className="Main">
            <div className="MainContainer">


                <section className="CollectionTop">
                    
                    <h1>Coleções em destaque</h1>

                    <div className="CollectionImg" >
                        
                        <div className='CollectionCard1' >
                            <h1>30% OFF</h1>

                            <button>Comprar</button>
                       </div>

                       <div className='CollectionCard2'>
                            <h1>30% OFF</h1>

                            <button> Comprar </button>
                       </div>

                       <div className='CollectionCard3' >
                            <h1>30% OFF</h1>

                            <button> Comprar </button>
                       </div>



                    </div>

                </section>

                <section className="CollectionBotton" >

                    <div className='CollectionBottonContainer'>
                        
                        <div className='CollectionBottonContainerContent'>
                            
                            <h1>Coleções em destaque</h1>

                            <div className='ImgContainer' >
                                <div className='Icon'>
                                    <img src={tshirt} alt="" />
                                    <h1>Camisetas</h1>
                                </div>
                                
                                <div className='Icon' >
                                    <img src={calca} alt="" />
                                    <h1>Calças</h1>
                                </div>
                                
                                <div className='Icon' >
                                    <img src={calca} alt="" />
                                    <h1>Bones</h1>
                                </div>
                                
                                <div className='Icon' >
                                    <img src={phone} alt="" />
                                    <h1>Headphones</h1>
                                </div>
                                <div  className='Icon'>
                                    <img src={foot} alt="" />
                                    <h1>Tenis</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

            </div>

        </main>
    
    )


} export default MainContent;