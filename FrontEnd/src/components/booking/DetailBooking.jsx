import React from 'react'
import StarIcon from '../../resources/star.svg'

const DetailBooking = (props) => {
   let stars = Math.floor(props.rating / 2); //clamp value
   const wordsRating = [
     "Muy malo",
     "Regular",
     "Bueno",
     "Muy Bueno",
     "Excelente",
   ];
  return (
    <div className="content-detail">
      <img src="" alt="" />
      <div className="category-detail">
        <span>HOTEL</span>
        <h1>Hermitage Hotel</h1>
        <div>
          {Array(5)
            .fill("")
            .map((_, i) => {
              return (
                <img
                  key={`star-${i}`}
                  src={StarIcon}
                  className={stars > i ? "" : "disable"}
                  alt="star icon"
                />
              );
            })}
        </div>
      </div>
      <div className="ubication">
       <img src="" alt="" />
       <p>Ubicacion av colon 1643 buenos aires </p>
      </div>

      <button>Confirmar reserva</button>
    </div>
  );
}

export default DetailBooking;