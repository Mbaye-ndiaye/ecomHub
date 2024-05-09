import axios from 'axios';
import React, { useState, useEffect, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


 export const FormShopContext = createContext();
//  export { FormShopContext };

 const FormProvider = ({ children }) => {
    const navigate = useNavigate();

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
      user_id: localStorage.getItem("userId"),
    });
  
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
      console.log('tokenClient', token)
  
      if (!token) {
        alert('connectez vous d'/'abord avant de creer votre boutique')
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
      
      console.log(formData.user_id)
      
      try {
        const response = await axios.post(
          "http://localhost:8000/api/shops",
          formDataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`, 
              "Content-Type": "multipart/form-data" 
            }
          }
        );
        // const idBoutique = response.data.id
        // console.log(idBoutique);
        // localStorage.setItem('idBoutique', response.data.id)
    
        console.log(response.data);
    
        // afficher le message de succès
        await Swal.fire({
          icon: "success",
          title: "Boutique ajoutée avec succès",
          showConfirmButton: false,
        });
        navigate("/admin");
      } catch (error) {
        console.error(error);
        alert("Échec de l'ajout de la boutique");
      }
    };

    const fetchShopById = async (id) => {
      try {
          const response = await axios.get(`http://localhost:8000/api/shops/${id}`);
          console.log("response.data", response.data);
          return response.data;
      } catch (error) {
          console.error('Erreur lors de la récupération des détails de la boutique :', error);
      }
  };

    const valueContext = {
        formData,
        handleChange,
        handleImageChange,
        handleSubmit,
        fetchShopById
    }
    
    

  return <FormShopContext.Provider value={valueContext}>
        {children}
    </FormShopContext.Provider>
  
}
 
 export default FormProvider

