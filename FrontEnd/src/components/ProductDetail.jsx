import React from "react";
import ProductHeader from "./ProductHeader";
import ProductGallery from "./ProductGallery";
import "./styles/product-detail.css";
import Characteristics from "./ProductCharacteristics";
import ProductCharacteristics from "./ProductCharacteristics";
import ProductPolicies from "./ProductPolicies";
import ProductReservation from "./ProductReservation";
import ProductDescription from "./ProductDescription";
import product from '../resources/products.json'
const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <ProductHeader category={"Hotel"} name={"Hotel Hermitage"} />
      <ProductGallery images={["TODO"]} />
      <ProductDescription
        title={product[0].titleDescription}
        description={product[0].category.description}
      />
      <ProductCharacteristics characteristics={product[0].characteristics} />
      <ProductReservation />
      <ProductPolicies
        normsPolicy={product[0].NormsPolicy}
        securityPolicy={product[0].SecurityPolicy}
        cancellationPolicy={product[0].CancellationPolicy}
      />
    </div>
  );
};

export default ProductDetail;
