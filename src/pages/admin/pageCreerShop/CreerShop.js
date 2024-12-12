import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import imgFrom from "../../../assets/imgFrom.avif";
import Footer from "../../../components/footer/footer";
import NaveLinks from "../../../components/navbarAdmin/NavLinks";

function FormsShop() {
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
    user_id: localStorage.getItem("userId"),
  });
  console.log("parametre id", id);

  const [errors, setErrors] = useState({});
  const [logoPreview, setLogoPreview] = useState(null);
  const [bannierePreview, setBannierePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: file,
    });
    // Mettre à jour l'aperçu de l'image
    if (name === "logo") {
      setLogoPreview(URL.createObjectURL(file));
    } else if (name === "banniere") {
      setBannierePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("tokenClient");

    console.log("tokenClient", token);

    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("logo", formData.logo);
    formDataToSend.append("banniere", formData.banniere);
    formDataToSend.append("telephone", formData.telephone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("adresse", formData.adresse);
    formDataToSend.append("a_propos", formData.a_propos);
    formDataToSend.append("user_id", formData.user_id);

    console.log(formData.user_id);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/shops",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Here, you get the shop_id from the response
      const shopId = response.data.id;
      console.log(shopId);

      localStorage.setItem("shopId", response.data.id);

      console.log(response.data);
      // afficher le message de succès
      await Swal.fire({
        icon: "success",
        title: "Boutique ajoutée avec succès",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      // Display error message if user already has a shop
      if (error.response && error.response.status === 403) {
        await Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Vous avez déjà une boutique. Vous ne pouvez pas en créer une autre.",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Échec de l'ajout de la boutique.",
        });
      }
    }
  };

  return (
    <>
      {/* <div className="bg-gray-700 py-[20px] h-auto "> */}
      {/* <NaveLinks className="mb-[8%]" /> */}
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
                className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
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
                className="w-[20rem]  p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
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
          <button
            type="submit"
            disabled={isLoading}
            className={`flex justify-center px-4 py-2 mt-8 text-white bg-gray-800 rounded-md m-auto text-center flex items-center justify-center ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Enregistrer"
            )}
          </button>
          {/* </Link> */}
        </form>
      </div>
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}
export default FormsShop;