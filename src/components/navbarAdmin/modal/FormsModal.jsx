import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

// Fonction pour obtenir l'ID de l'utilisateur à partir du token JWT
const getUserIdFromToken = () => {
  const token = localStorage.getItem("token"); // Récupérer le token JWT depuis le local storage
  if (token) {
    const decodedToken = parseJwt(token); // Décode le token JWT pour obtenir les informations utilisateur
    return decodedToken.userId; // Retourne l'ID de l'utilisateur extrait du token
  }
  return null; // Retourne null si aucun token n'est trouvé
};

// Fonction pour décoder un token JWT
const parseJwt = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export default function FormsModal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    adresse: "",
    a_propos: "",
    description: "",
    banniere: null,
    logo: null,
    user_id: localStorage.getItem("token"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [e.target.name]: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = getUserIdFromToken(); // Obtient l'ID de l'utilisateur à partir du token JWT
    if (!userId) {
      console.log("yes");
      return;
    }
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/shops",
        { ...formData, user_id: userId } // Ajoute l'ID de l'utilisateur dans les données à envoyer
      );

      console.log(response.data);
      // Afficher le message de succès
      await Swal.fire({
        icon: "success",
        title: "Boutique ajoutée avec succès",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/connexion");
    } catch (error) {
      console.error(error);
      alert("Echec");
      console.log(userId);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full ">
      <form className=" w-full p-8 rounded" onSubmit={handleSubmit}>
        <div className="flex flex-row gap-5 mb-2">
          <div className="flex flex-col ">
            <label htmlFor="name" className="block text-sm font-medium ">
              Nom du boutique
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
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
                className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-row gap-5 mb-2"></div>
        </div>

        <div className="flex flex-row gap-5 mb-2">
          <div className="flex relative flex-col mb-4">
            <label htmlFor="banniere" className="block text-sm font-medium ">
              Banniere du banniere
            </label>
            <input
              required
              type="file"
              id="banniere"
              name="banniere"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              onChange={handleImageChange}
            />
          </div>

          <div className="flex relative flex-col mb-2">
            <label htmlFor="logo" className="block text-sm font-medium ">
              Logo du site
            </label>
            <input
              required
              type="file"
              id="logo"
              name="logo"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="flex flex-row gap-5 mb-2">
          <div className="flex relative flex-col mb-4">
            <label htmlFor="telephone" className="block text-sm font-medium ">
              Telephone
            </label>
            <input
              required
              type="number"
              id="telephone"
              name="telephone"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>

          <div className="flex relative flex-col mb-2">
            <label htmlFor="adresse" className="block text-sm font-medium ">
              Adresse du site
            </label>
            <input
              required
              type="text"
              id="adresse"
              name="adresse"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.adresse}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex relative flex-col mb-2">
          <label htmlFor="a_propos" className="block text-sm font-medium ">
            Apropos du site
          </label>
          <textarea
            required
            row="5"
            cols="16"
            id="a_propos"
            name="a_propos"
            className="w-[31rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            value={formData.a_propos}
            onChange={handleChange}
          />
        </div>

        <div className="flex relative flex-col mb-2">
          <label htmlFor="description" className="block text-sm font-medium ">
            Description du site
          </label>
          <textarea
            required
            row="5"
            cols="16"
            id="description"
            name="description"
            className="w-[31rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        {/* <Link to={"/Dashboard"}> */}
        <button
          type="submit"
          // disabled={isButtonDisabled || isLoading}
          className="w-full mt-8 bg-gray-800 px-4 py-2 text-white rounded-md md:w-1/2"
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
