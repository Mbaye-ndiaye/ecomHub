import axios from 'axios';
import React, { createContext, useState, useEffect} from 'react';

// import Produit from './Produit';

export const ProductsContext = createContext();

const ProduitProvider = ({ children }) => {
  // Etat des produits
  const [produits, setProduits] = useState([]);

  //fetch des produits
  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get('/https://fakestoreapi.com/products');
        setProduits(response.data);
      } catch (error) {
        console.error('Erreur de fetching des produits:', error);
      }
    };
    fetchProduits();
  }, [])

  return <ProductsContext.Provider value={ {produits} }>{ children }</ProductsContext.Provider>;
};

export default ProduitProvider;