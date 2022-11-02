import React from 'react'
import Categories from '../resources/categories.json'
import img_categoria from '../resources/img_categoria.png'
import "./styles/category.css";

const CategoryBlock = () => {
 
  return (
    <div className="category-block">
      {/* <p>Paragrafo</p> */}
      <div className="content-categories">
        <ul className="list-categories">
          <div className="categories-title">
            <h2>Buscar por tipo de alojamiento</h2>
          </div>
          {Categories.map((category, index) => (
            <li key={index} className="category-card">
              <img src={category.urlImage} alt="image category" />
              <div className="info-card-category">
                <h2>{category.name}</h2>
                <p>{category.cant}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryBlock;