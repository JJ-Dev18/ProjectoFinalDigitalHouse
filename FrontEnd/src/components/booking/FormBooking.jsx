import React from 'react'
import '../styles/booking/form-booking.css'
export const FormBooking = () => {
  return (
    <form className="content-form">
      <h1>Completá tus datos</h1>
      <div className="form-control">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
      </div>
      <div className="form-control">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" placeholder="" />
      </div>
      <div className="form-control">
        <label htmlFor="correo">Correo Electronico</label>
        <input type="text" id="correo" />
      </div>
      <div className="form-control">
        <label htmlFor="ciudad">Ciudad</label>
        <input type="text" id="ciudad" placeholder="Ciudad" />
      </div>
    </form>
  );
}
