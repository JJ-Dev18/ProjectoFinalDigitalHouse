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
import useFetch from '../hooks/useFetch'

const ProductDetail = ({ modo }) => {
  const params = useParams();
  let { isLoading, error, response } = useFetch({ url: 'products/' + params.productId });
  let { width } = useWindowSize();


  if (!!isLoading) return (
    <div className='product-detail-container'><h2>Cargando...</h2></div>
  )

  if (!!error) return (
    <div className='product-detail-container'><p>{error}</p></div>
  )

  return (
    <>{!!response &&
      <div className='product-detail-container'>
        {console.log(response.quality)}
        <ProductHeader
          category={response.category.title}
          name={response.title}
          location={response.city}
          distance={response.distance}
          rating={response.quality} />
        {
          width > 1024
            ? <ProductGalleryDesktop images={response.images} />
            : <ProductGallery images={response.images} />
        }
        <ProductDescription
          title={response.titleDescription}
          description={response.description}
        />
        <ProductCharacteristics characteristics={response.feature} />
        <ProductReservation />
        <ProductPolicies
          normsPolicy={response.normPolicy}
          securityPolicy={response.securityPolicy}
          cancellationPolicy={response.cancellationPolity}
        />
      </div>
    }
    </>
  );
};

export default ProductDetail;
