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
    url: Auth() ? "/products/recommended" : "/products/random",
  });
  
  useEffect(() => {
    if (!isLoadingProducts) {
      setproducts([...productsApi]);
    }
  }, [isLoadingProducts]);
  
  console.log(products)

   useEffect(() => {
    if(categorySelected != 0){
      getProductsByCategory(categorySelected).then(({data}) => setproducts(data))
    }
  }, [categorySelected]);


   useEffect(() => {
    if(city != ""){
      getProductsByCity(city).then(({ data }) =>
        setproducts(data)
      );
    }
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
        <Recommended products={products} />
      ) : (
        <h1>Loading ....</h1>
      )}
    </main>
  );
};

export default Main;
