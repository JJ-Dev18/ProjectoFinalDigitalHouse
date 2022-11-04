import React from 'react';
import './styles/product-rating.css';
import starIcon from "../resources/star.svg";

const ProductRating = ({ score }) => {
  const wordsRating = ['Muy malo', 'Regular', 'Bueno', 'Muy Bueno', 'Excelente'];
  const halfScore = Math.ceil(score / 2);
  return (
    <div className='product-rating-container'>
      <div>
        <div className='word-rating'>
          {wordsRating[halfScore]}
        </div>
        <div>
          {
            Array(5).fill('').map(
              (_, i) => {
                return <img key={i} src={starIcon} className={halfScore > i ? '' : 'disable'} alt="star icon" />
              }
            )
          }
        </div>
      </div>
      <div className='big-number'>
        <span>{score}</span>
      </div>
    </div>
  )
}

export default ProductRating;
