import { useRef } from 'react'
import { BiMap } from 'react-icons/bi'
import Cities from '../resources/cities.json'
import './styles/search-dropdown.css'
import useFetch from '../hooks/useFetch'
import baseURL, { backendApi } from "../hooks/axiosBase";



const DropDown = (props) => {
  
    const { response: cities, isLoading } = useFetch({
        api: backendApi,
        method: "get",
        url: "/cities",
    });

    const onClickHandler = (e , key) => {
        const inputStr = Cities[key-1].city + ', ' + Cities[key-1].country
        console.log(inputStr);
        props.setValue("      " + inputStr); 
        props.clickCityHandler()
    }

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