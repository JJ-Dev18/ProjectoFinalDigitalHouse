import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ProductHeader from "./ProductHeader";
import ProductGallery from "./ProductGallery";
import ProductGalleryDesktop from "./ProductGalleryDesktop";
import "./styles/product-detail.css";
import ProductCharacteristics from "./ProductCharacteristics";
import ProductPolicies from "./ProductPolicies";
import ProductReservation from "./ProductReservation";
<<<<<<< HEAD
import FetchData from "./FetchData";

=======
import ProductDescription from "./ProductDescription";
import useWindowSize from "../utils/useWindowSize";

async function fetchProductDetail(id) {
  // return await fetch(`API/${id}`).then(data => data.json());
  return await import('../resources/products.json').then(data => data[0]);
}
>>>>>>> 34323187d0832402cf73a9d6da153cc9051bee78

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
<<<<<<< HEAD
    <div className="product-detail-container">
      <FetchData />
      <ProductHeader category={"Hotel"} name={"Hotel Hermitage"} />
      <ProductGallery images={["TODO"]} />
      <div> {`<product-description/>`}</div>
      <ProductCharacteristics />
      <ProductReservation />
      <ProductPolicies/>
    </div>
=======
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
              title={product.titleDescription}
              description={product.category.description}
            />
            <ProductCharacteristics characteristics={product.characteristics} />
            <ProductReservation />
            <ProductPolicies
              normsPolicy={product.NormsPolicy}
              securityPolicy={product.SecurityPolicy}
              cancellationPolicy={product.CancellationPolicy}
            />
          </div>
      }
    </>
>>>>>>> 34323187d0832402cf73a9d6da153cc9051bee78
  );
};

export default ProductDetail;
