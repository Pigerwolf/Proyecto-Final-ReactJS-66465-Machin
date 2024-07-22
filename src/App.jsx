import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Contacto from "./components/contacto"
import MainContent from './components/MainContent';
import Header from './components/Header';
import Footer from "./components/Footer"
import Catalogo from "./components/Catalogo";
import Productos from './components/Productos';
import CartWidget from './components/cartWidget';
import { CartProvider } from '../src/components/context/cartContext';
import CheckoutPage from './components/Checkout';
function App() {

  return (

    <div>
      <BrowserRouter>
        <Header />
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/cartWidget" element={<CartWidget />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
        </Routes>
        </CartProvider>

        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App