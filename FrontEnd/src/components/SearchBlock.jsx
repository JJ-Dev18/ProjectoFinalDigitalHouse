import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdCalendar } from 'react-icons/io'
import './styles/searchBlock.css'

const SearchBlock = () => {
  return (
    <div className="search-block">
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        <form>
            <div className="input-icon">
                <div className="icon"><FaMapMarkerAlt /></div>
                <input className="" id="city" type="text" placeholder='          ¿A dónde vamos?'/>
            </div>
            <div className="input-icon">
                <div className="icon"><IoMdCalendar /></div>
                <input className="" id="check" type="text" placeholder='          Check in - Check - out'/>
            </div>            
            <button>Buscar</button>
        </form>
    </div>
  )
}

export default SearchBlock