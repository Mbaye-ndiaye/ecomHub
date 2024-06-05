import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaShoppingCart, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PanierContext } from '../../../utils/context/PanierContext';
import useProduit from '../../../utils/hooks/useProduit';

const CardList = () => {
  const { addProduitToCart } = useContext(PanierContext);
  const [products, setProducts] = useState([]); 
  const { produits } = useProduit();

  const handleAddProduitToCart = (product) => {
    if (product && typeof product.prix === 'number') {
      addProduitToCart(product);
    } else {
      console.error('Produit invalide ou prix manquant :', product);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container px-5">
      <h1 className="text-3xl font-bold text-start my-8">Catégorie</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div>
              <div className='absolute z-0 flex items-center justify-center text-white bg-red-700 text-sm font-bold w-7 h-7 rounded-full'>
                <FaEye />
              </div>
              <Link>
                <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
              </Link>
            </div>  
            <div className="p-3">
              <h3 className="text-lg text-black mb-2">{product.name}</h3>
              <p className="text-black text-xs mb-2">{product.name}</p>
              <div className='flex justify-between items-center px-0'>
                <p className="text-gray-900 font-bold">${product.prix}</p>
                <button 
                  onClick={() => handleAddProduitToCart(product)}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg">
                  <FaShoppingCart /> 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
