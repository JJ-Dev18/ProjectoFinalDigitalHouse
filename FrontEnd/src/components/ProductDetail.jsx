import React from 'react'
import ProductHeader from './ProductHeader';
import ProductGallery from './ProductGallery';
import './styles/product-detail.css';
import Characteristics from './Characteristics';

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <ProductHeader category={"Hotel"} name={"Hotel Hermitage"} />
      <ProductGallery images={["TODO"]} />
      <div> {`<product-description/>`}</div>
      <Characteristics />
      <div> {`<product-policies/>`}</div>
    </div>
  );
}

export default ProductDetail;
