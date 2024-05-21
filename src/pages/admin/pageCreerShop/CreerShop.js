import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import imgFrom from "../../../assets/imgFrom.avif";
import Footer from "../../../components/footer/footer";
import NaveLinks from "../../../components/navbarAdmin/NavLinks";
import EditorShop from "./EditorShop";

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email est invalide.";
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Le téléphone est requis.";
    } else if (!/^\d+$/.test(formData.telephone)) {
      newErrors.telephone =
        "Le téléphone doit contenir uniquement des chiffres.";
    }
    if (!formData.adresse.trim()) newErrors.adresse = "L'adresse est requise.";
    if (!formData.a_propos.trim())
      newErrors.a_propos = "La section 'A propos' est requise.";
    if (!formData.description.trim())
      newErrors.description = "La description est requise.";
    if (!formData.banniere) newErrors.banniere = "La bannière est requise.";
    if (!formData.logo) newErrors.logo = "Le logo est requis.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const token = localStorage.getItem("tokenClient");
    if (!token) {
      alert("Connectez-vous d'abord avant de créer votre boutique");
      navigate("/connexion");
      return;
    }

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

      const shopId = response.data.id;
      localStorage.setItem("shopId", response.data.id);

      await Swal.fire({
        icon: "success",
        title: "Boutique ajoutée avec succès",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Échec de l'ajout de la boutique");
    }
  };

  const handleDashboardClick = async () => {
    const user_Id = localStorage.getItem("userId");
    const token = localStorage.getItem("tokenClient");

    if (!user_Id || !token) {
      navigate("/connexion");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8000/api/users/${user_Id}/shop`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        navigate("/dashboard");
      } else {
        Swal.fire({
          icon: "info",
          title: "Créer une boutique",
          text: "Vous devez créer une boutique avant d'accéder au tableau de bord.",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de la boutique", error);
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Une erreur est survenue lors de la vérification de la boutique.",
      });
    }
  };

  return (
    <>
      {/* <NaveLinks className="mb-[8%]" /> */}
      <div className="flex gap-10 w-screen h-screen ">
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
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}
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
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
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
                className="w-[20rem] p-2 mt-1 hidden  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                onChange={handleImageChange}
              />
              {bannierePreview && (
                <img
                  src={bannierePreview}
                  alt="Bannière Preview"
                  className="h-[10rem] w-[15rem]"
                />
              )}
              {errors.banniere && (
                <span className="text-red-500">{errors.banniere}</span>
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
                className="w-[20rem] p-2 mt-1  bg-gray-200 border-0 rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                onChange={handleImageChange}
              />
              {logoPreview && (
                <img
                  src={logoPreview}
                  alt="Logo Preview"
                  className="h-[10rem] w-[15rem]"
                />
              )}
              {errors.logo && (
                <span className="text-red-500">{errors.logo}</span>
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
              {errors.telephone && (
                <span className="text-red-500">{errors.telephone}</span>
              )}
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
              {errors.adresse && (
                <span className="text-red-500">{errors.adresse}</span>
              )}
            </div>
          </div>

          <div className="relative flex flex-col mb-2">
            <EditorShop />
          </div>

          <button
            type="submit"
            className="flex justify-center px-4 py-2 mt-8 text-white bg-gray-800 rounded-md m-auto text-center flex items-center justify-center"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </>
  );
}
export default FormsShop;
