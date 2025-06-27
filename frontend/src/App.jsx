import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Submission from './components/Submission'

function App() {
  
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <Submission/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/s' element={<Submission/>}/>
      </Routes>
    </>
  )
}

export default App
