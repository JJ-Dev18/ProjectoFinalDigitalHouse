import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ProductHeader from "./ProductHeader";
import ProductGallery from "./ProductGallery";
import ProductGalleryDesktop from "./ProductGalleryDesktop";
import "./styles/product-detail.css";
import ProductCharacteristics from "./ProductCharacteristics";
import ProductPolicies from "./ProductPolicies";
import ProductReservation from "./ProductReservation";
import useWindowSize from "../utils/useWindowSize";

async function fetchProductDetail(id) {
  // return await fetch(`API/${id}`).then(data => data.json());
  return await import('../resources/products.json').then(data => data[0]);
}

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const { width } = useWindowSize();


  useEffect(
    () => {
      try {
        fetchProductDetail(params.productId)
          .then(item => {
            setProduct(item);
          })
      } catch (err) {
        console.error('Error occured when fetching product detail');
      }
    }
    , [params.productId]);

  return (
    <>
      {
        product == null
          ? <div className='product-detail-container'><h2>Cargando...</h2></div>
          : <div className='product-detail-container'>
            <ProductHeader
              category={product.category.title}
              name={product.title}
              location={product.city}
              rating={product.quality} />
            {
              width < 1024
                ? <ProductGallery images={product.images} />
                : <ProductGalleryDesktop images={product.images} />
            }
            <div> {`<product-description/>`}</div>
            <ProductCharacteristics />
            <ProductReservation />
            <ProductPolicies />
          </div>
      }
    </>
  );
};

export default ProductDetail;
