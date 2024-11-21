import logo from '../../assets/logo-header.svg'
import cart from '../../assets/mini-cart.svg'
import '../Header/header.css'
import { Link } from 'react-router-dom';

function Header(){

    return(
        <header className='Header'>
        
            <div className='HeaderContainer'>
                <div className='HeaderTop'>
                
                    <a href="http://localhost:5173/"> <img src={logo} alt="" />  </a>
                    <nav className='NavTop'>
                        <input className='SearchAreaHeader' type="text" placeholder='Pesquisar produto...' />
                        <a className='NavTopCadastrese'  href="">Cadastre-se</a>
                        <button>Entrar</button>
                        <img className='NavTopCart' src={cart} alt="" />
                    </nav>

                </div>
                <div className='HeaderBotton'>
                
                    <nav className='NavBotton'>
                
                        <Link to="/">Home</Link>
                        <Link to="/produtos">Produtos</Link>
                        <Link to="/produtos">Categorias</Link>
                        <Link to="/produtos">Meus Pedidos</Link>

                    </nav>
                
                </div>
            </div>

        </header>
    )


}export default Header;






























