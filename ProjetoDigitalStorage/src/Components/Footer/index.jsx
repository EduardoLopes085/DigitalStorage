import '../Footer/Footer.css'
import logoFooter from '../../assets/logo-footer.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'


function Footer(){

    return(
        
        <footer className='Footer'>

            <div className='FooterTop'>
                
                <div className='FooterLogo'>
                    
                    <img src={logoFooter} alt="" />
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipliscing elit, sed do eiusmod tempor inciddidunt ut labore et dolore</p>
                    
                    <span>
                        
                        <img src={facebook} alt="" />

                        <img src={instagram} alt="" />

                        <img src={twitter} alt="" />

                    </span>

                </div>
                
                <div className='FooterInform'>
                    
                    <h1 className='textTitle' >Informação</h1>

                    <div className='textContent'>
                        
                        <a href="">Sobre DripStore</a>
                        <a href="">Segurança</a>
                        <a href="">Wishlist</a>
                        <a href="">Blog</a>
                        <a href="">Trabalhe conosco</a>
                        <a href="">Meus Pedidos</a>
                        
                    </div>

                </div>
                
                <div className='FooterCategory' >
                    
                    <h1 className='textTitle' >Categorias</h1>

                    <div className='textContent'>
                        
                        <a href="">Camisestas</a>
                        <a href="">Calças</a>
                        <a href="">Bonés</a>
                        <a href="">Headphones</a>
                        <a href="">Tênis</a>
                        
                    </div>

                </div>
                
                <div className='FooterContact' >
                    <h1 className='textTitle' >Contato</h1>

                    <p className='textContent' >
                        Av. Santos Dumont, 1510 - 1°
                        andar Aldeota, Fortaleza - 
                        CE, 60150-161
                        (85) 3051-3411
                    </p>

                </div>
            
            </div>

            <tr> </tr>

            <div className='FooterBotton' >
                <h1>@2024 Digital College</h1>
            </div>

        </footer>


    )



} export default Footer;