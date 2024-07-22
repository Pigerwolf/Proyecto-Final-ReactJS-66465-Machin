import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useCart } from './context/cartContext';
import SearchBar from './searchBar';

const Catalogo = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Productos'));
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products: ', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='catalogo-father'>
      <h1>Catalogo</h1>
      <SearchBar />

      <div className='catalogo-ul'>
        <ul>
          {products.map(product => (
            <li key={product.id} className='cata-li'>
              <h2>{product.Nombre}</h2>
              <div>{product.Imagen && <img src={product.Imagen} alt={product.Nombre} style={{ width: '200px', height: 'auto' }} />}</div>
              <p>{product.Descripción}</p>
              <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
              <p>Price: ${product.Valor}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Catalogo;