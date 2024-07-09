import React from 'react';
import "./cartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({ cart }) => {
  return (
    <div className='cartWidget'>
    <FontAwesomeIcon icon={faShoppingCart}/>
      <h3>Carrito</h3>
      <p>Productos en el carrito: {cart.length}</p>
    </div>
  );
};

export default CartWidget;
