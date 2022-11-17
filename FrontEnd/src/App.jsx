import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register' 
import ProductDetail from './components/ProductDetail'

import { Auth } from './components/Auth'

const App = () => {
  return (
    <div>
      {Auth()}
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />
          <Route path="/product-detail/:productId/reservations"  />
        </Routes>z
      </Layout>
    </div>
  )
}

export default App