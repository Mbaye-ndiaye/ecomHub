import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import useFormContext from "../../../utils/hooks/useFormContext";
import { FormShopContext } from "../../../utils/context/FormShopContext";

function FormsShop() {
  const { handleSubmit, formData, handleChange, handleImageChange } =
    useContext(FormShopContext);

    

  

	return (
		<div className="flex justify-center items-center  w-full h-auto p-[20px]">
			<form className="bg-white p-8 rounded mt-5 mb-5" onSubmit={handleSubmit}>
				<h1 className="text-gray-700 mb-5 text-2xl text-center">
					Creer votre Boutique
				</h1>
				<div className="flex flex-row gap-5  mb-2">
					<div className="flex flex-col ">
						<label htmlFor="name" className="block text-sm font-medium ">
							Nom du boutique
						</label>
						<input
							required
							type="text"
							id="name"
							name="name"
							className="w-[24rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							value={formData.name}
							onChange={handleChange}
						/>
					</div>

					<div className="flex flex-col mb-2">
						<div className="flex flex-col mb-2">
							<label htmlFor="email" className="block text-sm font-medium ">
								Email
							</label>
							<input
								required
								type="email"
								id="email"
								name="email"
								className="w-[24rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="flex flex-row gap-5 mb-2"></div>
				</div>

				<div className="flex flex-row gap-5 mb-2">
					<div className="relative flex flex-col mb-4">
						<label htmlFor="banniere" className="block text-sm font-medium ">
							Banniere du banniere
						</label>
						<input
							required
							type="file"
							id="banniere"
							name="banniere"
							className="w-[24rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							onChange={handleImageChange}
						/>
					</div>

					<div className="relative flex flex-col mb-2">
						<label htmlFor="logo" className="block text-sm font-medium ">
							Logo du site
						</label>
						<input
							required
							type="file"
							id="logo"
							name="logo"
							className="w-[24rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							onChange={handleImageChange}
						/>
					</div>
				</div>
				<div className="flex flex-row gap-5 mb-2">
					<div className="relative flex flex-col mb-4">
						<label htmlFor="telephone" className="block text-sm font-medium ">
							Telephone
						</label>
						<input
							required
							type="number"
							id="telephone"
							name="telephone"
							className="w-[24rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							value={formData.telephone}
							onChange={handleChange}
						/>
					</div>

					<div className="relative flex flex-col mb-2">
						<label htmlFor="adresse" className="block text-sm font-medium ">
							Adresse du site
						</label>
						<input
							required
							type="text"
							id="adresse"
							name="adresse"
							className="w-[24rem]  p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							value={formData.adresse}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="relative flex flex-col mb-2">
					<label htmlFor="a_propos" className="block text-sm font-medium ">
						Apropos du site
					</label>
					<textarea
						required
						row="5"
						cols="16"
						id="a_propos"
						name="a_propos"
						className="w-full  p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
						value={formData.a_propos}
						onChange={handleChange}
					/>
				</div>

				<div className="relative flex flex-col mb-2">
					<label htmlFor="description" className="block text-sm font-medium ">
						Description du site
					</label>
					<textarea
						required
						row="5"
						cols="16"
						id="description"
						name="description"
						className="w-full p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
						value={formData.description}
						onChange={handleChange}
					/>
				</div>
				{/* <Link to={"/Dashboard"}> */}
				<button
					type="submit"
					// disabled={isButtonDisabled || isLoading}
					className="flex justify-center px-4 py-2 mt-8 text-white bg-gray-800 rounded-md md:w-1/2"
					//  ${
					// isButtonDisabled || isLoading
					// ? "bg-gray-800 opacity-85 cursor-not-allowed text-disabled text-black relative"
					// : "bg-gray-900 text-active text-white hover:bg-gray-900"
					// } ${isLoading ? "relative" : ""}`}
				>
					Enregistrer
				</button>
				{/* </Link> */}
			</form>
		</div>
	);
}

export default FormsShop;
