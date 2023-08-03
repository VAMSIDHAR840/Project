import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Componet/Login'
import Register from './Componet/Register'
const App = () => {
  return (

    <BrowserRouter>
      <Routes>

        <Route element={<Login />} path='/' />
        <Route element={<Register />} path='/register' />
      </Routes>
    </BrowserRouter>

  )
}

export default App
