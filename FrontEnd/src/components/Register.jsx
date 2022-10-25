import React from "react";
import './styles/register.css'
const Register = () => {
    return (

        <div>
            <p className="heading-1 color-principal">Crear Cuenta</p>
            <form className="form" action="">
                <div className="row">
                    <div className="col">
                        <label className="text-2 color-second" htmlFor="username">
                            Nombre
                        </label>
                        <input className="nombre" id="username" type="text" />
                    </div>
                    <div className="col">
                        <label className="text-2 color-second" htmlFor="username">
                            Apellido
                        </label>
                        <input className="apellido" id="username" type="text" />
                    </div>
                </div>
                <div>
                    <label className="text-2 color-second" htmlFor="email">
                        Correo electrónico
                    </label>
                    <input className="" id="email" type="email"    />
                </div>
                <div>
                    <label className="text-2 color-second" htmlFor="email">
                        Contraseña
                    </label>
                    <input className="" id="email" type="email"    />
                </div>
                <div>
                    <label className="text-2 color-second" htmlFor="email">
                        Confirmar Contraseña
                    </label>
                    <input className="" id="email" type="email"    />
                </div>
                <div className="row-2">
                    <input type="submit" value="Crear cuenta" />
                    <p className="color-second">¿Ya tienes una cuenta? <a href="a">Iniciar sesión</a></p>
                </div>
            </form>
        </div>
    );
}

export default Register;