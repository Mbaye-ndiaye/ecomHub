import React from "react";
import { FaCamera } from "react-icons/fa";
// import profile from "../../assets/images/profile.png";

const Form = () => {
  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="mb-5  gap-5 flex flex-row align-center p-28 rounded shadow">
        <div className="w-80 h-[300px] bg-white rounded">
          <h1 className="text-center mt-5 text-[#120808] text-2xl">John Doe</h1>
            <h2 className="text-center mt-5 text-[#120808]">@john_doe</h2>
          <figure className="flex flex-row justify-center rounded mt-5">
        <label
          htmlFor="fileInput"
          className="block text-sm font-medium text-gray-600 cursor-pointer"
        >
          <div className="md:relative">
            <div
              onChange={handleImageClick}
              className="md:absolute md:inset-0  flex items-center md:items-end justify-center md:justify-end  rounded-full cursor-pointer"
            >
              <FaCamera className="text-[white] w-6 h-6 mr-1 bg-black p-1 rounded-lg " />
            </div>
            <input
              type="file"
              id="fileInput"
              name="imgProfile"
              accept="image/*"
              className="hidden"
              //   onChange={handleChange}
            />
          </div>
        </label>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-full w-28 h-28"
              />
          </figure>
          <div className="card-body items-center text-center mt-10">
            <p className="text-[black]">Member since : 03 mai 2024</p>
            
          </div>
        </div>

        <form className="bg-white basis-1/2 rounded w-52">
      
      

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
              //   value={user.prenom}
              //   onChange={handleChange}
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
              //   value={user.nom}
              //   onChange={handleChange}
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
              //   value={user.telephone}
              //   onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
          <div className="mb-4 mt- w-full md:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-3"
            >
              Email Confirm
            </label>
            <input
              type="email"
              id="email"
              name="email"
              //   value={user.email}
              //   onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex w-full mt- align-center justify-center flex-col  md:flex-row gap-5">
          <div className="mb-5 mt- w-full md:w-1/2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-3"
            >
              Mot de pass
            </label>
            <input
              type="password"
              id="password"
              name="password"
              //   value={user.telephone}
              //   onChange={handleChange}
              className="mt-1 p-2 border focus:border text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
            />
          </div>
          <div className="mb-4 mt- w-full md:w-1/2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-3"
            >
              Confirmé Mot de pass
            </label>
            <input
              type="password"
              id="password"
              name="password"
              //   value={user.email}
              //   onChange={handleChange}
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
    </form>
      </div>
  );
};

export default Form;
