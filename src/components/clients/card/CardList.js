import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import usePanier from '../../../utils/hooks/usePanier';
import { PanierContext } from '../../../utils/context/PanierContext';
import { FaEye } from "react-icons/fa";
import useProduit from '../../../utils/hooks/useProduit';




const CardList = ({produit}) => {
  const { addProduitToCart } = useContext(PanierContext);
  const [products, setProducts] = useState([]); 
  const { produits } = useProduit();

  const handleAddProduitToCart = (product) => {
    
    addProduitToCart(product)
  }

  // const handleProductClick = (product) => {
  //   // Stocker l'ID du produit dans le localStorage
  //   localStorage.setItem('selectedProductId', product.id);
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data);
        //  console.log("response", response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container px-5">
      <h1 className="text-3xl font-bold text-start my-8">categorie</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-10 ">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg  overflow-hidden shadow-lg">
            <div>
            
                <div className='absolute z-0  flex items-center justify-center  text-white bg-red-700 text-sm font-bold w-7 h-7 rounded-full'><FaEye /></div>
             
            <Link>
            <img className="w-full h-48 object-cover " 
            src={product.image} 
            alt={product.title} 
            
            />
            </Link>
            </div>  
            <div className="p-3">
              <h3 className="text-lg text-black mb-2">{product.name}</h3>
              <p className="text-black text-xs mb-2">{product.name}</p>
              <div className='flex justify-between items-center px-0'>
              <p className="text-gray-900 font-bold">${product.prix}</p>
              <button 
              onClick={() => handleAddProduitToCart(product)}
              className=" bottom-0 left-10  bg-red-500 text-white px-2 py-1 rounded-lg">
                <FaShoppingCart 
                /> 
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





// import React from 'react';

// const CardList = ({ products }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//       {products.map((product, index) => (
//         <div key={index} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//           <img className="h-32 w-full object-cover mt-2" src={product.image} alt={product.name} />
//           <div className="px-4 py-2">
//             <h1 className="text-gray-900 font-bold text-2xl">{product.name}</h1>
//             <p className="text-gray-600 text-sm mt-1">{product.description}</p>
//           </div>
//           <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
//             <h1 className="text-gray-200 font-bold text-xl">${product.price}</h1>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardList;

