import React, { useState } from 'react';
import image2 from '../../../assets/hero_image.png';
import imgShop from '../../../assets/imgShop.jpg';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { FaCartShopping } from "react-icons/fa6";

// import FormsModal from './modal/FormsModal';
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';

const Navbar = () => {
	let Links = [
		{ name: 'APROPO', link: '/' },
		{ name: 'CONTACT', link: '/' },
		{ name: 'Boutique', link: '/' },
		{ name: 'Categorie', link: '/' },
	];
	let [open, setOpen] = useState(false);

	// Fonction pour ouvrir et fermer la modal
	const toggleModal = () => {
		setOpen(!open);
	};

	return (
		<>
			<div className="relative w-full min-h-screen ">
				<img
					className="absolute object-cover w-full h-full mix-blend-overlay"
					src={imgShop}
					alt="/"
				/>

				<nav className="relative z-30 flex">
					<div className="fixed top-0 left-0 w-full ">
						<div className="items-center justify-between py-4 text-white md:flex md:px-10 px-7">

								<div className="flex items-center gap-1 text-2xl font-bold cursor-pointer">
									<h1 className="text-black">Nom de la boutique</h1>
                                   
								</div>
							<div
								onClick={() => setOpen(!open)}
								className="absolute relative z-30 cursor-pointer right-8 top-6 md:hidden w-7 h-7"
							>
								{open ? <FaXmark /> : <FaBars />}
							</div>
							<ul
								className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
									open ? 'top-12' : 'top-[-490px]'
								}`}
							>
								{Links.map((link) => (
									<li className="font-semibold md:ml-8 md:my-0 my-7">
										<a
											href={link.link}
											className="text-black duration-500 hover:text-blue-400"
										>
											{link.name}
										</a>
									</li>
								))}
								<button
									onClick={toggleModal}
									className="px-3 py-1 font-semibold text-black duration-500  rounded btn md:ml-8 md:static"
								>
									<FaCartShopping />
								</button>
							</ul>
						</div>
					</div>
				</nav>
				<div className="text-white relative mt-[10rem] p-5">
					<h1 className="text-3xl text-black">Bienvenu Chez ECOMHUB</h1>
					<p className="mt-1 text-lg text-black fs-6">
                    Des offres pluvieuses pour un été chaud !
                    25% de réduction sur tous les produits
					</p>
                    <button type='submit' className=''>Acheter maintenant</button>
				</div>

				{/* <img
					src={image2}
					className="w-full h-[35rem] xl:w-1/2 xl:absolute bottom-0 right-20 z-0"
					alt="/"
				/> */}
			</div>
			{/* {open && (
				<Modal onClose={toggleModal}>
					<FormsModal />
				</Modal>
			)} */}
			<Footer />
		</>
	);
};

export default Navbar;
