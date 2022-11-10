import React, { useState } from "react";
import "./styles/main.css";
import SearchBlock from "./SearchBlock";
import CategoryBlock from "./CategoryBlock";
import Recommended from "./Recommended";
import { backendApi } from "../hooks/axiosBase";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Auth } from "./Auth";
import { getProductsByCategory, getProductsByCity } from "../utils/requestProductsHome";


const Main = (props) => {
  const [categorySelected, setcategory] = useState(0);
  const [products, setproducts] = useState([]);
  const [city, setCity] = useState("");
  const { response: categories, isLoading } = useFetch({
    api: backendApi,
    method: "get",
    url: "/categories",
  });
  const { response: productsApi, isLoading: isLoadingProducts } = useFetch({
    api: backendApi,
    method: "get",
    // url: Auth() ? "/products" : "/products"
    url: Auth() ? "/products/recommended" : "/products/random",
  });

   useEffect(() => {
    getProductsByCategory(categorySelected).then(({data}) => setproducts(data))
  }, [categorySelected]);

   useEffect(() => {
     getProductsByCity(city).then(({ data }) =>
       setproducts(data)
     );
   }, [city]);


  return (
    <main>
      <SearchBlock city={city} setCity={setCity} />
      {!isLoading ? (
        <CategoryBlock categories={categories} setcategory={setcategory} />
      ) : (
        <h1>Loading ....</h1>
      )}
      {!isLoadingProducts ? (
        <Recommended products={productsApi} />
      ) : (
        <h1>Loading ....</h1>
      )}
    </main>
  );
};

export default Main;
