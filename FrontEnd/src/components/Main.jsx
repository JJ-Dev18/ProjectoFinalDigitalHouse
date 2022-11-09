import React, { useState } from "react";
import "./styles/main.css";
import SearchBlock from "./SearchBlock";
import CategoryBlock from "./CategoryBlock";
import Recommended from "./Recommended";
import Characteristics from "./ProductCharacteristics";
import FetchData from "./FetchData";
// import useFetch from "../hooks/useFetch";
import baseURL, { backendApi } from "../hooks/axiosBase";
import recommended from "../resources/recommended.json";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Main = (props) => {
  const [categorSelected, setcategory] = useState(0);
  const { response: categories, isLoading } = useFetch({
    api: backendApi,
    method: "get",
    url: "/categories",
  });
  const { response: products, isLoading: isLoadingProducts } = useFetch({
    api: backendApi,
    method: "get",
    url: "/products",
  });
  console.log(products);
  // const {
  //   isLoading: isLoadingCategories,
  //   errorMessage: errorMessageProducts,
  //   apiData: categories,
  // } = useFetch(baseURL + "categories");
  // const {
  //   isLoading,
  //   errorMessage,
  //   apiData: products,
  // } = useFetch(baseURL + "products");

  // console.log(isLoading, products);
  useEffect(() => {}, []);

  return (
    <main>
      <SearchBlock />
      {/* <FetchData /> */}
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
