import React from "react";
import ProductHeader from "./ProductHeader";
import ProductGallery from "./ProductGallery";
import "./styles/product-detail.css";
import Characteristics from "./ProductCharacteristics";
import ProductCharacteristics from "./ProductCharacteristics";
import ProductPolicies from "./ProductPolicies";
import ProductReservation from "./ProductReservation";
import FetchData from "./FetchData";


const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <FetchData />
      <ProductHeader category={"Hotel"} name={"Hotel Hermitage"} />
      <ProductGallery images={["TODO"]} />
      <div> {`<product-description/>`}</div>
      <ProductCharacteristics />
      <ProductReservation />
      <ProductPolicies/>
    </div>
  );
};

export default ProductDetail;
