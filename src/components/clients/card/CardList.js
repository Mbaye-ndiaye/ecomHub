import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-start my-8">categorie</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img className="w-full h-32 object-cover" src={product.image} alt={product.title} />
            <div className="p-3">
              <h3 className="text-sm font-semibold mb-2">{product.title}</h3>
              {/* <p className="text-gray-700 mb-2">{product.description}</p> */}
              <p className="text-gray-900 font-bold">${product.price}</p>
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

