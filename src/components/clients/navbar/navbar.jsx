import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

import Footer from '../../footer/footer';
import CardProduit from '../card/CardProduit';
import Accueil from '../../../pages/clients/accueil/Accueil';
import InputRecherche from '../../../pages/clients/accueil/InputRecherche';
import { FaCartShopping } from "react-icons/fa6";
import Input from './Input';
import imgShop from '../../../assets/imgShop.jpg';
import HeaderBanner from '../Header/HeaderBanner';
import { Link } from 'react-router-dom';




const Navbar = () => {
	
	// let [open, setOpen] = useState(false);

	// Fonction pour ouvrir et fermer la modal
	// const toggleModal = () => {
	// 	setOpen(!open);
	// };

	return (
        <>
		<div className='flex justify-between bg-current p-2 w-full fixed'>
        <nav className="">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                <p className="text-white text-xl font-semibold mx-4">MARHABA</p>
                <div className='flex mx-auto text-white mx-4'>
                    <Link to="/BoutiqueCategorie">
                    <p className='mx-4'>Boutique</p>
                    </Link>
                    <p className='mx-4'>About</p>
                    <p className='mx-4'>Contact</p>
                </div>
                </div>
            </div>
        </nav>
        <div className=' flex items-center fs-5 mx-4'>
        <Input />
        <FaCartShopping className='text-white text-2xl mx-4'/>
        
      </div>
            </div>
        <HeaderBanner />
            
            
          </>
	);
};

export default Navbar;
