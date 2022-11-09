import React from 'react';
import './styles/product-rating.css';
import StarIcon from "../resources/star.svg";

const ProductRating = (props) => {
  let rating = Math.min(Math.max(props.rating, 1), 5); //clamp value

  const wordsRating = ['Muy malo', 'Regular', 'Bueno', 'Muy Bueno', 'Excelente'];
  const dobleRating = rating * 2;
  return (
    <div className='product-rating-container'>
      <div>
        <div className='word-rating'>
          {wordsRating[rating - 1]}
        </div>
        <div>
          {
            Array(5).fill('').map(
              (_, i) => {
                return <img key={`star-${i}`} src={StarIcon} className={rating > i ? '' : 'disable'} alt="star icon" />
              }
            )
          }
        </div>
      </div>
      <div className='big-number'>
        <span>{dobleRating}</span>
      </div>
    </div>
  )
}

export default ProductRating;
