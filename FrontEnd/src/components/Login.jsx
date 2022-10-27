import React from "react";
import './styles/login.css'
import { Link } from 'react-router-dom';
import { Auth } from "./Auth";

class Login extends React.Component {

    constructor(){
        super()
        this.state = {
            error: false
          };
    }

    async handleSubmit(e) {
        e.preventDefault()
        let user = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let registeredUser = JSON.parse(localStorage.getItem('user'))
        if(registeredUser.user === user && registeredUser.password === password){
            localStorage.setItem('logged', JSON.stringify(user))
            Auth();
            window.location.href="/"
        }else{
            this.setState({
                error: true,
            })
        }
    }

    render() {

        let error 
        if (this.state.error !== false) {
            error = <span className="error">Por favor vuelva a intentarlo, sus credenciales son inválidas</span>
        }

        return (
            <div className="login">
                <p className="heading-1 color-principal">Iniciar sesión</p>
                <form className="form-login" onSubmit={(event) => this.handleSubmit(event)}>
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
                        <input className="" id="password" type="password" />
                    </div>
                    <div className="div-error">{error}</div>
                    <div className="row-2">
                        <input type="submit" value="Ingresar" />
                        <p className="color-second">¿Aún no tenes cuenta? <Link to="/register">Registrate</Link></p>
                    </div>
                </form>

            </div>
        );
    }
}

export default Login;