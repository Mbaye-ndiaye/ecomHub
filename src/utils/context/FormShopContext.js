import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const FormShopContext = createContext();
//  export { FormShopContext };

const FormProvider = ({ children }) => {
  

  const { name } = useParams();
  const navigate = useNavigate();
  const [boutique, setBoutique] = useState([]);
  // console.log("id", id);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [messageShop, setMessageShop] = useState([])
  const [messageNames, setMessageNames] = useState([]);
  const [message, setMessage] = useState([]);
  
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

    console.log("formData.user_id",formData.user_id);

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
      console.log("shopId",shopId);

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

  //   const fetchShopById = async (id) => {
  //     try {
  //         const response = await axios.get(`http://localhost:8000/api/shops/${id}`);
  //         setBoutique(response.data)

  //         console.log("DATA", response.data);
  //         //  return response.data;
  //     } catch (error) {
  //         console.error('Erreur lors de la récupération des détails de la boutique :', error);
  //     }
  // };

  // useEffect(() => {
  //   fetchShopById()
  // }, [id])

  const afficheUneBoutique = async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/shops/name/${name}`
      );

      setBoutique(response.data);
      console.log("Accueil", response.data);
    } catch (error) {
      console.error("Erreur lors de la recuperation d'une boutique");
    }
  };
  useEffect(() => {
    if (name) {
      afficheUneBoutique(name);
    }
  }, [name]);

  
  


  const valueContext = {
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
    afficheUneBoutique,
    boutique,
    bannierePreview,
    logoPreview
  };

  return (
    <FormShopContext.Provider value={valueContext}>
      {children}
    </FormShopContext.Provider>
  );
};

export default FormProvider;