import { useRef } from 'react'
import { BiMap } from 'react-icons/bi'
import Cities from '../resources/cities.json'


const DropDown = (props) => {
  
    const onClickHandler = (e , key) => {
        const inputStr = Cities[key-1].city + ', ' + Cities[key-1].country
        console.log(inputStr);
        props.setValue("      " + inputStr); 
        props.clickCityHandler()
    }

    return (
    <div className={props.class}>
        <ul>
        {Cities.map( item => (
            <div onClick={ event => onClickHandler(event, item.id)} key={item.id} className="option">
            <li>
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
  )
}

export default DropDown