import React from 'react'
import '../styles/booking/hour-booking.css'
import check from '../../resources/check.svg'
 const HourBooking = () => {
  return (
    <div className="content-hour">
      <div>
        <img src={check} alt="icon check" />
        <h2>
          Tu habitación va a estar lista para el check-in entre las 10:00 AM y
          las 11:00 PM
        </h2>
      </div>
      <div className="select-hours">
        <label htmlFor="hora">Indicá tu horario estimado de llegada</label>
        <select id="hora" placeholder="Seleccionar hora de llegada"></select>
      </div>
    </div>
  );
}

export default HourBooking;