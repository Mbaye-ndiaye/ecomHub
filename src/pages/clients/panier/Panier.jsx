import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../../../components/clients/navbar/Navbar';
import Footer from '../../../components/footer/footer';
import { FaTrash } from 'react-icons/fa';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";



export default function ShoppingCart() {
	return (
		<section>
			<Navbar />
			<main className="flex justify-center bg-gray-200">
				<div className="container py-5 mx-auto my-20">
					<div className="flex flex-col justify-center w-full gap-8 lg:flex-row">
						<div className="w-full bg-white rounded-lg shadow-md lg:w-1/2">
							<div className="flex justify-between p-5">
								<h5 className="text-xl font-bold">votre Panier</h5>
								<h5 className="">2 Produits</h5>
							</div>
							<hr />
							<div className="flex justify-between p-3">
								<div className="flex gap-8">
									<div className="pl-2 mb-4 md:mb-0">
										<img
											src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
											className="w-20 h-20"
											alt="Product 1"
										/>
									</div>
									<div className="md:mb-0">
										<p className="mb-1 font-semibold">Blue denim shirt</p>
										<p>Color: blue</p>
										<div className="">
											<button className="flex gap-1 mr-2 text-red-500 hover:text-red-700">
												supprimer{' '}
												<span className="mt-1">
													<FaTrash />
												</span>
											</button>
										</div>
									</div>
								</div>
								<div className="flex flex-col">
								<div className="flex">
								<button className="px-3 mr-2 text-white bg-blue-600 border rounded-md h-9">
								<FaMinus />
							    </button>
							<input
								className="w-16 px-2 py-1 border border-gray-300 rounded-md"
								type="number"
								defaultValue={1}
								min={0}
							/>
							    <button className="px-3 ml-2 text-white bg-blue-600 border rounded-md h-9">
							<FaPlus />

							    </button>
								</div>
									<p className="mt-2 text-lg font-semibold text-center">
										$17.99
									</p>
								</div>
							</div>
							<div className="flex justify-between p-3">
								<div className="flex gap-8">
									<div className="pl-2 mb-4 md:mb-0">
										<img
											src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
											className="w-20 h-20"
											alt="Product 1"
										/>
									</div>
									<div className="md:mb-0">
										<p className="mb-1 font-semibold">Blue denim shirt</p>
										<p>Color: blue</p>
										<div className="">
											<button className="flex gap-1 mr-2 text-red-500 hover:text-red-700">
												supprimer{' '}
												<span className="mt-1">
													<FaTrash />
												</span>
											</button>
										</div>
									</div>
								</div>
								<div className="flex flex-col">
								<div className="flex">
								<button className="px-3 mr-2 text-white bg-blue-600 border rounded-md h-9">
								<FaMinus />
							    </button>
							<input
								className="w-16 px-2 py-1 border border-gray-300 rounded-md"
								type="number"
								defaultValue={1}
								min={0}
							/>
							    <button className="px-3 ml-2 text-white bg-blue-600 border rounded-md h-9">
							<FaPlus />

							    </button>
								</div>
									<p className="mt-2 text-lg font-semibold text-center">
										$17.99
									</p>
								</div>
							</div>
							<hr />
							<Link
								to="/Accueil"
							>
							<p className="flex gap-1 px-5 py-6 font-semibold text-black">
							<FaArrowLeftLong className='mt-1'/>
							<span>Retour à la boutique</span>
							</p>
							</Link>
							{/* Repeat for second product */}
						</div>
						<div className="w-full lg:w-1/4">
							<div className="bg-white rounded-lg shadow-md ">
								<div className="p-6">
									<h5 className="text-lg font-bold">Commande</h5>
									<hr className="w-full mt-4 bg-black" />
									<ul className="py-3 list-disc">
										<li className="flex items-center justify-between my-4">
											<span>Products</span>
											<span>$53.98</span>
										</li>
										<li className="flex items-center justify-between mb-4">
											<span>Shipping</span>
											<span>$2</span>
										</li>
										<li className="flex items-center justify-between">
											<strong>Total amount</strong>
											<span className="text-lg font-bold text-red-500">$53.98</span>
										</li>
									</ul>
									<hr />
									<Link to="/checkout">
										<button className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md">
											Go to checkout
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</section>
	);
}
