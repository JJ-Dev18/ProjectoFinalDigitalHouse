import { useState}  from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdCalendar } from 'react-icons/io'
import { BiMap } from 'react-icons/bi'
import Cities from '../resources/cities.json'
import './styles/searchBlock.css'




const SearchBlock = () => {

  let [dropDown, setDropDown] = useState(false);
    
  const clickHandler = () => {
      setDropDown(!dropDown);
      console.log(dropDown);
  }

  return (
    <div className="search-block">
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        <form>
            <div>
              <div className="input-icon">
                <div className="icon"><FaMapMarkerAlt /></div>
                <input className="" id="city" type="text"  onClick={clickHandler}  placeholder='          ¿A dónde vamos?'/>
              </div>
              <div className={`select ${dropDown ? `active` : `inactive` }`}>
                <ul>
                  {Cities.map( item => (
                    <div className="option">
                      <li key={item.id}>
                        <div className="option-icon">
                          <BiMap />
                        </div>
                        <div>
                          <p className="option-heading">{item.city}</p>
                          <p className="option-paragraph">{item.country}</p>
                        </div>
                      </li>
                      <hr />
                    </div>
                  ))}
                </ul>
               </div>
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



