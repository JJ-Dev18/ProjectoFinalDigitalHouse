import React from "react";
import SearchCalendar from "../SearchCalendar";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/product-detail/product-reservation.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";



<<<<<<< HEAD
const ProductReservation = () => {
  const {auth} = useContext(AuthContext)
=======
const ProductReservation = ({product}) => {
  const registeredUser = JSON.parse(localStorage.getItem("logged"));
>>>>>>> c1ecf9190fd1f033df3bd82bbc4d80ca1768ced0
  const navigate = useNavigate()
  const params = useParams();

  console.log(params.productId)

  const bookingRedirection = () => {
<<<<<<< HEAD
    auth ? navigate(`/product-detail/${params.productId}/bookings`) : navigate("/login?error="+params.productId);
=======
    registeredUser
      ? navigate(`/product-detail/${params.productId}/bookings`, {
          state: product,
        })
      : navigate("/login?error=" + params.productId);
>>>>>>> c1ecf9190fd1f033df3bd82bbc4d80ca1768ced0
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
