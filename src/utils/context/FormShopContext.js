import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const FormShopContext = createContext();

const FormProvider = ({ children }) => {
  const { idShop: idShopParam } = useParams();
  const navigate = useNavigate();
  const [boutique, setBoutique] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    adresse: "",
    a_propos: "",
    description: "",
    banniere: null,
    logo: null,
    idShop: localStorage.getItem("shopId"),
  });

  useEffect(() => {
    if (idShopParam) {
      setFormData((prev) => ({ ...prev, idShop: idShopParam }));
      afficheUneBoutique(idShopParam);
    }
  }, []);

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
      localStorage.setItem("shop_id", response.data.id);

      await Swal.fire({
        icon: "success",
        title: "Boutique ajoutée avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        Swal.fire("Échec de l'authentification. Veuillez vous reconnecter.");
        navigate("/connexion");
      } else {
        Swal.fire("Échec de l'ajout de la boutique");
      }
    }
  };

  const afficheUneBoutique = async (idShop) => {
    try {
      const token = localStorage.getItem("tokenClient");

      if (!token) {
        Swal.fire("Veuillez vous connecter pour voir la boutique");
        navigate("/connexion");
        return;
      }

      const response = await axios.get(`http://localhost:8000/api/shops/${idShop}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBoutique(response.data);
      console.log("Récupérer une seule boutique", response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération d'une boutique", error);
      if (error.response && error.response.status === 401) {
        Swal.fire("Échec de l'authentification. Veuillez vous reconnecter.");
        navigate("/connexion");
      }
    }
  };

  const handleBoutiqueClick = (id) => {
    setFormData((prev) => ({ ...prev, idShop: id }));
    afficheUneBoutique(id);
  };

  const valueContext = {
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
    afficheUneBoutique,
    boutique,
    handleBoutiqueClick,
  };

  return (
    <FormShopContext.Provider value={valueContext}>
      {children}
    </FormShopContext.Provider>
  );
};

export default FormProvider;
