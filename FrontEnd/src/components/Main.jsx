import React, { useState } from "react";
import "./styles/main.css";
import SearchBlock from "./Home/SearchBlock";
import CategoryBlock from "./Home/CategoryBlock";
import Recommended from "./Home/Recommended";
import { backendApi } from "../hooks/axiosBase";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Auth } from "../utils/Auth";
import {
  getProductsByCategory,
  getProductsByCity,
} from "../utils/requestProductsHome";
import { SkeletonC, SkeletonR } from "./Skeleton";

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

  console.log(products);

  useEffect(() => {
    if (categorySelected != 0) {
      getProductsByCategory(categorySelected).then(({ data }) =>
        setproducts(data)
      );
    }
  }, [categorySelected]);

  useEffect(() => {
    if (city != "") {
      getProductsByCity(city).then(({ data }) => setproducts(data));
    }
  }, [city]);

  return (
    <main>
      <SearchBlock city={city} setCity={setCity} />
      {!isLoading ? (
        <CategoryBlock categories={categories} setcategory={setcategory} />
      ) : (
        <div className="category-block">
          <div className="content-categories">
            <ul className="list-categories">
              <SkeletonC />
            </ul>
          </div>
        </div>
      )}
      {/* <div className="category-block">
        <div className="content-categories">
          <ul className="list-categories">
            <SkeletonC />
          </ul>
        </div>
      </div> */}

      {!isLoadingProducts ? (
        <Recommended products={products} />
      ) : (
        <div className="recommended-block">
          <div className="content-recommended">
            <ul className="list-recommended">
              <SkeletonR />
            </ul>
          </div>
        </div>
      )}
      {/* <div className="recommended-block">
        <div className="content-recommended">
          <ul className="list-recommended">
            <SkeletonR />
          </ul>
        </div>
      </div> */}
    </main>
  );
};

export default Main;
