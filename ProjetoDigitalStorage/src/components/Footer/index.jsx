import  '../Footer/Footer.css'
import logoFooter from '../../assets/logo-footer.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'


function Footer(){
    return (

    <footer className='Footer'>
        <div className='FooterTop'>
            <div className='FooterLogo'>
                <img className='logoFooter' src={logoFooter} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis aliquam necessitatibus dolorum sint perferendis ratione distinctio inventore, nihil, minima libero quod id enim sit soluta impedit quam ullam vero!</p>
                <div className='ajuste'>
                <div>
                    <img src={facebook} alt="" />
                    </div>
                    <div>
                    <img src={instagram} alt="" />
                    </div>
                    <div>
                    <img src={twitter} alt="" />
                    </div>
               
                </div>
            </div>

            <div className='a'>
            <h3>Informação</h3>
            <h5>Sobre Drip Store</h5>
            <h5>Segurança</h5>
            <h5>Wishlist</h5>
            <h5>Blog</h5>
            <h5>Trabalhe Conosco</h5>
            <h5>Meus Pedidos</h5>
           
            
             </div>
             <div className='a'>
          
             <h3>Informação</h3>
            <h5>Sobre Drip Store</h5>
            <h5>Segurança</h5>
            <h5>Wishlist</h5>
            <h5>Blog</h5>
            <h5>Trabalhe Conosco</h5>
            <h5>Meus Pedidos</h5>
             </div>
             <div className='a'>
          
             <h3>Informação</h3>
             <h5>Av. Santos Dumont, 1510 - 1</h5>
                            <h5>andar - Aldeota, Fortaleza - </h5>
                            <h5>CE, 60150-161</h5>
                            <h5>(85) 3051-3411 </h5>
            
            
             </div>
   
        </div>
        <hr></hr>
        <div className='FooterBottom'>
            <h6>@2024 Digita College</h6>
        </div>  
    </footer>



    )
}
    export default Footer;