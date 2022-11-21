import React from "react";
import { Link } from "react-router-dom";
import SearchCalendar from "../SearchCalendar";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/product-detail/product-reservation.css";



const ProductReservation = () => {
  const registeredUser = JSON.parse(localStorage.getItem("logged"));
  const navigate = useNavigate()
  const params = useParams();

  console.log(params.productId)

  const bookingRedirection = () => {
    registeredUser ? navigate(`/product-detail/${params.productId}/bookings`) : navigate("/login?error="+params.productId);
  }

  return (
    <div className="reservation">
      <div className="reservation-header">
        <h1>Fechas Disponibles</h1>
      </div>
      <div className="reservation-body">
        <SearchCalendar />
        <div className="reservation-step">
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <button onClick={bookingRedirection}>Iniciar reserva</button>
        </div>
      </div>
    </div>
  );
};

export default ProductReservation;
