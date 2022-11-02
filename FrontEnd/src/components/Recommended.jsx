import React from "react";
import recommended from "../resources/recommended.json";
import "./styles/recommended.css";
import star from "../resources/star.svg";
import gps from "../resources/gps.svg";
import swim from "../resources/swim.svg";
import wifi from "../resources/wifi.svg";
import heart from '../resources/heart.svg'

const renderStars = (num) => {
  let arrayStars = [];
  for (let index = 0; index < num; index++) {
    arrayStars.push(index);
  }
  return arrayStars;
};

const Recommended = () => {
  return (
    <div className="recommended_block">
      <div className="content_recommended">
        <ul className="list_recommended">
          {recommended.map((product, index) => (
            <li className="card_producto" key={index}>
              <div className="title_recommended">
                <h2>Recomendaciones</h2>
              </div>
              <div className="content_image">
                <img src={heart} alt="like image" className="heart" />
                <img src={product.urlImage} alt="image product" />
              </div>
              <div className="content_info_producto ">
                <div className="info_producto">
                  <div>
                    <div className="content_category">
                      <h4>{product.category}</h4>
                      {renderStars(product.qualityScore).map((s, index) => {
                        return <img key={index} src={star} alt="star" />;
                      })}
                    </div>
                    <h2>{product.title}</h2>
                  </div>
                  <div className="content_mediaScore">
                    <span>{product.mediaScore}</span>
                    <p>Muy bueno</p>
                  </div>
                </div>
                <div className="detail_producto">
                  <div>
                    <p>
                      <img src={gps} alt="gps" className="gps" />
                      {product.detail} - <span>MOSTRAR EN EL MAPA</span>
                    </p>
                    <div className="content_wifi">
                      <img src={wifi} alt="" className="wifi" />
                      <img src={swim} alt="" className="swim" />
                    </div>
                  </div>

                  <p>
                    {product.description} <span>más...</span>
                  </p>
                  <button className="btn_product">Ver más </button>
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
