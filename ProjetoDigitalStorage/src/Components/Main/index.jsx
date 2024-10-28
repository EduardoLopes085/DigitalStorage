import '../Main/Main.css'

import c1 from '../../public/collection-1.png'
import c2 from '../../public/collection-2.png'
import c3 from '../../public/collection-3.png'

import phone from '../../assets/headphoneGray.svg'
import tshirt from '../../assets/tshirtGray.svg'
import calca from '../../assets/calcaGray.svg'
import foot from '../../assets/footGray.svg'

function MainContent(){
    return(
        
        <main className="Main">
            <div className="MainContainer">


                <section className="CollectionTop">
                    
                    <h1>coleções em destaque</h1>

                    <div className="CollectionImg" >
                        
                        <img src={c1} alt="" />

                        <img src={c2} alt="" />

                        <img src={c3} alt="" />

                    </div>

                </section>

                <section className="CollectionBotton" >

                    <h1>COLEÇÕES EM DESTAQUE</h1>


                    <div className='ImgContainer'>
                        
                        <div className='tshirt'>
                            <img src={tshirt} alt="" />
                        </div>

                        <div className='calca' >
                            <img src={calca} alt="" />
                        </div>

                        <div className='calca' >
                            <img src={calca} alt="" />
                        </div>

                        <div className='phone' >
                            <img src={phone} alt="" />
                        </div>

                        <div  className='foot'>
                            <img src={foot} alt="" />
                        </div>

                    </div>

                </section>

            </div>

        </main>
    
    )


} export default MainContent;