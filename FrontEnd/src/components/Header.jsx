import { useState}  from 'react'
import  logo_non_desktop  from '../resources/logo_non_desktop.svg'
import  logo_desktop  from '../resources/logo_desktop.svg'
import  menu  from '../resources/menu.svg'
import tweeter_dark   from "../resources/tweeter-dark.svg"
import facebook_dark   from "../resources/facebook-dark.svg"
import instagram_dark   from "../resources/instagram-dark.svg"
import linkedin_dark  from "../resources/linkedin-dark.svg"
import './styles/header.css'
import { Link } from 'react-router-dom';


const Header = () => {

    let menuItems = ['Crear Cuenta', 'Iniciar Sesión'];

    let [showMenu, setShowMenu] = useState(false);
    
    const clickHandler = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    }

    return (
    <header>
        <Link to="/"><img className='xs-screen logo' src={logo_non_desktop} alt="logo_non_desktop" /> </Link>           
        <Link to="/"><img className='xl-screen logo' src={logo_desktop} alt="logo_desktop" />  </Link>           
        <Link to="/"><img className='menu-icon' onClick={clickHandler} src={menu} alt="md-screen menu" /></Link> 
        <div className='md-screen buttons'>
            <button><Link to="/register">{menuItems[0]}</Link></button>
            <button><Link to="/login">{menuItems[1]}</Link></button>
        </div>
        <div className={`xs-screen menu ${showMenu ? `active` : `inactive` }`}>
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
                  <li ><img src={facebook_dark}  alt='facebook'></img></li>
                  <li ><img src={linkedin_dark}  alt='linkedin'></img></li>
                  <li ><img src={tweeter_dark}   alt='tweeter'></img></li>
                  <li ><img src={instagram_dark} alt='instagram'></img></li>
              </ul>
          </div>
      </div>

    </header>
  )
}

export default Header