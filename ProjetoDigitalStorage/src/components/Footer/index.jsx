import './Footer.css'
import logoFooter from '../../assets/logo-footer.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'


function Footer(){

    return(
        
        <footer className='Footer'>

            <div className='FooterContainer' >
                <div className='FooterTop'>
                
                    <div className='FooterLogo'>
                
                        <img src={logoFooter} alt="" />
                
                        <p>Lorem ipsum dolor sit amet, consectetur adipliscing elit, sed do eiusmod tempor inciddidunt ut labore et dolore</p>
                
                        <span>
                
                            <img src={facebook} href='' alt="" />
                            <a href="https://www.instagram.com/digitalcollegebr/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram" />
                            </a>

                            <img src={twitter}  alt="" />
                        </span>
                    </div>
                
                    <div className='FooterInform'>
                
                        <span className='textTitle' >Informação</span>
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
                
                        <span className='textTitle' >Categorias</span>
                        <div className='textContent'>
                
                            <a href="">Camisestas</a>
                            <a href="">Calças</a>
                            <a href="">Bonés</a>
                            <a href="">Headphones</a>
                            <a href="">Tênis</a>
                
                        </div>
                    </div>
                
                    <div className='FooterContact' >
                        <span className='textTitle' >Contato</span>
                        <p className='textContent' >
                            Av. Santos Dumont, 1510 - 1°
                            andar Aldeota, Fortaleza -
                            CE, 60150-161
                            (85) 3051-3411
                        </p>
                    </div>
                
                </div>
            </div>

            <hr></hr>

            <div className='FooterBotton' >
                <h6>@2024 Digital College</h6>
            </div>

        </footer>


    )



} export default Footer;