import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar"
import Contacto from "./components/contacto"
import MainContent from './components/MainContent';
import Header from './components/Header';

function App() {

  return (

      <BrowserRouter>
      <Header/>
      <NavBar/>
        <Routes>
        <Route path="/" element={<MainContent />}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
       

  )
}

export default App