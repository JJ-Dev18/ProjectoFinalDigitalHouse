import React from "react";
import "./styles/main.css";
import SearchBlock from "./SearchBlock";
import CategoryBlock from "./CategoryBlock";
import Recommended from "./Recommended";
import Characteristics from "./ProductCharacteristics";

const Main = (props) => {
  return (
    <main>
      <SearchBlock />
      <CategoryBlock />
      <Recommended />
    </main>
  );
};

export default Main;
