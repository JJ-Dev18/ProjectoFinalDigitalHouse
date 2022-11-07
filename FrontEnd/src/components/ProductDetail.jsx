import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ProductHeader from "./ProductHeader";
import ProductGallery from "./ProductGallery";
import ProductGalleryDesktop from "./ProductGalleryDesktop";
import "./styles/product-detail.css";
import ProductCharacteristics from "./ProductCharacteristics";
import ProductPolicies from "./ProductPolicies";
import ProductReservation from "./ProductReservation";
import ProductDescription from "./ProductDescription";
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
      }
    </>
  );
};

export default ProductDetail;
