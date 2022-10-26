import React from 'react'
import Categories from '../resources/categories.json'
import img_categoria from '../resources/img_categoria.png'
import "./styles/category.css";

const CategoryBlock = () => {
 
  return (
    <div className="category_block">
      {/* <p>Paragrafo</p> */}
      <div className="content_categories">
        <ul className="list_categories">
        {/* <h2 className="categories_title">Buscar por tipo de alojamiento</h2> */}
          {Categories.map((category, index) => (
            <li key={index} className="category_card">
              <img src={category.urlImage} alt="image category" />
              <div className="info_card_category">
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