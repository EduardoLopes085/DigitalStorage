import '../Login/Login.css'

import logo from '../../assets/logo-header.svg'


function Login(){
    return(
        <div className="Login">
            
            <div className="LoginContainer">

                <div className="headerLogin" >
                    <img src={logo} alt="" />
                </div>

                <div className="headerContent">
                    <div className='loginPanel'>
                        <h3>Acesse sua conta</h3>
                        <p>Novo cliente? Então registre-se aqui.</p>

                        <label htmlFor="">Login *</label>   
                        <input type="text" />

                        <label htmlFor="">Senha *</label>
                        <input type="text" />

                        <p>Esqueci minha senha</p>

                        <button>Acessar conta</button>


                        <p>Ou faça login com  </p>

                    </div>
                </div>

            </div>

        </div>
    )
}   export default Login;



