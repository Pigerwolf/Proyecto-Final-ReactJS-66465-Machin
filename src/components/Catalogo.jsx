import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import SearchBar from './searchBar';



const Catalogo = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredProducts = products.filter(product => {
    const productName = product.Nombre ? product.Nombre.toLowerCase() : '';
    const productCategory = product.Categorías ? product.Categorías.toLowerCase() : '';
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productName.includes(lowerCaseSearchTerm) || productCategory.includes(lowerCaseSearchTerm);
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const addToCart = (product) => {
    // Implementa la lógica para agregar el producto al carrito
    console.log(`Producto agregado al carrito: ${product.Nombre}`);
  };

  return (
    <div className='catalogo-father'>
      <h1>Catálogo</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className='catalogo-ul'>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id} className='cata-li'>
              <h2>{product.Nombre}</h2>
              <div>{product.Imagen && <img src={product.Imagen} alt={product.Nombre} style={{ width: '200px', height: 'auto' }} />}</div>
              <p>{product.Descripción}</p>
              <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
              <p>Price: €{product.Valor}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Catalogo;