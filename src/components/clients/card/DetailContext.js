import axios from 'axios';
import React, { createContext, useState, useEffect} from 'react';

// import Produit from './Produit';

export const DetailCard = createContext();

const CardProduit = ({ children }) => {
  // Etat des produits
  const [produits, setProduits] = useState([]);

  //fetch des produits
  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get('/produits');
        setProduits(response.data);
      } catch (error) {
        console.error('Erreur de fetching des produits:', error);
      }
    };
    fetchProduits();
  }, [])

  return <DetailCard.Provider value={ {produits} }>{ children }</DetailCard.Provider>;
};

export default CardProduit;