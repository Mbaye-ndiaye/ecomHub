import React from 'react';

const CardList = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="h-32 w-full object-cover mt-2" src={product.image} alt={product.name} />
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-2xl">{product.name}</h1>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-xl">${product.price}</h1>
        {/* <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default CardList;
