import { useState}  from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdCalendar } from 'react-icons/io'
// import { BiMap } from 'react-icons/bi'
// import Cities from '../resources/cities.json'
import './styles/searchBlock.css'
import DropDown from './DropDown'
import SearchCalendar from './SearchCalendar'



const SearchBlock = () => {

  let [dropDown, setDropDown] = useState(false);
  let [showCalendar, setShowCalendar] = useState(false);
    
  const clickCityHandler = () => {
      setDropDown(!dropDown);
      console.log(dropDown);
  }

  const clickDateHandler = () => {
    setShowCalendar(!showCalendar);
    console.log(showCalendar);
}

  return (
    <div className="search-block">
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        <form>
            <div>
              <div className="input-container">
                <div className="input-icon">
                  <div className="icon"><FaMapMarkerAlt /></div>
                  <input className="" id="city" type="text"  onClick={clickCityHandler}  placeholder='          ¿A dónde vamos?'/>
                </div>
                <DropDown class={`select ${dropDown ? `active` : `inactive` }`}/>
              </div>
{/*               <div className={`select ${dropDown ? `active` : `inactive` }`}>
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
              </div> */}
            </div>
            
            <div className="input-container">
              <div className="input-icon">
                <div className="icon">
                  <IoMdCalendar />
                </div>
                <input className="" id="check" type="text" onClick={clickDateHandler}  placeholder='          Check in - Check - out'/>
              </div>
              <SearchCalendar class={`select calendar ${showCalendar ? `active` : `inactive` }`} />            
            </div>
            <button className="form-button">Buscar</button>
        </form>
    </div>
  )
}

export default SearchBlock



