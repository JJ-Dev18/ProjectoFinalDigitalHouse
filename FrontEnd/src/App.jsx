import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./utils/Auth";
import Main from "./components/Main";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Layout from './components/Layout'
import Booking from "./components/Booking";

const App = () => {
  return (
    <div>
      {Auth()}
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />}/>
          <Route path="/product-detail/:productId/bookings" element={<ProductDetail />}/>
        </Routes>
        
      </Layout>
    </div>
  );
};

export default App;
