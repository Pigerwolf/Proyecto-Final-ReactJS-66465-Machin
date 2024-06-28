import '../index.css'
import { Link } from "react-router-dom"

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
            </ul>
        </nav>
    )
}

export default Navbar