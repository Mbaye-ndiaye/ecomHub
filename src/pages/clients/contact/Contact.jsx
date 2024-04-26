import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../../components/clients/navbar/navbar';
import Footer from './../../../components/footer/footer';

const ContactPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<section className="bg-gray-100">
			<Navbar />
			<div className="container py-16 mx-auto">
				<h1 className="text-3xl font-bold text-center">Contactez-nous</h1>

				<div className="flex justify-center mt-8 md:flex-row">
					<div className="px-4 md:w-1/2">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-4">
								<label className="block mb-2 font-bold text-gray-700">
									Nom
								</label>
								<input
									{...register('name', { required: true })}
									type="text"
									className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
								/>
								{errors.name && (
									<span className="text-red-500">Nom requis</span>
								)}
							</div>

							<div className="mb-4">
								<label className="block mb-2 font-bold text-gray-700">
									Adresse e-mail
								</label>
								<input
									{...register('email', {
										required: true,
										pattern: /^\S+@\S+\.\S+$/i,
									})}
									type="email"
									className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
								/>
								{errors.email && (
									<span className="text-red-500">Adresse e-mail invalide</span>
								)}
							</div>

							<div className="mb-4">
								<label className="block mb-2 font-bold text-gray-700">
									Sujet
								</label>
								<input
									{...register('subject', { required: true })}
									type="text"
									className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
								/>
								{errors.subject && (
									<span className="text-red-500">Sujet requis</span>
								)}
							</div>

							<div className="mb-4">
								<label className="block mb-2 font-bold text-gray-700">
									Message
								</label>
								<textarea
									{...register('message', { required: true })}
									className="w-full h-24 px-4 py-2 bg-white border border-gray-300 rounded-md form-textarea focus:outline-none focus:border-blue-500"
								/>
								{errors.message && (
									<span className="text-red-500">Message requis</span>
								)}
							</div>

							<button
								type="submit"
								className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
							>
								Envoyer
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default ContactPage;
