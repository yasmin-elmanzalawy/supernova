import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import { Routes, Route } from 'react-router-dom'
import Services from './components/Services/Services'
import Client from './components/Client/Client'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {

  return (
    <>
    
    <Routes>
      <Route path = "/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/clients" element={<Client></Client>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    </>
  )
}

export default App
