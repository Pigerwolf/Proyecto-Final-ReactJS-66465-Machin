import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Contacto from "./components/contacto"
import MainContent from './components/MainContent';
import Header from './components/Header';
import Footer from "./components/Footer"
import Catalogo from './components/Catalogo';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Catalogo" element={<Catalogo/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App