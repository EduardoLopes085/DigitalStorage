import '../Login/login.css'
import face from '../../assets/Original.png'
import gmail from '../../assets/gmail 1.png'
import tenis1 from '../../assets/pexels-melvin-buezo-2529148 1.png'
import tenis2 from '../../assets/pexels-melvin-buezo-2529148 2.png'
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

function login(){
    const { register, handleSubmit, formState: { errors }, } = useForm();
// Para navegar para a página de cadastro ou outra página
const history = useNavigate(); 
    // Função que será chamada no submit do formulário
    const onSubmit = (data) => {
      console.log(data); // aqui vai retornar as infos que foram passadas no campos abaixo.
      // Exemplo de redirecionamento após login (simulando sucesso)
      history('/login')
     // Redirecionar para outra página após login bem-sucedido
    };

    return(

        <div className='Total'>
        <div className="containerLogin">
            <div className="CardLoginText">
{/*                 // o onSubmit so sera feito, se passar pelo handleSubmit, que é necessario que o usuário preencha os inputs que estão com require. */}
                <form onSubmit={handleSubmit(onSubmit)}className="TextLogin">
                    <div className='TextPrincipal'>
                    <h3 className='h3Login'>Acesse sua conta</h3>
                    <span className='spanConta'>Novo cliente? Então registre-se <Link to ='/cadastro'>aqui.</Link></span>
                    </div>
                    <div className='Email'>
                    <span >Login*</span>
{/*                aqui ele vai ligar esse input ao inputLogin, e quando formos ver o data esse campo vai ser preenchido por esse campo.      */}
                    <input type="email" className="inputLogin"  placeholder='Insira seu email' {...register("inputLogin", { required: true })} />
                    </div>
                    <div className='Email'>
                    <span >Senha*</span>
                    
                    <input type="password" className="inputLogin"  placeholder='Insira sua senha'{...register("inputSenha", { required: true })} />
                    
                    </div>
                    <a className='SenhaA' href=''>Esqueci minha senha</a>
                    <button type='submit' className='btnLogin'>Acessar sua conta</button>
                    
                    <div className='ContentLogin'>
                    <span >Ou faça login com</span>
                    <img src={gmail}></img>
                            <img src={face}></img>
                            
                            
                    
                    </div>
              
                    </form>
            </div>
            <div>
            <div className="ImgLogin">
    <div className="card img1-card">
        <img src={tenis1}alt="Shoe 1" />
    </div>
    <div className="card img2-card">
        <img src={tenis2}alt="Shoe 2" />
    </div>
</div>

                   
            </div>
        </div>
        </div>
    )
}

export default login;
