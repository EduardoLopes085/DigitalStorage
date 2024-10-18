import logo from '../../assets/logo-header.svg'
import '../Header/header.css'

function Header(){

    return(
        <header className='Header'>
        
            <div className='HeaderTop'>
                
                <a href=""> <img src={logo} alt="" />  </a>

                <nav className='NavTop'>
                    <a href="">pesquisa</a>
                    <a href="">cadaste-se</a>
                    <a href="">entrar</a>
                    <a href="">carrinho</a>
                </nav>

            </div>

                <div className='HeaderBotton'>
                    
                    <nav className='NavBotton'>
                
                        <a href="">Home</a>
                        <a href="">Produtos</a>
                        <a href="">Categorias</a>
                        <a href="">Meus Pedidos</a>

                    </nav>
                
            </div>

        </header>
    )


}export default Header;






























