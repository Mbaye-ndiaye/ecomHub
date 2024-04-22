import React, { useState } from 'react';
import Modal from './modal/Modal';
import image2 from '../../assets/hero_image.png';
import image3 from '../../assets/Image.png';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

import FormsModal from './modal/FormsModal';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

const Header = () => {
	let Links = [
		{ name: 'APROPO', link: '/' },
		{ name: 'CONTACT', link: '/' },
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
					src={image3}
					alt="/"
				/>

				<nav className="relative z-30 flex">
					{/* <img src={image1} alt="/" /> */}
					<div className="fixed top-0 left-0 w-full ">
						<div className="items-center justify-between py-4 text-white md:flex md:px-10 px-7">
							{/* logo section */}
							<Link to={'/Home'}>
								<div className="flex items-center gap-1 text-2xl font-bold cursor-pointer">
									<h1 className="text-blue-600 w-7 h-7">ECOMHUB</h1>
								</div>
							</Link>
							{/* Menu icon */}
							<div
								onClick={() => setOpen(!open)}
								className="absolute relative z-30 cursor-pointer right-8 top-6 md:hidden w-7 h-7"
							>
								{open ? <FaXmark /> : <FaBars />}
							</div>
							{/* linke items */}
							<ul
								className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
									open ? 'top-12' : 'top-[-490px]'
								}`}
							>
								{Links.map((link) => (
									<li className="font-semibold md:ml-8 md:my-0 my-7">
										<a
											href={link.link}
											className="text-white duration-500 hover:text-blue-400"
										>
											{link.name}
										</a>
									</li>
								))}
								<button
									onClick={toggleModal}
									className="px-3 py-1 font-semibold text-white duration-500 bg-blue-600 rounded btn md:ml-8 md:static"
								>
									Creer mon boutique
								</button>
							</ul>
							{/* button */}
						</div>
					</div>
					{/* <img src={image2} alt="/" /> */}
				</nav>
				<div className="text-white relative mt-[10rem] p-5">
					<h1 className="text-3xl text-white">Bienvenu Chez ECOMHUB</h1>
					<p className="mt-1 text-lg text-white">
						Ici on vous donne la possibilité de creer votre site ecommerce
						facilment
					</p>
				</div>

				<img
					src={image2}
					className="w-full h-[35rem] xl:w-1/2 xl:absolute bottom-0 right-20 z-0"
					alt="/"
				/>
			</div>
			{open && (
				<Modal onClose={toggleModal}>
					<FormsModal />
				</Modal>
			)}
			<Footer />
		</>
	);
};

export default Header;
