import React from "react";
import { FaCamera } from "react-icons/fa";
 import profile from "../../../assets/img1.jpeg";

const Form = ({ editedUser, handleSubmit, handleChange, user }) => {
  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-5  gap-5 flex flex-row align-center p-28 rounded shadow bg-slate-600">
        <div className="w-80 h-[300px] bg-white rounded">
          <div className="flex flex-row justify-center rounded mt-5">
        <label
          htmlFor="fileInput"
          className="block text-sm font-medium text-gray-600 cursor-pointer"
        >
          <div className="md:relative">
          <img
              src={profile}
               
              alt="Shoes"
              className="w-20 h-20 rounded-full object-cover"
              />
          <div
              onChange={handleImageClick}
              className="md:absolute md:inset-0  flex items-center md:items-end justify-center md:justify-end  rounded-full cursor-pointer"
            >
              <FaCamera className="text-[white] w-6 h-6 mr-3 bg-black p-1 rounded-lg " />
            </div>
            <input
              type="file"
              id="fileInput"
              name="imgProfile"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </div>
        </label>
           
          </div>
          <h1 className="text-center mt-9 text-[#120808] text-2xl">John Doe</h1>
          
        </div>

        <div className="bg-white basis-1/2 rounded w-52">
      
      

      <div className="mt-5 p-4">
        <div className="flex w-full mt-5 align-center justify-center flex-col  md:flex-row gap-5">
          <div className="mb-5 mt-5 w-full md:w-1/2">
            <label
              htmlFor="prenom"
              className="block text-sm font-medium text-gray-600 mb-3"
            >
              Prenom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              // value={user.prenom}
              onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
          <div className="mb-5 mt-5 w-full md:w-1/2">
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-600 mb-3"
            >
              nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              // value={user.nom}
              onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex w-full mt- align-center justify-center flex-col  md:flex-row gap-5">
          <div className="mb-5 mt- w-full md:w-1/2">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-600 mb-3"
            >
              Email 
            </label>
            <input
              type="Email"
              id="Email"
              name="Email"
              // value={user.telephone}
              onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
          <div className="mb-4 mt- w-full md:w-1/2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-3"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              // value={user.password}
              onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex w-full mt- align-center justify-center flex-col  md:flex-row gap-5">
          <div className="mb-5 mt- w-full md:w-1/2">
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-600 mb-3"
            >
              Telephone
            </label>
            <input
              type="telephone"
              id="telephone"
              name="telephone"
              // value={user.telephone}
              onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
          <div className="mb-4 mt- w-full md:w-1/2">
            <label
              htmlFor="adresse"
              className="block text-sm font-medium text-gray-600 mb-3"
            >
              Adresse
            </label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              // value={user.adresse}
              onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5 mb-10">
        <button
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
        >
          Enregistrer
        </button>
        </div>
      </div>
      </div>

    </form>

  );
};

export default Form;
