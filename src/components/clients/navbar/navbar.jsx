import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container flex flex-row items-center justify-between py-4 mx-auto">
        <a href="/" className="text-lg font-bold text-gray-800">Nom de votre boutique</a>

        <div className="flex flex-row space-x-4">
          <a href="/produits" className="text-gray-600 transition-colors hover:text-gray-800">Produits</a>
          <a href="/categories" className="text-gray-600 transition-colors hover:text-gray-800">Catégories</a>
          
          <a href="/panier" className="text-gray-600 transition-colors hover:text-gray-800">Panier</a>
          <a href="/compte" className="text-gray-600 transition-colors hover:text-gray-800">Compte</a>
        </div>

        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l-4-4m0 0l-4 4M16 16l-4 4m0 0l-4-4" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
