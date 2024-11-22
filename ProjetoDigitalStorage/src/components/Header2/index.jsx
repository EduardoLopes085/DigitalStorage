import styles from './Header.module.css'
import img from  '../../assets/logo-header.svg'
import cart from '../../assets/mini-cart.svg'
import {Link} from 'react-router-dom';


// import { Link } from 'react-router-dom';


function Header(){
    return (
      <div className={styles.ContainerHeader}>
      <header className={styles.header}>
           
            <div className={styles.hea_1}>
             
              <img src ={img}  className={styles.header_img}  alt='IMG'></img>  
              <input type='text' placeholder='Pesquisar produto...'></input>
                <Link to='/Cadastro' className={styles.headerbutton}>Cadastra-se</Link>
                <Link to ='/login' className={styles.headerbutton2}>Entrar</Link >
                <div className={styles.div_cart}>
                <img  src={cart}  className={styles.cart}  alt='carrinho'></img>
                </div>
           
            </div>
            <div className={styles.hea_2}>
            <div className={styles.ajs}>
            <a href ='/home'>Home</a>
            <a href=''>Produtos</a>
            <a href=''>Categorias</a>
            <a href=''>Meus Pedidos</a>
            </div>  
            </div>
      </header>
      </div>
    )
}
export default Header