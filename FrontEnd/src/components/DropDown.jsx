import React from 'react'
import { BiMap } from 'react-icons/bi'
import Cities from '../resources/cities.json'


const DropDown = (props) => {
  return (
    <div className={props.class}>
        <ul>
        {Cities.map( item => (
            <div key={item.id} className="option">
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