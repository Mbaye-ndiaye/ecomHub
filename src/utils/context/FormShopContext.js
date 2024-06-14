import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

export const FormShopContext = createContext();
//  export { FormShopContext };

const FormProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || {};
  const [shop, setShop] = useState(null);
  const userId = user?.user?.id || null;
  console.log("user_id", userId);
  const { name } = useParams();
  const [boutique, setBoutique] = useState();

  // console.log("id", id);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [messageShop, setMessageShop] = useState([]);
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
    user_id: userId,
    shop_id: localStorage.getItem("shopId"),
  });

  const [logoPreview, setLogoPreview] = useState(null);
  const [bannierePreview, setBannierePreview] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        user_id: user.user.id,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: file,
    });
    if (name === "logo") {
      setLogoPreview(URL.createObjectURL(file));
    } else if (name === "banniere") {
      setBannierePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    console.log("user_id", formData.user_id);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/shops",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenClient")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const userData = response.data;

      // updateShop(response.data.shop);
      // setFormData((prevFormData) => ({
      //   ...prevFormData,
      //   shop_id: response.data.shop.id,
      // }));
      console.log("userData", userData);

      await Swal.fire({
        icon: "success",
        title: "Boutique ajoutée avec succès",
        showConfirmButton: false,
        timer: 9000,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
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

  useEffect(() => {
    const fetchUserShops = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user/shops",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tokenClient")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setShop(response.data);
        console.log("setShop", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserShops();
  }, []);

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
    shop,
    bannierePreview,
    logoPreview,
    isLoading,
  };

  return (
    <FormShopContext.Provider value={valueContext}>
      {children}
    </FormShopContext.Provider>
  );
};

export default FormProvider;
