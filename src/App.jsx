import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header/><Home/></>}/>
          <Route path='/Login' element={<><Header/><Login/></>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
