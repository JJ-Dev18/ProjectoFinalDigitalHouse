import React from 'react'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
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