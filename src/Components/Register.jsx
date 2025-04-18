import React from 'react';
import './styles/RegisterStyle.css';


const Register = () => {
    return(
        <div className="r-container">
        <span className="title">Sun PDV</span>
        <span className="sub-title">Cadastro</span>
        <form>
            <input type="email" placeholder="Digite seu Email" required/>
            <input type="password" placeholder="Digite sua Senha" required/>
            <input type="password" placeholder="Confirme sua Senha" required/>
            <button>Registre-se</button>
        </form>
        <p>Você ainda não tem uma conta </p>
        </div>
    )
}
export default Register;