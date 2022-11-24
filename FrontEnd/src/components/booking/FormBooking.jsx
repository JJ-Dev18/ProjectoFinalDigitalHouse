import React from 'react'
import '../styles/booking/form-booking.css'
export const FormBooking = ({nombre,apellido,correo,ciudad,handleInputChange}) => {


  return (
    <form className="content-form">
      <h1>Completá tus datos</h1>
      <div className="form-control">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          id="apellido"
          placeholder=""
          name="apellido"
          value={apellido}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="correo">Correo Electronico</label>
        <input
          type="text"
          id="correo"
          name="correo"
          value={correo}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="ciudad">Ciudad</label>
        <input
          type="text"
          id="ciudad"
          placeholder="Ciudad"
          name="ciudad"
          value={ciudad}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
