import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaShoppingCart, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PanierContext } from '../../../utils/context/PanierContext';
import useProduit from '../../../utils/hooks/useProduit';
import LoaderCard from '../../../pages/clients/loaderCard/LoaderCard';


const CardList = () => {
  const { addProduitToCart } = useContext(PanierContext);
  const [products, setProducts] = useState([]);
  const { produits } = useProduit();

  const handleAddProduitToCart = (product) => {
    addProduitToCart(product);
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

  const groupByCategory = (products) => {
    return products.reduce((acc, product) => {
      (acc[product.categorie] = acc[product.categorie] || []).push(product);
      return acc;
    }, {});
  };

  const groupedProducts = groupByCategory(products);

  return (
    <div className=" px-5 mx-auto">
      <LoaderCard />
      <h1 className="text-3xl font-bold text-start my-8">Catégorie</h1>
      {Object.keys(groupedProducts).map((category, index) => (
        <div key={index} className="mb-10">
          {/* <h2 className="text-2xl font-semibold mb-4">categorie</h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols- xl:grid-cols-4 gap-10 left-10">
            {groupedProducts[category].slice(0, 4).map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg ">
                <div>
                  <div className='absolute z-[10px] flex items-center justify-center text-white bg-red-700 text-sm font-bold w-7 h-7 rounded-full '>
                    <FaEye />
                  </div>
                  <Link>
                    <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
                  </Link>
                </div>
                <div className="p-3">
                  <h3 className="text-lg text-black mb-2">{product.name}</h3>
                  <p className="text-black text-xs mb-2">{product.name}</p>
                  <div className='flex justify-between items-center px-0'>
                    <p className="text-gray-900 font-bold">{product.prix} FCFA</p>
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
      ))}
    </div>
  );
};

export default CardList;
