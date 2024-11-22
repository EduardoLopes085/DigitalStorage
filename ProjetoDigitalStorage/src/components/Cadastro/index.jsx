import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Cadastro.css';
import { useNavigate } from 'react-router-dom';

function Cadastro() {


  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/usuarios', {
        nome: data.inputLogin,
        sobrenome: data.inputsobrenome,
        email: data.inputemail,
        senha: data.inputsenha,
      });
      alert(`🟢 ${response.data.message}`);
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || 'Erro ao cadastrar usuário. Tente novamente mais tarde.');
    }
  };  
  const onError = (errors) => {
    if (errors.inputCPF) {
      alert(errors.inputCPF.message);
    }
  };

  return (
    <form className="containerCadastro" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="Conta">
        <label>Criar conta</label>
      </div>

      <div className="cardCadastro">
        <div className="Cadastroinfo">
          <span>Informações Pessoais</span>
          <hr />

          <span htmlFor="nomeCompleto">Nome completo*</span>
      <input
        type="text"
        id="nomeCompleto"
        className="inputLogin"
        placeholder="Insira seu nome completo"
        {...register('inputLogin', {
          required: "Nome completo é obrigatório!",
          pattern: {
            value: /^[A-Za-zÀ-ÿ]+( [A-Za-zÀ-ÿ]+)*$/,
            message: "Nome completo não pode ter espaços consecutivos e deve conter apenas letras!"
          }
        })}
      />

      <span htmlFor="sobrenome">Sobrenome*</span>
      <input
        type="text"
        id="sobrenome"
        className="inputLogin"
        placeholder="Insira seu sobrenome"
        {...register('inputsobrenome', {
          required: "Sobrenome é obrigatório!",
          pattern: {
            value: /^[A-Za-zÀ-ÿ]+( [A-Za-zÀ-ÿ]+)*$/,
            message: "Sobrenome não pode ter espaços consecutivos e deve conter apenas letras!"
          }
        })}
      />

      <span htmlFor="email">E-mail*</span>
      <input
        type="email"
        id="email"
        className="inputLogin"
        placeholder="Insira seu e-mail"
        {...register('inputemail', {
          required: "E-mail é obrigatório!",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "E-mail inválido!"
          }
        })}
      />

      <span htmlFor="senha">Senha*</span>
      <input
        type="password"
        id="senha"
        className="inputLogin"
        placeholder="Insira sua senha"
        {...register('inputsenha', {
          required: "Senha é obrigatória!"
        })}
      />
        </div>
      </div>

      <div className="CardbtnCadastro">
        <div className="checboxCadastro">
          <input type="checkbox" className="checkbox" id="ofertas"></input>
          <label htmlFor="ofertas" className="labelCadastro">
            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de
            envios pode variar de acordo com a interação do cliente.
          </label>
        </div>
        <button type="submit" className="btnCadastro">
          Criar Conta
        </button>
      </div>
    </form>
  );
}

export default Cadastro;
