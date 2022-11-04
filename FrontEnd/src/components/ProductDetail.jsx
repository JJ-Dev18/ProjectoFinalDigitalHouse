import React from 'react'
import ProductHeader from './ProductHeader';
import ProductGallery from './ProductGallery';
import './styles/product-detail.css';

const ProductDetail = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026452_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg",
    "https://eston.ca/wp-content/uploads/2017/09/hotel-room-1447201_640.jpg",
    "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_960_720.jpg"
  ];

  return (
    <div className='product-detail-container'>
      <ProductHeader category={'Hotel'} name={'Hotel Hermitage'} />
      <ProductGallery images={images} />
      <div> {`<product-description/>`}</div>
      <div> {`<product-characteristics/>`}</div>
      <div> {`<product-policies/>`}</div>
    </div>
  )
}

export default ProductDetail;
