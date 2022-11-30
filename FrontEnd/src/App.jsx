import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./utils/Auth";
import Main from "./components/Main";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Layout from './components/Layout'
import SuccessfulBooking from "./components/SuccessfulBooking";
import { AuthProvider } from "./context/AuthContext";
import Booking from "./components/Booking";
import { DatesProvider } from "./context/DatesProvider";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <DatesProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/successful-booking" element={<SuccessfulBooking />} />
            <Route path="/product-detail/:productId" element={<ProductDetail />} />
            <Route path="/product-detail/:productId/bookings" element={<Booking />} />
          </Routes>
        </Layout>
        </DatesProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
