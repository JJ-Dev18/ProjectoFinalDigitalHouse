import React from 'react'
import  logo_desktop  from '../resources/logo_desktop.svg'
import  logo_non_desktop  from '../resources/logo_non_desktop.svg'
import '../index.css'

const Header = () => {
  return (
    <header className='flex flex-row h-[80px] fixed bg-white w-full justify-between items-center p-[40px]'>
        <img src= {logo_desktop} alt="" className='w-[556px] hidden lg:block'/>
        <img src= {logo_non_desktop} alt="" className='w-[68px] block md:w-[71px]  lg:hidden'/>
        <div className='flex flex-row justify-center invisible md:visible'>
            <button>Crear cuenta</button>
            <button>Iniciar Sesión</button>
        </div>
    </header>
  )
}

export default Header