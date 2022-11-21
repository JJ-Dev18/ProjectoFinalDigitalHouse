import { BiMap } from 'react-icons/bi'
import '../styles/home/search-dropdown.css'
import useFetch from '../../hooks/useFetch'
import { backendApi } from "../../hooks/axiosBase";


const DropDown = (props) => {
  
    const { response: cities, isLoading } = useFetch({
        api: backendApi,
        method: "get",
        url: "/cities",
    });

    const onClickHandler = (e , key) => {
        const inputStr = cities[key-1].name + ', ' + cities[key-1].country
        console.log(inputStr);
        props.setCityInput("      " + inputStr);
        props.setCity(key); 
        props.clickCityHandler()
    }

    console.log(cities)
    
    return (
    <div className={props.class}>
        <ul>
        {isLoading ? <p>...Cargando Ciudades</p> : cities.map( item => (
            <div onClick={ event => onClickHandler(event, item.idCity)} key={item.idCity} className="option">
            <li>
                <div className="option-icon">
                  <BiMap />
                </div>
                <div>
                  <p className="option-heading">{item.name}</p>
                  <p className="option-paragraph">{item.country}</p>
                </div>
              </li>
              <hr />
            </div>
          ))}
      </ul>
    </div>
  )
}

export default DropDown