import React from "react";
import recommended from "../resources/recommended.json";
import "./styles/recommended.css";
import star from '../resources/star.svg'
import gps from '../resources/gps.svg'
const renderStars = (num) => {
 let arrayStars  = []
 for (let index = 0; index < num; index++) {
     arrayStars.push(index)
 }
  return arrayStars;
}


const Recommended = () => {

  return (
    <>
    <h2>Recomendaciones</h2>
      <div className="content_recommended">
        {recommended.map((product, index) => (
          <div className="card_producto" key={index}>
            <img src={product.urlImage} alt="" />
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
                <p>
                  <img src={gps} alt="gps" className="gps" />
                  {product.detail} - <span>MOSTRAR EN EL MAPA</span>
                </p>
                <p>
                  {product.description} <span>más...</span>
                </p>
                <button className="btn_product">Ver más </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recommended;
