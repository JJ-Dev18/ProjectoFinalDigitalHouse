import React from "react";
import "./styles/main.css";
import SearchBlock from "./SearchBlock";
import CategoryBlock from "./CategoryBlock";
import Recommended from "./Recommended";
import Characteristics from "./ProductCharacteristics";
import FetchData from "./FetchData";

const Main = (props) => {
  return (
    <main>
      <SearchBlock />
      <FetchData />
      <CategoryBlock />
      <Recommended />
    </main>
  );
};

export default Main;
