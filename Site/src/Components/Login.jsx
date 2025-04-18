import React from 'react';
import { Link } from 'react-router-dom';
import './styles/RegisterStyle.css';
const Login = ()  =>
    (
        <div className="r-container">
        <span className="title">Sun PDV</span>
        <span className="sub-title">Login</span>
        <form>
            <input type="email" placeholder="Digite seu Email" required/>
            <input type="password" placeholder="Digite sua Senha" required/>
            <button>Acessar</button>
        </form>
        <p>Você ainda não tem uma conta? Registre-se </p>
        </div>
    )
    

export default Login;