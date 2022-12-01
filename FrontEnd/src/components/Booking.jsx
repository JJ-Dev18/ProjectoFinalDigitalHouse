import { ImageList, Tooltip } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import DetailBooking from "./booking/DetailBooking";
import { FormBooking } from "./booking/FormBooking";
import HourBooking from "./booking/HourBooking";
import ProductHeader from "./Product-detail/ProductHeader";
import ProductPolicies from "./Product-detail/ProductPolicies";
import SearchCalendar from "./SearchCalendar";
import "./styles/booking/booking.css";
import BookingContext from "../context/BookingContext";

const Booking = () => {
  const { userAuth } = useContext(AuthContext);
  const [checkin, setcheckin] = useState("___/___/____");
  const [checkout, setcheckout] = useState("___/___/____");
  const { state } = useLocation();
  const {range} = useContext(BookingContext);

  console.log(range, "range booking");

  const address = `${state.location.address}, ${state.city.name}, ${state.city.state}, ${state.city.country}`;
  const [formValues, handleInputChange, reset] = useForm({
    nombre: "",
    apellido: "",
    correo: "",
    ciudad: "",
    hora: "",
  });

  const { nombre, apellido, correo, ciudad, hora } = formValues;
  
  const dataBooking = {
    hora,
    startDate: range[0]?.toLocaleDateString("en-US"),
    endDate: range[1]?.toLocaleDateString("en-US"),
    product: {
      idProduct: userAuth.idUser,
    },
    user: {
      idUser: state.idProduct,
    },
  };
  return (
    <div style={{ marginBottom: "58px", backgroundColor: "#DFE4EA" }}>
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
        <div className="booking">
          <div>
            <FormBooking
              nombre={nombre}
              apellido={apellido}
              correo={correo}
              ciudad={ciudad}
              handleInputChange={handleInputChange}
            />
            <SearchCalendar
              booking={true}
              setcheckin={setcheckin}
              setcheckout={setcheckout}
              // clickDateHandler={clickDateHandler}
              // setValues={setDatesPicked}
              class="booking-calendar"
            />
            <HourBooking hora={hora} handleInputChange={handleInputChange} />
          </div>

          <DetailBooking
            rating={state.quality}
            img={state.images[0].url}
            category={state.category.title}
            title={state.title}
            address={address}
            checkin={checkin}
            checkout={checkout}
            dataBooking={dataBooking}
            token={userAuth.token}
          />
        </div>
      </div>
      <ProductPolicies
        normsPolicy={state.normPolicy}
        securityPolicy={state.securityPolicy}
        cancellationPolicy={state.cancellationPolity}
      />
    </div>
  );
};

export default Booking;
