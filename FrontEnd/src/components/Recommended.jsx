import React from "react";
import "./styles/recommended.css";
import star from "../resources/star.svg";
import gps from "../resources/gps.svg";
import swim from "../resources/swim.svg";
import wifi from "../resources/wifi.svg";
import heart from '../resources/heart.svg'
import { Link } from 'react-router-dom';

const getRating  = (quality) => {
  let rating = Math.min(Math.max(quality, 1), 10); //clamp value
  return  rating / 2 
}

const Recommended = ({products}) => {
  
  console.log(getRating(10))

  const wordsRating = [
    "Muy malo",
    "Regular",
    "Bueno",
    "Muy Bueno",
    "Excelente",
  ];
  // const dobleRating = getRating(8) / 2;

  // console.log(dobleRating)

  return (
    <div className="recommended-block">
      <div className="content-recommended">
        <ul className="list-recommended">
          {products.map((product, index) => (
            <li className="card-producto" key={product.idProduct}>
              <div className="title-recommended">
                <h2>Recomendaciones</h2>
              </div>
              <div className="content-image">
                <img src={heart} alt="like image" className="heart" />
                <img src={product.images[0]?.url} alt="image product" />
              </div>
              <div className="content-info-producto ">
                <div className="info-producto">
                  <div>
                    <div className="content-category">
                      <h4>{product.category.title}</h4>
                      {Array(5)
                        .fill("")
                        .map((_, i) => {
                          return (
                            <img
                              key={`star-${i}`}
                              src={star}
                              className={
                                getRating(product.quality) < i ? "disable" : undefined
                              }
                              alt="star icon"
                            />
                          );
                        })}
                    </div>
                    <h2>{product.title}</h2>
                  </div>
                  <div className="content-mediaScore">
                    <span>{getRating(product.quality)* 2 }</span>
                    <p> {wordsRating[getRating(product.quality) - 1 ]}</p>
                  </div>
                </div>
                <div className="detail-producto">
                  <div>
                    <p>
                      <img src={gps} alt="gps" className="gps" />A 940 m del
                      centro - <span>MOSTRAR EN EL MAPA</span>
                    </p>
                    <div className="content-wifi">
                      <img src={wifi} alt="" className="wifi" />
                      <img src={swim} alt="" className="swim" />
                    </div>
                  </div>
                  <p>
                    {product.description} <span>más...</span>
                  </p>
                  <Link key={index} to={`/product-detail/${product.idProduct}`}>
                    <button className="btn-product">Ver más </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recommended;
