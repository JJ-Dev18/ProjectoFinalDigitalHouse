import React from 'react'
import Categories from '../resources/categories.json'
import img_categoria from '../resources/img_categoria.png'

export const CategoryBlock = () => {
 
  return (
    <div className="category_block">
      {/* <p>Paragrafo</p> */}
      <div className="content_categories">
        <h2 className="categories_title">Buscar por tipo de alojamiento</h2>
        <ul className="list_categories">
          {Categories.map((category, index) => (
            <li key={index} className="category_card">
              <img src={img_categoria} alt="" />
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
