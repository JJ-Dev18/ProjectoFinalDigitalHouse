import React from "react";
import SearchCalendar from "../SearchCalendar";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/product-detail/product-reservation.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";



const ProductReservation = ({product}) => {
  const {auth} = useContext(AuthContext)
  const navigate = useNavigate()
  const params = useParams();

  console.log(params.productId)

  const bookingRedirection = () => {
    auth
      ? navigate(`/product-detail/${params.productId}/bookings`, {
          state: product,
        })
      : navigate("/login?error=" + params.productId, { state: product });
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
