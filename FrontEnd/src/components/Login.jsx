import React from "react";
import './styles/login.css'


const Login = () => {
    return (
        <div className="login">
            <p className="heading-1 color-principal">Iniciar sesión</p>
            <form className="form" action="">
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
                    <p className="color-second">¿Aún no tenes cuenta? <a href="a">Registrate</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;