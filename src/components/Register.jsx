import React from "react";
import './styles/register.css'
import { Link } from 'react-router-dom';

class Register extends React.Component {

    constructor(){
        super()
        this.state = {
            password : "",
            error: false
          };
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;
        if (password.length >= 6 && password === passwordConfirm) {
            let user = {
                user: document.getElementById('user').value,
                name: document.getElementById('name').value,
                lastname: document.getElementById('lastname').value,
                password: document.getElementById('password').value,
                avatar: document.getElementById('name').value.charAt(0).toUpperCase() + document.getElementById('lastname').value.charAt(0).toUpperCase()
            }
            this.setState({ user })
            localStorage.setItem('user', JSON.stringify(user))
            window.location.href = "/login"
        }else{
            console.log(this.error)
            this.setState({
                error: true,
                password: password.length
            })
        }
    }



    render() {
        let error 
        if (this.state.error !== false) {
            if(this.state.password <6){
                error = <span className="error">La contraseña ingresada tiene menos de 6 caracteres</span>
            }else{
                error = <span className="error">las contraseñas no coinciden</span>
            }
            
        }else{
            error = <p></p>
        }
        return (
            <div className="register">
                <p className="heading-1 color-principal">Crear Cuenta</p>
                <form className="form-register" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="row">
                        <div className="col-2">
                            <label className="text-2 color-second" htmlFor="name">
                                Nombre
                            </label>
                            <input className="nombre" id="name" type="text" />
                        </div>
                        <div className="col-2">
                            <label className="text-2 color-second" htmlFor="lastname">
                                Apellido
                            </label>
                            <input className="apellido" id="lastname" type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <label className="text-2 color-second" htmlFor="user">
                            Correo electrónico
                        </label>
                        <input className="" id="user" type="email" required/>
                    </div>
                    <div className="col">
                        <label className="text-2 color-second" htmlFor="password">
                            Contraseña
                        </label>
                        <input className="" id="password" type="password" />
                    </div>
                    <div className="col">
                        <label className="text-2 color-second" htmlFor="passwordConfirm">
                            Confirmar Contraseña
                        </label>
                        <input className="" id="passwordConfirm" type="password" />
                    </div>
                    <div className="div-error">{error}</div> 
                    <div className="row-2">
                        <input type="submit" value="Crear cuenta" />
                        <p className="color-second">¿Ya tienes una cuenta? <Link to="/login"> Iniciar sesión</Link></p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;