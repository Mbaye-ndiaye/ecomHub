import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

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
    user_id: localStorage.getItem("userId"),
  });

<<<<<<< HEAD
=======


  // const updateShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // const updateButtonDisabled = () => {
  //   if (
  //     formData.name.trim() !== "" &&
  //     formData.email.trim() !== "" &&
  //     formData.banniere.trim() !== "" &&
  //     formData.logo.trim() !== "" &&
  //     formData.telephone.trim() !== "" &&
  //     formData.adresse.trim() !== "" &&
  //     formData.a_propos.trim() !== "" &&
  //     formData.description.trim() !== ""
  //   ) {
  //     setIsButtonDisabled(false);
  //   } else {
  //     setIsButtonDisabled(true);
  //   }
  // };
  // useEffect(() => {
  //   updateButtonDisabled();
  // }, [formData.name, formData.email]);

>>>>>>> 5bfb24f2f13353b5b3de7aa0ee7daae041ded54f
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

    const token = localStorage.getItem("tokenClient");
    console.log("tokenClient", token);
    if (!token) {
      alert("connectez vous abord avant de creer votre boutique");
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
<<<<<<< HEAD

    console.log(formData.user_id);

=======
    
    console.log(formData.user_id)

    
>>>>>>> 5bfb24f2f13353b5b3de7aa0ee7daae041ded54f
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

<<<<<<< HEAD
      console.log(response.data);

      // afficher le message de succès
      await Swal.fire({
        icon: "success",
        title: "Boutique ajoutée avec succès",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/Dash");
    } catch (error) {
      console.error(error);
      alert("Échec de l'ajout de la boutique");
    }
=======
        // Here, you get the shop_id from the response
        const shopId = response.data.id;
          console.log(shopId);

          localStorage.setItem('shopId', response.data.id);
      
          console.log(response.data);
      
          // afficher le message de succès
          await Swal.fire({
            icon: "success",
            title: "Boutique ajoutée avec succès",
            showConfirmButton: false,
          });
          navigate("/Dash");
        } catch (error) {
          console.error(error);
          alert("Échec de l'ajout de la boutique");
        }
>>>>>>> 5bfb24f2f13353b5b3de7aa0ee7daae041ded54f
  };

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <form className="w-full p-8 rounded " onSubmit={handleSubmit}>
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
          <div className="relative flex flex-col mb-4">
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

          <div className="relative flex flex-col mb-2">
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
          <div className="relative flex flex-col mb-4">
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

          <div className="relative flex flex-col mb-2">
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
            className="w-[31rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
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
            className="w-[31rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        {/* <Link to={"/Dashboard"}> */}
        <button
          type="submit"
          // disabled={isButtonDisabled || isLoading}
          className="w-full px-4 py-2 mt-8 text-white bg-gray-800 rounded-md md:w-1/2"
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
