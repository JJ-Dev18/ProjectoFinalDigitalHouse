import React, { useState } from "react";
import "./styles/main.css";
import SearchBlock from "./SearchBlock";
import CategoryBlock from "./CategoryBlock";
import Recommended from "./Recommended";
import { backendApi } from "../hooks/axiosBase";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Auth } from "./Auth";


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
    url: Auth() ? "/products" : "/products"
    // url: Auth() ? "/products/recommended" : "/products/random",
  });
  console.log(products);

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
