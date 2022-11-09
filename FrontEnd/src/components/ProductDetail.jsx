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
  const { isLoading, errorMessage, apiData } = useFetch(url);
  const { width } = useWindowSize();

  if (isLoading) return (
    <div className='product-detail-container'><h2>Cargando...</h2></div>
  )

  return (
    <>
      {errorMessage
        ? <p>{errorMessage}</p>
        : <div className='product-detail-container'>
          <ProductHeader
            category={apiData.category.title}
            name={apiData.title}
            location={apiData.city}
            rating={apiData.quality} />
          {
            width < 1024
              ? <ProductGallery images={apiData.images} />
              : <ProductGalleryDesktop images={apiData.images} />
          }
          <ProductDescription
            title={apiData.titleDescription}
            description={apiData.category.description}
          />
          <ProductCharacteristics characteristics={apiData.characteristics} />
          <ProductReservation />
          <ProductPolicies
            normsPolicy={apiData.NormsPolicy}
            securityPolicy={apiData.SecurityPolicy}
            cancellationPolicy={apiData.CancellationPolicy}
          />
        </div>
      }
    </>
  );
};

export default ProductDetail;
