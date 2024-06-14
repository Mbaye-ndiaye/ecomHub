import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import imgFrom from "../../../assets/imgFrom.avif";
import { FormShopContext } from "../../../utils/context/FormShopContext";

function FormsShop({ userData }) {
  const {
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
    bannierePreview,
    logoPreview,
    isLoading,
  } = useContext(FormShopContext);
  return (
    <>
      <div className="flex justify-between  w-screen h-screen ">
        <img className=" w-[40%] object-cover h-screen" src={imgFrom} alt="/" />
        <form className=" p-5 mt-3  mb-3 rounded" onSubmit={handleSubmit}>
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
                className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
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
                  className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
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
                className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                onChange={handleImageChange}
              />
              {bannierePreview && (
                <img
                  src={bannierePreview}
                  alt="Bannière Preview"
                  className="h-[10rem] w-[15rem]"
                />
              )}
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
                className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                onChange={handleImageChange}
              />
              {logoPreview && (
                <img
                  src={logoPreview}
                  alt="Logo Preview"
                  className="h-[10rem] w-[15rem]"
                />
              )}
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col mb-4">
              <label htmlFor="telephone" className="block text-sm font-medium ">
                Telephone
              </label>
              <input
                required
                type="number"
                id="telephone"
                name="telephone"
                className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="adresse" className="block text-sm font-medium ">
                Adresse
              </label>
              <input
                required
                type="text"
                id="adresse"
                name="adresse"
                className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                value={formData.adresse}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="block text-sm font-medium ">
              Description
            </label>
            <textarea
              required
              id="description"
              name="description"
              className="w-full p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="a_propos" className="block text-sm font-medium ">
              A propos
            </label>
            <textarea
              required
              id="a_propos"
              name="a_propos"
              className="w-full p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.a_propos}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "Ajout en cours..." : "Ajouter une Boutique"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormsShop;
