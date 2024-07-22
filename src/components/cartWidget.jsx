import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './context/cartContext'; 
import { Link } from 'react-router-dom';
import './cartWidget.css'

const CartWidget = () => {
  const { cart, removeFromCart } = useCart();

  const totalAmount = cart.reduce((acc, item) => acc + item.Valor, 0);

  return (
    <div className='cartWidget'>
      <Link to="/Checkout" className="cart-link">
        <span className='cart-icon'>
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
        <span className='cart-count'>{cart.length}</span>
      </Link>
      <p>Total: ${totalAmount.toFixed(2)}</p>
      <div className='cart-items'>
        {cart.map((item) => (
          <div key={item.id} className='cart-item'>
            <span>{item.Nombre}</span>
            <span>${item.Valor.toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)} className='remove-btn'>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartWidget