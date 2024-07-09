import '../index.css'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
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
                <li>
                    <Link to={`/cartWidget`}>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    </Link>
                </li>      
            </ul>
        </nav>
    )
}

export default Navbar