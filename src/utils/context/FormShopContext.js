import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const FormShopContext = createContext();

const FormProvider = ({ children }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [boutique, setBoutique] = useState();
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [e.target.name]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("tokenClient");

    if (!token) {
      Swal.fire("Veuillez vous connecter pour créer une boutique");
      navigate("/connexion");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

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

  const afficheUneBoutique = async (id) => {
    try {
      const token = localStorage.getItem("tokenClient");

      if (!token) {
        Swal.fire("Veuillez vous connecter pour voir la boutique");
        navigate("/connexion");
        return;
      }

      const response = await axios.get(`http://localhost:8000/api/shops/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBoutique(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération d'une boutique", error);
      if (error.response && error.response.status === 401) {
        Swal.fire("Échec de l'authentification. Veuillez vous reconnecter.");
        navigate("/connexion");
      }
    }
  };

  useEffect(() => {
    if (id) {
      afficheUneBoutique(id);
    }
  }, [id]);

  const valueContext = {
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
    afficheUneBoutique,
    boutique,
  };

  return (
    <FormShopContext.Provider value={valueContext}>
      {children}
    </FormShopContext.Provider>
  );
};

export default FormProvider;
