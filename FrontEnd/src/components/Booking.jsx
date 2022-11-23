import { ImageList, Tooltip } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DetailBooking from "./booking/DetailBooking";
import { FormBooking } from "./booking/FormBooking";
import HourBooking from "./booking/HourBooking";
import ProductHeader from "./Product-detail/ProductHeader";
import ProductPolicies from "./Product-detail/ProductPolicies";
import SearchCalendar from "./SearchCalendar";
import "./styles/booking/booking.css";

const Booking = () => {
  const { state } = useLocation();
  console.log(state);
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
            <FormBooking />
            <SearchCalendar
              booking={true}
              // clickDateHandler={clickDateHandler}
              // setValues={setDatesPicked}
              class="booking-calendar"
            />
            <HourBooking />
          </div>

          <DetailBooking
            rating={state.quality}
            img={state.images[0].url}
            category={state.category.title}
            title={state.title}
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
