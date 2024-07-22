import { Link } from 'react-router-dom';

const CartPage = () => {

  const cart = [];

  return (
    <div className='cartPage'>
      <h1>Carrito</h1>
      <div className='cartItems'>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className='cartItem'>
              <h3>{item.Nombre}</h3>
              <p>Precio: ${item.Valor}</p>
              <button onClick={() => removeFromCart(item.id)} className='remove-btn'>
            </button>
            </div>
          ))
        )}
      </div>
      <Link to="/checkout">
        <button className='checkout-btn'>Ir al Checkout</button>
      </Link>
    </div>
  );
};

export default CartPage;