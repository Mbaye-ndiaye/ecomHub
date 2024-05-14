import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import useGlobal from "../hooks/useGlobal";
import useProduit from "../hooks/useProduit";
import axios from "axios";

const CategorieContext = createContext();

export { CategorieContext };

export default function CategorieContextProvider({ children }) {
  const [test, setTest] = useState("Awa");
  const [nom, setNom] = useState("");
  const [quantite, setQuantite] = useState("0");
  const [categories, setCategories] = useState([]);
  const [categoriesProd, setCategoriesProd] = useState([]);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [quantiteParCategorie, setQuantiteParCategorie] = useState({});
  const navigate = useNavigate();
  const { setShowModal } = useGlobal();
  const { produits, filtreProduits } = useProduit();
  const [formData, setFormData] = useState({
    name: "",
    shop_id: localStorage.getItem("shopId"),
  });

  const table = ["Categorie", "Nombre produit", "Actions"];

  // const inputs = [
  //   {
  //     label: "Nom catégorie",
  //     type: "text",
  //     value: nom,
  //     name: "catégorie",
  //     setValue: setNom,
  //   },
  // ];

  const actions = [
    {
      icon: <TbEyeShare />,
      color: "bg-green-500",
      handleClick: (categoryId) => {
        localStorage.setItem("categorieIdCli", categoryId);
        navigate(categoryId);
        handleDetail(categoryId);
      },
    },
    {
      icon: <MdEdit />,
      color: "bg-orange-500",
      handleClick: (category) => {
        categories.map((categorie) => {
          if (categorie._id === category) {
            setNom(categorie.nom);
          }
        });
        setIsEditing(true);
        setShowModal(true);
        setEditingCategoryId(category);
      },
    },
    // {
    //   icon: <MdOutlineDelete />,
    //   color: "bg-red-600",
    //   handleClick: (categoryId) => {
    //     handleDelete(categoryId);
    //   },
    // }
  ];

  //   const [shopId, setShopId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("tokenClient");
    console.log("tokenClient", token);

    if (!token) {
      alert("connectez vous d" / "abord avant de creer votre boutique");
      navigate("/connexion");
      return;
    }

    const fromDataToSend = new FormData();

    fromDataToSend.append("name", formData.name);
    fromDataToSend.append("shop_id", formData.shop_id);

    console.log(formData.shop_id);
    console.log(formData.name);

    if (isEditing) {
      handleEditCategory(editingCategoryId, formData);
    } else {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/categories",
          fromDataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setShowModal(false);
        alert("yes");
        // setNom("");
        console.log("respose :", response);
        fetchCategories();
      } catch (error) {
        console.error("Erreur lors de l'ajout de la catégorie:", error);
      }
    }
  };

  const handleDetail = (categoryId) => {
    // Récupérer l'ID de la catégorie depuis le stockage local
    const categorieIdCli = localStorage.getItem("categorieIdCli");
  };

  const handleEdit = async (categoryId, newData) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/categories/${categoryId}`,
        newData
      );

      fetchCategories();
    } catch (error) {
      console.error("Erreur lors de la modification de la catégorie:", error);
    }
  };

  const handleEditCategory = (categoryId, newData) => {
    setEditData(newData);
    handleEdit(categoryId, newData);
    setShowModal(false);
  };

  // const handleDelete = async (categoryId) => {
  //   try {
  //     await axiosInstance.delete(`/categorie/${categoryId}`);
  //     const updatedCategories = categories.filter(
  //       (category) => category._id !== categoryId
  //     );
  //     setCategories(updatedCategories);
  //     console.log("Catégorie supprimée avec succès");

  //     // Actualisez la liste des catégories après la suppression
  //     fetchCategories();
  //   } catch (error) {
  //     console.error("Erreur lors de la suppression de la catégorie:", error);
  //   }
  // };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/categories",
        formData
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
    }
  };

  const updateCategoryQuantities = async () => {
    try {
      const updatedCategories = await Promise.all(
        categories.map(async (category) => {
          try {
            const response = await axios.get(
              `http://127.0.0.1:8000/api/produits/categorie/${category._id}`
            );
            const produitsCategorie = response.data;
            const quantite = produitsCategorie.length;

            // Mettre à jour la quantité dans la base de données
            await axios.put(
              `http://127.0.0.1:8000/api/categories/${category._id}`,
              { quantite }
            );

            return { ...category, quantite };
          } catch (error) {
            console.error(
              "Erreur lors de la mise à jour de la quantité pour la catégorie",
              category._id,
              ":",
              error
            );
            return category;
          }
        })
      );

      setCategories(updatedCategories);
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour des quantités de produits :",
        error
      );
    }
  };

  const valueContext = {
    test,
    produits,
    filtreProduits,
    fetchCategories,
    updateCategoryQuantities,
    handleEditCategory,
    handleEdit,
    handleSubmit,
    editData,
    setEditData,
    categoriesProd,
    setCategoriesProd,
    handleDetail,
    editingCategoryId,
    setEditingCategoryId,
    isEditing,
    setIsEditing,
    table,
    actions,
    // inputs,
    formData,
    categories,
    nom,
    quantite,
    setNom,
    setQuantite,
    setCategories,
    handleChange,
  };

  return (
    <CategorieContext.Provider value={valueContext}>
      {children}
    </CategorieContext.Provider>
  );
}
