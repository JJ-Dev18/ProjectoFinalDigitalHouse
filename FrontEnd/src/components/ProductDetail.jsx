import React from "react";
import ProductHeader from "./ProductHeader";
import ProductGallery from "./ProductGallery";
import "./styles/product-detail.css";
import Characteristics from "./ProductCharacteristics";
import ProductCharacteristics from "./ProductCharacteristics";
import ProductPolicies from "./ProductPolicies";

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <ProductHeader category={"Hotel"} name={"Hotel Hermitage"} />
      <ProductGallery images={["TODO"]} />
      <div> {`<product-description/>`}</div>
      <ProductCharacteristics />
      <ProductPolicies/>
    </div>
  );
};

export default ProductDetail;
