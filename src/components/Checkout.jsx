import { useCart } from './context/cartContext'

const CheckoutPage = () => {
    const { cart } = useCart();
  
    const totalAmount = cart.reduce((acc, item) => acc + item.Valor, 0);
  
    return (
      <div className="checkout-page">
        <h2>Carrito:</h2>
        <div className="checkout-items">
          {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="checkout-item">
                  <span>{item.Nombre}</span>
                  <span>{item.Imagen && <img src={item.Imagen} alt=""style={{ width: '200px', height: 'auto', padding: '20px' }}/>}</span>
                  <span>€{item.Valor.toFixed(2)}</span>
                </li>
                
              ))}
            </ul>
          )}
        </div>
        <p className="total">Total: €{totalAmount.toFixed(2)}</p>
        <button className="checkout-button">Finalizar Compra</button>
      </div>
    );
  };
  
  export default CheckoutPage;