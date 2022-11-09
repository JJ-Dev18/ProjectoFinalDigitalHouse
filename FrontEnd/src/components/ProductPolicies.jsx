import React from 'react'
import product from '../resources/products.json'
import "./styles/product-policies.css";

const ProductPolicies = ({normsPolicy,securityPolicy,cancellationPolicy}) => {

  return (
    <div className="content-policies">
      <h1 className="title-policies">Qué tenés que saber</h1>
      <div className="content-list-policies">
        <ul className="policies-list">
          <h1>Normas de la casa </h1>
          {normsPolicy.map((prod) => (
            <li className="policy" key={prod.idNormPolity}>
              <p>{prod.Description}</p>
            </li>
          ))}
        </ul>
        <ul className="policies-list">
          <h1>Salud y seguridad </h1>
          {securityPolicy.map((prod) => (
            <li className="policy" key={prod.idSecurityPolity}>
              <p>{prod.Description}</p>
            </li>
          ))}
        </ul>
        <ul className="policies-list">
          <h1>Política de cancelación </h1>
          {cancellationPolicy.map((prod) => (
            <li className="policy" key={prod.idCancellationPolity}>
              <p>{prod.Description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default ProductPolicies;