import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Teams from './components/Teams/Teams'
import { Routes, Route } from 'react-router-dom'
import Services from './components/Services/Services'
import Client from './components/Client/Client'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Gamesproj from './components/Gamesproj/Gamesproj'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Arena from './components/Arena/Arena'


function App() {

  return (
    <>
    
    <ScrollToTop/>
    <Routes>
      <Route path = "/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/teams" element={<Teams></Teams>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/clients" element={<Client></Client>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/356games" element={<Gamesproj></Gamesproj>}></Route>
      <Route path="/arena" element={<Arena></Arena>}></Route>
    </Routes>
    </>
  )
}

export default App
