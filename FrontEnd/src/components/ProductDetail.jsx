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
import baseURL from '../hooks/axiosBase'

const ProductDetail = ({ modo }) => {
  const params = useParams();
  let url = baseURL + 'products/' + params.productId;
  let { isLoading, errorMessage, apiData } = useFetch(url);
  let { width } = useWindowSize();

  if (!!isLoading) return (
    <div className='product-detail-container'><h2>Cargando...</h2></div>
  )

  if (!!errorMessage) return (
    <div className='product-detail-container'><p>{errorMessage}</p></div>
  )

  return (
    <>{!!apiData &&
      <div className='product-detail-container'>
        <ProductHeader
          category={apiData.category.title}
          name={apiData.title}
          location={apiData.city}
          distance={apiData.distance}
          rating={apiData.quality} />
        {
          width > 1024
            ? <ProductGalleryDesktop images={apiData.images} />
            : <ProductGallery images={apiData.images} />
        }
        <ProductDescription
          title={apiData.titleDescription}
          description={apiData.category.description}
        />
        <ProductCharacteristics characteristics={apiData.feature} />
        <ProductReservation />
        <ProductPolicies
          normsPolicy={apiData.normPolicy}
          securityPolicy={apiData.securityPolicy}
          cancellationPolicy={apiData.cancellationPolity}
        />
      </div>
    }
    </>
  );
};

export default ProductDetail;
