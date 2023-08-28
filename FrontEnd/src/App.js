import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Componet/Login'
import Register from './Componet/Register'
import Homepage from './Componet/Homepage'
const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path='/register' />
        <Route element={<Login />} path='/login' />
        <Route element={<Homepage/>} path='/home' />
      </Routes>
    </BrowserRouter>

  )
}

export default App
