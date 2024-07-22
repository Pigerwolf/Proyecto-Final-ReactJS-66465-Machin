import '../index.css';
import './Navbar.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './context/cartContext'; 

const Navbar = () => {
    // Usa el hook para obtener el carrito
    const { cart } = useCart();

    return (
        <nav>
            <ul className='Nav-Bar-ul'>
                <li>
                    <Link to={`/`}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to={`/Catalogo`}>
                        Catálogo
                    </Link>
                </li>
                <li>
                    <Link to={`/contacto`}>
                        Contacto
                    </Link>
                </li>
                <div className="cart-container">
                    <Link to={'/Checkout'} className="cart-link">
                        <span className="cart-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        <span className="cart-count">{cart.length}</span>
                    </Link>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;