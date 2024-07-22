import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useCart } from './context/cartContext';
import SearchBar from './searchBar';

const Catalogo = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Productos'));
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
        setFilteredProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('error', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = products.filter(product => {
        const name = product.Nombre ? product.Nombre.toLowerCase() : '';
        const description = product.Descripción ? product.Descripción.toLowerCase() : '';
        return name.includes(lowercasedTerm) || description.includes(lowercasedTerm);
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='catalogo-father'>
      <h1>Catalogo</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className='catalogo-ul'>
        <ul>
          {filteredProducts.map(product => (
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