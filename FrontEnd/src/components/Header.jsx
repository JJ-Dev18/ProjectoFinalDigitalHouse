import { useState } from 'react'
import logo_non_desktop from '../resources/logo_non_desktop.svg'
import logo_desktop from '../resources/logo_desktop.svg'
import menu from '../resources/menu.svg'
import tweeter_dark from "../resources/tweeter-dark.svg"
import facebook_dark from "../resources/facebook-dark.svg"
import instagram_dark from "../resources/instagram-dark.svg"
import linkedin_dark from "../resources/linkedin-dark.svg"
import './styles/header.css'
import { Link } from 'react-router-dom';
import { Auth } from './Auth'
import Avatar from '@material-ui/core/Avatar'

const Header = () => {

    let menuItems = ['Crear Cuenta', 'Iniciar Sesión'];

    let [showMenu, setShowMenu] = useState(false);

    const clickHandler = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    }

    const logoutHandler = () => {
        localStorage.removeItem('logged')
        window.location.href = "/"
    }
    console.log(Auth());
    let registeredUser = JSON.parse(localStorage.getItem('user'))
    return (

        <header>
            <Link to="/">
                <img className='xs-screen logo' src={logo_non_desktop} alt="logo_non_desktop" />
                <img className='xl-screen logo' src={logo_desktop} alt="logo_desktop" />
            </Link>
            <img className='menu-icon' onClick={clickHandler} src={menu} alt="md-screen menu" />
            {Auth() ?
                <div className='md-screen avatar'>
                    <div className='logout' onClick={logoutHandler} > X </div>
                    <Avatar>{registeredUser.avatar}</Avatar>
                    <div>
                        <span className='welcome'>Hola,</span><br />
                        <span className='welcome name'>{registeredUser.name + " " + registeredUser.lastname}</span>
                    </div>
                </div>
                :
                <div className='md-screen buttons'>
                    <button><Link to="/register">{menuItems[0]}</Link></button>
                    <button><Link to="/login">{menuItems[1]}</Link></button>
                </div>
            }
            {Auth() ?
                <div className={`xs-screen menu ${showMenu ? `active` : `inactive`}`}>
                    <div className='top'>
                        <div className='close-menu' onClick={clickHandler} > X </div>
                        <div className='div-avatar-mobile'>
                            <Avatar className='avatar-mobile'>{registeredUser.avatar}</Avatar>
                            <div>
                                <span className='welcome'>Hola,</span><br />
                                <span className='welcome name'>{registeredUser.name + " " + registeredUser.lastname}</span>
                            </div>
                        </div>
                    </div>
                    <div className='list'>
                        <span>¿Deseas <a onClick={logoutHandler}>cerrar sesión</a>?</span>
                    </div>
                    <div className='social'>
                        <ul>
                            <li ><img src={facebook_dark} alt='facebook'></img></li>
                            <li ><img src={linkedin_dark} alt='linkedin'></img></li>
                            <li ><img src={tweeter_dark} alt='tweeter'></img></li>
                            <li ><img src={instagram_dark} alt='instagram'></img></li>
                        </ul>
                    </div>
                </div>
                :
                <div className={`xs-screen menu ${showMenu ? `active` : `inactive`}`}>
                    <div className='top'>
                        <div className='close-menu' onClick={clickHandler} > X </div>
                        <h1>MENÚ</h1>
                    </div>
                    <ul className='list'>
                        <li><Link to="/register">{menuItems[0]}</Link></li>
                        <hr />
                        <li><Link to="/login">{menuItems[1]}</Link></li>
                    </ul>
                    <div className='social'>
                        <ul>
                            <li ><img src={facebook_dark} alt='facebook'></img></li>
                            <li ><img src={linkedin_dark} alt='linkedin'></img></li>
                            <li ><img src={tweeter_dark} alt='tweeter'></img></li>
                            <li ><img src={instagram_dark} alt='instagram'></img></li>
                        </ul>
                    </div>
                </div>
            }

        </header>
    )
}

export default Header