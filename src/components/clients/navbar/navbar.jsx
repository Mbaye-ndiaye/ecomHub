import React, { useState } from 'react';
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Input from './Input';

const Navbar = () => {
  // État local pour contrôler l'ouverture du menu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between p-2 bg-black p-2 w-full fixed top-0">
        <nav className="">
          <div className="flex items-center justify-between mx-auto max-w-7xl">
            <div className="flex items-center">
              <p className="mx-4 text-xl font-semibold text-white">Logo</p>
              <div className="flex mx-4 mx-auto text-white">
                <Link to="/BoutiqueCategorie"><p className='mx-4'>Boutique</p></Link>
                <Link to="/Apropos"><p className="mx-4">About</p></Link>
                <Link to="/Contact"><p className="mx-4">Contact</p></Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center mx-4 fs-5">
          <Input />
          <Link to="/panier">
            <FaCartShopping className="mx-4 text-2xl text-white" />
          </Link>
          {/* Utilisation d'un icône pour basculer l'état du menu */}
          <div className="md:hidden">
            {isOpen ? (
              <FaXmark className="text-white text-2xl" onClick={toggleMenu} />
            ) : (
              <FaBars className="text-white text-2xl" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
      {/* Affichage du menu déroulant si isOpen est true */}
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-black text-white">
            <Link to="/BoutiqueCategorie"><p className='mx-4'>Boutique</p></Link>
            <Link to="/Apropos"><p className="mx-4">About</p></Link>
            <Link to="/Contact"><p className="mx-4">Contact</p></Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
