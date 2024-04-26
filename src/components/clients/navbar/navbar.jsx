import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';
import CardProduit from '../card/CardProduit';
import Accueil from '../../../pages/clients/accueil/Accueil';
import InputRecherche from '../../../pages/clients/accueil/InputRecherche';
import { FaCartShopping } from 'react-icons/fa6';
import Input from './Input';

const Navbar = () => {
	// let [open, setOpen] = useState(false);

	// Fonction pour ouvrir et fermer la modal
	// const toggleModal = () => {
	// 	setOpen(!open);
	// };

	return (
		<div className="flex justify-between p-2 bg-current">
			<nav className="">
				<div className="flex items-center justify-between mx-auto max-w-7xl">
					<div className="flex items-center">
						<p className="mx-4 text-xl font-semibold text-white">Logo</p>
						<div className="flex mx-4 mx-auto text-white">
							<p className="mx-4">Boutique</p>
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
			{/* <div className="relative">
      <input
        type="text"
        placeholder="Recherce"
        // onChange={onChange}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
      />
      <svg className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 right-3 top-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a8 8 0 11-16 0 8 8 0 0116 0zm-1.82 4.83a6 6 0 111.415-1.415L20.586 17 22 18.414l-2.122 2.122-1.415-1.415z" />
      </svg>
      <div>
      <FaCartShopping className='text-lg text-white '/>
      </div>

    </div> */}
			{/* <div className='flex items-center justify-between mt-3 bg-black'>
            <Accueil />
            <div className='flex items-center mx-4 fs-5'>

            <InputRecherche />
            <FaCartShopping className='mx-4 text-lg text-white'/>
            </div>
            </div>
            <div>
            </div>
            <CardProduit />
		    <Footer /> */}

			{/* <div className="relative w-full min-h-screen ">
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
								<Link to="/panier">
								<button
									className="px-3 py-1 font-semibold text-black duration-500 rounded btn md:ml-8 md:static"
								>
									<FaCartShopping />
								</button>
								</Link>
								
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

				
			</div> */}
		</div>

	);
};

export default Navbar;
