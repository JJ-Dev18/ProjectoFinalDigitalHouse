import React from 'react'
import Categories from '../resources/categories.json'
import img_categoria from '../resources/img_categoria.png'
import "./styles/category.css";

const CategoryBlock = ({setcategory,categories}) => {
 
  return (
    <div className="category-block">
      {/* <p>Paragrafo</p> */}
      <div className="content-categories">
        <ul className="list-categories">
          {categories.map((category, index) => (
            <li
              key={category.idCategory}
              className="category-card"
              onClick={() => {
                setcategory(category.idCategory);
              }}
            >
              <div className="categories-title">
                <h2>Buscar por tipo de situazzione</h2>
              </div>
              <img src={category.imageUrl} alt="image category" />
              <div className="info-card-category">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryBlock;