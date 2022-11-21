import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import DetailBooking from './booking/DetailBooking';
import { FormBooking } from './booking/FormBooking';
import HourBooking from './booking/HourBooking';
import ProductHeader from './Product-detail/ProductHeader';
import ProductPolicies from './Product-detail/ProductPolicies';
import SearchCalendar from './SearchCalendar';
import './styles/booking/booking.css'

 const Booking = () => {
  const {state } = useLocation()
  console.log(state )
  return (
    <div style={{ marginBottom: "58px" }}>
      <div className="product-detail-container">
        <ProductHeader
          category={state.category.title}
          name={state.title}
          location={state.city}
          distance={state.distance}
          rating={state.quality}
          pLocation={false}
        />
      </div>
      <div className="content-booking">
        <h1>Completa tus datos</h1>
        <FormBooking />
        <h1>Tu Horario de llegada</h1>
        <HourBooking />
        <h1>Seleccioná tu fecha de reserva</h1>
        <SearchCalendar
          // clickDateHandler={clickDateHandler}
          // setValues={setDatesPicked}
          // class={`select picker }`}
        />
      </div>
      <DetailBooking rating={5}/>
      <ProductPolicies
        normsPolicy={state.normPolicy}
        securityPolicy={state.securityPolicy}
        cancellationPolicy={state.cancellationPolity}
      />
    </div>
  );
}

export default Booking;