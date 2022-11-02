import React from 'react'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import { Navigate } from "react-router-dom";
import { Auth } from './components/Auth'

const App = () => {
  return (
    <div>
      {Auth()}
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App