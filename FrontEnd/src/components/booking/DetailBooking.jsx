import React from 'react'
import StarIcon from '../../resources/star.svg'
import gps from '../../resources/gps.svg'
import  '../styles/booking/detail-booking.css'

const DetailBooking = ({rating,img,category, title}) => {
   let stars = Math.floor(rating / 2); //clamp value
   const wordsRating = [
     "Muy malo",
     "Regular",
     "Bueno",
     "Muy Bueno",
     "Excelente",
   ];
  return (
    <div className="content-detail">
      <h2>Detalle de la reserva</h2>
      <img src={img} alt="img product" id="product-img" />
      <div className="content-info-detail">
        <div className="category-info">
          <span>{category.toUpperCase()}</span>
          <h2>{title}</h2>
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
          <img src={gps} alt="icon ubication" />
          <p>
            Av. Colón 1643, Buenos Aires, Ciudad Autónoma de Buenos Aires,
            Argentina 
            
            
          </p>
        </div>
        <div className="check-in">
          <h4>Check in</h4>
          <p>___/___/____</p>
        </div>
        <div className="check-in">
          <h4>Check out</h4>
          <p>___/___/____</p>
        </div>
        <button>Confirmar reserva</button>
      </div>
    </div>
  );
}

export default DetailBooking;