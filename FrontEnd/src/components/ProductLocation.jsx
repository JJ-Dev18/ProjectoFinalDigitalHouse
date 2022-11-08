import React from 'react'
import './styles/product-location.css';
import PinIcon from '../resources/gps.svg';

const ProductLocation = ({ city, province, country, distance }) => {
  return (
    <div className='product-location-container'>
      <img className='pin-icon' src={PinIcon} alt="Pin Icon" />
      <div className='product-location'>
        <span>{province}, </span>
        <span>{city}, </span>
        <span>{country}. </span>
        {false && <div>{distance}</div>}
      </div>
    </div>
  )
}

export default ProductLocation;