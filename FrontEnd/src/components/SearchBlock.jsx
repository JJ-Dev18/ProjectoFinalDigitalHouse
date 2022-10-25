import React from 'react'
import './styles/searchBlock.css'


const SearchBlock = () => {
  return (
    <div className="search-block">
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        <form>
            <input className="" id="city" type="text" placeholder='¿A dónde vamos?'/>
            <input className="" id="check" type="text" placeholder='Check in - Check - out'/>
            <button>Buscar</button>
        </form>
    </div>
  )
}

export default SearchBlock