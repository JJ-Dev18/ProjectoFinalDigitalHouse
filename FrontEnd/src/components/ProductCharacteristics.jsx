import React from 'react'
import kitchen from '../resources/characteristics/kitchen.svg'
import  './styles/product-characteristics.css'
import product from '../resources/products.json'

 const ProductCharacteristics = () => {
   return (
     <div className="content-characterstics">
       <h1>¿Qué ofrece este lugar?</h1>
       <ul className="characteristics-list">
         {product[0].characteristics.map((charact) => (
           <li className="characteristic" key={charact.idCharacteristic}>
             <img src={kitchen} alt="" />
             <p>{charact.title}</p>
           </li>
         ))}
       </ul>
     </div>
   );
 };


export default ProductCharacteristics;