import React from "react";
import recommended from "../resources/recommended.json";
import "./styles/recommended.css";
import star from "../resources/star.svg";
import gps from "../resources/gps.svg";
import swim from "../resources/swim.svg";
import wifi from "../resources/wifi.svg";
import heart from '../resources/heart.svg'
import { Link } from 'react-router-dom';

const renderStars = (num) => {
  let arrayStars = [];
  for (let index = 0; index < num; index++) {
    arrayStars.push(index);
  }
  return arrayStars;
};

const Recommended = () => {
  return (
    <div className="recommended-block">
      <div className="content-recommended">
        <ul className="list-recommended">
          {recommended.map((product, index) => (
            <li className="card-producto" key={index}>
              <div className="title-recommended">
                <h2>Recomendaciones</h2>
              </div>
              <div className="content-image">
                <img src={heart} alt="like image" className="heart" />
                <img src={product.urlImage} alt="image product" />
              </div>
              <div className="content-info-producto ">
                <div className="info-producto">
                  <div>
                    <div className="content-category">
                      <h4>{product.category}</h4>
                      {renderStars(product.qualityScore).map((s, index) => {
                        return <img key={index} src={star} alt="star" />;
                      })}
                    </div>
                    <h2>{product.title}</h2>
                  </div>
                  <div className="content-mediaScore">
                    <span>{product.mediaScore}</span>
                    <p>Muy bueno</p>
                  </div>
                </div>
                <div className="detail-producto">
                  <div>
                    <p>
                      <img src={gps} alt="gps" className="gps" />
                      {product.detail} - <span>MOSTRAR EN EL MAPA</span>
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
