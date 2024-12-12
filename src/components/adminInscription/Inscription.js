import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import loginImg from "../../assets/imagesback.jfif";
import trees from "../../assets/amie.avif";
import LoadingSpinner from "../adminConnexion/LoadingSpinner";


export default function Inscription() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    prenom: "",
    email: "",
    password: "",
    adresse: "",
    telephone: "",
  });

  //   const handleSignUpClick = () => {
  //     navigate("/inscription"); // Rediriger vers la page d'inscription
  //   };

  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const updateButtonDisabled = () => {
    if (
      formData.name.trim() !== "" &&
      formData.prenom.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.adresse.trim() !== "" &&
      formData.telephone.trim() !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  useEffect(() => {
    updateButtonDisabled();
  }, [formData.email, formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(false)
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        formData
      );
      localStorage.setItem("token", response.data.token);

      console.log(response.data);

      // afficher le message succes
      await Swal.fire({
        icon: "success",
        title: "Inscription réussie!",
        showConfirmButton: false,
        timer: 2000,
      });

      navigate("/connexion");
    } catch (error) {
      console.error(error);
      alert("inscription echoue");
    } finally {
      setIsLoading(false)
    }
  };
  return (
    <div className="relative flex w-full h-screen">
      <img
        className="absolute object-cover w-full h-full mix-blend-overlay"
        src={loginImg}
        alt="/"
      />
      <div className=" z-30 grid grid-cols-2 md:grid-cols-2 m-auto  h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className=" w-[190rem] h-full" src={trees} alt="/" />
        </div>
        <div className="flex flex-col justify-center items-center w-[35rem] bg-white ">
          <h1 className="text-3xl text-center">Inscription</h1>
          <form className="w-full p-8 rounded " onSubmit={handleSubmit}>
            <div className="flex flex-row gap-5 mb-4">
              <div className="relative flex flex-col mb-4">
                <label htmlFor="prenom" className="block text-sm font-medium ">
                  Prenom
                </label>
                <input
                  required
                  type="text"
                  id="prenom"
                  name="prenom"
                  className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                  value={formData.prenom}
                  onChange={handleChange}
                />
              </div>

              <div className="relative flex flex-col mb-4">
                <label htmlFor="name" className="block text-sm font-medium ">
                  Nom
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
            </div>

            <div className="flex flex-row gap-5 mb-4">
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

              <div className="relative flex flex-col mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium "
                >
                  password
                </label>
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-row gap-5 mb-2">
              <div className="relative flex flex-col mb-4">
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium "
                >
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

              <div className="relative flex flex-col mb-2">
                <label htmlFor="adresse" className="block text-sm font-medium ">
                  Adresse
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

            <button
            type="submit"
            disabled={ isLoading}
            className={`w-full relative mt-8 px-4 py-2 text-white rounded-md bg-black flex gap-4 items-center justify-center ${
               isLoading
                ? "bg-gray-800 cursor-not-allowed text-disabled text-black"
                : "bg-gray-900 text-active text-white hover:bg-gray-900"
            }`}
          >
            {isLoading ? <LoadingSpinner /> : "Connexion"}
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}