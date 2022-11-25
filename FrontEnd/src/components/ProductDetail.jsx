import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductHeader from "./Product-detail/ProductHeader";
import ProductGallery from "./Product-detail/ProductGallery";
import ProductGalleryDesktop from "./Product-detail/ProductGalleryDesktop";
import "./styles/product-detail/product-detail.css";
import ProductCharacteristics from "./Product-detail/ProductCharacteristics";
import ProductPolicies from "./Product-detail/ProductPolicies";
import ProductReservation from "./Product-detail/ProductReservation";
import ProductDescription from "./Product-detail/ProductDescription";
import useWindowSize from "../utils/useWindowSize";
import useFetch from "../hooks/useFetch";
import ProductMap from "./Product-detail/ProductMap";
import credentials from "../utils/credentials"

const ProductDetail = ({ modo }) => {
  const params = useParams();
  let { isLoading, error, response } = useFetch({
    url: "products/" + params.productId,
  });
  let { width } = useWindowSize();

  if (!!isLoading)
    return (
      <div className="product-detail-container">
        <h2>Cargando...</h2>
      </div>
    );

  if (!!error)
    return (
      <div className="product-detail-container">
        <p>{error}</p>
      </div>
    );

  return (
    <>
      {!!response && (
        <div className="product-detail-container">
          {console.log(response.quality)}
          <ProductHeader
            category={response.category.title}
            name={response.title}
            location={response.city}
            distance={response.distance}
            rating={response.quality}
          />
          {width > 1024 ? (
            <ProductGalleryDesktop images={response.images} />
          ) : (
            <ProductGallery images={response.images} />
          )}
          <ProductDescription
            title={response.titleDescription}
            description={response.description}
          />
          <ProductCharacteristics characteristics={response.feature} />
          <ProductReservation product={response}/>
          <ProductMap  
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`} 
            containerElement={<div style={{height: '400px'}}/>}
            mapElement={<div style={{height: '100%'}}/>}
            loadingElement={<p>Cargando</p>}
          />
          <ProductPolicies
            normsPolicy={response.normPolicy}
            securityPolicy={response.securityPolicy}
            cancellationPolicy={response.cancellationPolity}
          />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
