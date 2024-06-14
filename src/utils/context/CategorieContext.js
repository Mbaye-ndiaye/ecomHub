import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import useGlobal from "../hooks/useGlobal";
import useProduit from "../hooks/useProduit";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { FormShopContext } from "./FormShopContext";

export const CategorieContext = createContext();

export default function CategorieContextProvider({ children }) {
  const [test, setTest] = useState("");
  const location = useLocation();

  const shop = useContext(FormShopContext);
  console.log("shop", shop);
  const shopId = shop?.id || null;
  console.log("shopId", shopId);

  // const [nom, setNom] = useState("");
  const [quantite, setQuantite] = useState("0");
  const [categories, setCategories] = useState([]);
  const [categoriesProd, setCategoriesProd] = useState([]);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [userShops, setUserShops] = useState("");
  const [quantiteParCategorie, setQuantiteParCategorie] = useState({});
  const navigate = useNavigate();
  const { setShowModal } = useGlobal();
  const { produits, filtreProduits } = useProduit();
  const [formData, setFormData] = useState({
    categories: [],
    shop_id: shop?.id || null,
  });

  useEffect(() => {
    console.log("useEffect", shop);
    if (shop) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        shop_id: shop.id,
      }));
    }
  }, [shop]);

  const table = ["Categorie", "Nombre produit", "Actions"];

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
            // setNom(categorie.name);
          }
        });
        setIsEditing(true);
        // setShowModal(true);
        setEditingCategoryId(category);
      },
    },
  ];

  const fetchCategories = async () => {
    if (!formData.shop_id) return;
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/shops/${formData.shop_id}/categories`,
        {
          params: { shop_id: formData.shop_id },
        }
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ajoutez une validation pour vous assurer que formData.categories reste un tableau
    if (name === "categories") {
      let categoriesArray = value.split(",").map((item) => item.trim());
      setFormData({ ...formData, categories: categoriesArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("tokenClient");
    console.log("tokenClient", token);

    const formDataToSend = new FormData();
    formDataToSend.append("shop_id", formData.shop_id);

    // Vérifiez que categories est un tableau
    if (Array.isArray(formData.categories)) {
      formData.categories.forEach((category, index) => {
        formDataToSend.append(`categories[${index}]`, category);
      });
    } else {
      console.error(
        "formData.categories n'est pas un tableau:",
        formData.categories
      );
      return;
    }

    console.log("formData.shop_id", formData.shop_id);
    console.log("formData.categories", formData.categories);

    try {
      let response;
      if (isEditing) {
        handleEditCategory(editingCategoryId, formData);
      } else {
        response = await axios.post(
          `http://127.0.0.1:8000/api/shops/${formData.shop_id}/categories`,
          formDataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Log the complete response
        console.log("Réponse du serveur complète :", response);
        console.log("Données de la réponse :", response.data);

        // Vérifiez la structure de la réponse
        if (response.data && response.data.categories) {
          const createdCategories = response.data.categories;
          if (createdCategories.length > 0) {
            const createdCategoryId = createdCategories[0].id; // Assurez-vous de gérer plusieurs catégories si nécessaire
            localStorage.setItem("categorie", createdCategoryId);
            console.log("Catégorie créée ID :", createdCategoryId);
          }

          await Swal.fire({
            icon: "success",
            title: "Categorie ajoutée avec succès",
            showConfirmButton: false,
            timer: 2000,
          });

          // fetchCategories();
        } else {
          console.error(
            "La réponse ne contient pas les catégories créées:",
            response.data
          );
        }
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de la catégorie:", error);
      if (error.response) {
        console.log("Erreur détaillée:", error.response.data);
      }
    }

  };
  // setCategories(" ");

  const handleDetail = (categoryId) => {
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
    userShops,
    table,
    actions,
    formData,
    categories,
    quantite,
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
