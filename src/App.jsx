import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Contacto from "./components/contacto"
import MainContent from './components/MainContent';
import Header from './components/Header';
import Footer from "./components/Footer"
import Catalogo from "./components/Catalogo";
import ProductPage from './components/productpage';


function App() {

  return (

    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/ProductPage" element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App