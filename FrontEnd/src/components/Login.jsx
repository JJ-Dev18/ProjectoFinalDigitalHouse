import React from "react";
import './styles/login.css'
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className="login">
            <p className="heading-1 color-principal">Iniciar sesión</p>
            <form className="form-login" action="">
                <div className="row-4">
                    <label className="text-2 color-second" htmlFor="username">
                        Username
                    </label>
                    <input className="" id="username" type="text" />
                </div>
                <div>
                    <label className="text-2 color-second" htmlFor="password">
                        Password
                    </label>
                    <input className="" id="password" type="password"  />
                </div>
                <div className="row-2">
                    <input type="submit" value="Ingresar" />
                    <p className="color-second">¿Aún no tenes cuenta? <Link to="/register">Registrate</Link></p>
                </div>
            </form>
            {props.children}
        </div>
    );
}

export default Login;