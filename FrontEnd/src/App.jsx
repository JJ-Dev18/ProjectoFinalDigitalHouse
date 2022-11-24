import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./utils/Auth";
import Main from "./components/Main";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Layout from './components/Layout'
import SuccessfulBooking from "./components/SuccessfulBooking";
<<<<<<< HEAD
import { AuthProvider } from "./context/AuthContext";
=======
import Booking from "./components/Booking";
>>>>>>> c1ecf9190fd1f033df3bd82bbc4d80ca1768ced0

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/successful-booking" element={<SuccessfulBooking />} />
            <Route path="/product-detail/:productId" element={<ProductDetail />} />
            <Route path="/product-detail/:productId/bookings" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </AuthProvider>
=======
      {Auth()}
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/successful-booking" element={<SuccessfulBooking />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />}/>
          <Route path="/product-detail/:productId/bookings" element={<Booking />}/>
        </Routes>
      </Layout>
>>>>>>> c1ecf9190fd1f033df3bd82bbc4d80ca1768ced0
    </div>
  );
};

export default App;
