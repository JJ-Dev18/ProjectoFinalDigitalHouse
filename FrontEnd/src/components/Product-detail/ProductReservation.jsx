import React from "react";
import SearchCalendar from "../SearchCalendar";
import "../styles/product-detail/product-reservation.css";

const ProductReservation = () => {
  return (
    <div className="reservation">
      <div className="reservation-header">
        <h1>Fechas Disponibles</h1>
      </div>
      <div className="reservation-body">
        <SearchCalendar />
        <div className="reservation-step">
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <button>Iniciar reserva</button>
        </div>
      </div>
    </div>
  );
};

export default ProductReservation;
