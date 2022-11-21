import React from "react";
import { Link } from "react-router-dom";
import SearchCalendar from "../SearchCalendar";
import "../styles/product-detail/product-reservation.css";

const ProductReservation = ({product}) => {
  console.log(product)
  return (
    <div className="reservation">
      <div className="reservation-header">
        <h1>Fechas Disponibles</h1>
      </div>
      <div className="reservation-body">
        <SearchCalendar />
        <div className="reservation-step">
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>

          <Link
            to={`/product-detail/${product.idProduct}/reservations`}
            state={product}
          >
            Iniciar reserva
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductReservation;
