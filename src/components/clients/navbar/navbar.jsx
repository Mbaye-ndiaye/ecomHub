import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

import Footer from '../../footer/footer';
import CardProduit from '../card/CardProduit';
import Accueil from '../../../pages/clients/accueil/Accueil';
import InputRecherche from '../../../pages/clients/accueil/InputRecherche';
import { FaCartShopping } from 'react-icons/fa6';
import Input from './Input';
import imgShop from '../../../assets/imgShop.jpg';
import HeaderBanner from '../Header/HeaderBanner';
import { Link } from 'react-router-dom';
import Header from '../../header';


const Navbar = () => {
	// let [open, setOpen] = useState(false);

	// Fonction pour ouvrir et fermer la modal
	// const toggleModal = () => {
	// 	setOpen(!open);
	// };

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
			</div>
		</div>
            </>

	);
};

export default Navbar;
