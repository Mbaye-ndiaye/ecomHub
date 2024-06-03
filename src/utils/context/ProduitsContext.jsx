import React, { createContext, useState } from "react";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import useGlobal from "../hooks/useGlobal";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axiosInstance from "../axiosInstance";

export const ProduitsContext = createContext();

const ProduitContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  //   // Création des contexts pour formulaire

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [quantite, setQuantite] = useState("");
  const [categorie, setCategorie] = useState("");
  const [categorieId, setCategorieId] = useState("");
  const [prix, setPrix] = useState("");

  const [titreModal, setTitreModal] = useState("Ajouter un produits");
  //   const [corpModal, setCorpModal] = useState('')
  const [soumettre, setSoumettre] = useState("Ajouter");
  const [idAModifie, setIdAModifie] = useState("");
  const [filtreProducts, setFiltreProducts] = useState([]);
  const [categorieSelect, setCategorieSelect] = useState([]);
  const [valueInput, setValueInput] = useState("");

  // Filtre produit par letter saisi
  //   const filteredByLetter = produits.filter((produit) =>
  //     produit.nom.toLowerCase().includes(valueInput.toLowerCase())
  //   );

  const table = ["Image", "Descript", "Nom", "Quantité", "Prix"];

  const actions = [
    {
      // Voire Détails
      icon: <TbEyeShare />,
      color: "bg-green-500",
      handleClick: (id) => {
        navigate(id);
      },
    },
    {
      // Modification
      icon: <MdEdit />,
      color: "bg-orange-500",
      handleClick: (id) => {
        setSoumettre("Modifier");
        setIdAModifie(id);
        hanldleUpdate(id);
      },
    },
    {
      // Suppression
      icon: <MdOutlineDelete />,
      color: "bg-red-600",
      handleClick: (id) => {
        //   deleteProduit(id)
      },
    },
  ];

  const [categories, setCategories] = useState([]);

  const inputs = [
    {
      label: "Nom du Produit",
      type: "text",
      value: name,
      setValue: setName,
    },
    {
      label: "Image du produit",
      type: "file",
      name: "imageUrl",
      value: image,
      setValue: setImage,
    },
    {
      label: "Quantité",
      type: "number",
      value: quantite,
      setValue: setQuantite,
    },
    {
      label: "Prix",
      type: "number",
      value: prix,
      setValue: setPrix,
    },
  ];

  const textarea = {
    value: description,
    setValue: setDescription,
  };

  const handleSelectChange = (e) => {
    const selectedCategoryName = e.target.value;
    const selectedCategory = categories.find(
      (cat) => cat.name === selectedCategoryName
    );
    if (selectedCategory) {
      setCategorie(selectedCategoryName);
      setCategorieId(selectedCategory.id);
    }
  };

  const [selectsValue] = useState("");

  const selects = [
    {
      label: "Catégorie",
      value: selectsValue,
      options: categoryNames,
      setValue: handleSelectChange,
    },
  ];

  const { setShowModal } = useGlobal();

  // Suppression Produit
  //   const deleteProduit = async (id) => {
  //     try {
  //       await axiosInstance.delete(`/produits/${id}`);

  //       const updatedProd = produits.filter(
  //         (prod) => prod._id !== id
  //       );
  //       setProduits(updatedProd);
  //       toast.error('Produit supprimée avec succès!');
  //     } catch (error) {
  //       navigate("/error")
  //       console.error("Erreur lors de la suppression du produit:", error);
  //       toast.error('Erreur lors de la suppression du produit!');
  //     }
  //   };

  // Ajout de Produit
  const addProduit = async (produit) => {
    try {
      const formData = new FormData();
      formData.append("name", produit.name);
      formData.append("imageUrl", produit.image);
      // formData.append('titre', produit.titre);
      formData.append("description", produit.description);
      formData.append("quantite", produit.quantite);
      // formData.append('categorie', produit.categorie);
      // formData.append('categorieId', produit.categorieId);
      // formData.append('carracteristique', produit.carracteristique);
      formData.append("prix", produit.prix);
      // formData.append('couleur', produit.couleur);
      // formData.append('taille', produit.taille);
      // formData.append('fournisseur', produit.fournisseur);
      // formData.append('promo', produit.promo);

      const response = await axios.post(
        "https://fakestoreapi.com/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // if (response.status === 201) {
      //     fetchProduitsCategorie(categorieId)
      // alert('Produit ajouté avec succès:');
      // toast.success('Produit ajouté avec succès!');
      await Swal.fire({
        icon: "success",
        title: "Produit ajouté avec succès!",
        showConfirmButton: false,
        timer: 2000,
      });

      setShowModal(false);
    } catch (error) {
      //      else {
      //         throw new Error('Erreur lors de l\'ajout du produit');
      //     }
      // }
      // navigate("/error")
      // console.error('Erreur lors de l\'ajout du produit:', error);
      // toast.error("Erreur lors de l'ajout du produit");
      await Swal.fire({
        icon: "error",
        title: "Erreur lors de l'ajout du produit",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const updateProduit = async (produit) => {
    try {
      const formData = new FormData();
      formData.append("nom", produit.nom);
      formData.append("imageUrl", produit.image);
      formData.append("description", produit.description);
      formData.append("quantite", produit.quantite);
      formData.append("categorie", produit.categorie);
      formData.append("prix", produit.prix);

      const response = await axios.put(
        "http://127.0.0.1:8000/api/products(id)" + idAModifie,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        // Corrected to check for status 200
        // toast.warning ('Produit modifié avec succès!');
        await Swal.fire({
          icon: "success",
          title: "Produit modifié avec succès!",
          showConfirmButton: false,
          timer: 2000,
        });
        setShowModal(false);
        setTitreModal("Ajouter un produits");
        setSoumettre("Ajouter");
      } else {
        throw new Error("Erreur lors de la modification du produit");
      }
    } catch (error) {
      console.error("Erreur lors de la modification du produit:", error);
      // toast.error('Erreur lors de la modification du produit!');
      await Swal.fire({
        icon: "error",
        title: "Erreur lors de la modification du produit!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const hanldleUpdate = async (id) => {
    setShowModal(true);
    setTitreModal("Modification du produit");
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products" + id
      );
      const datasUpdates = response.data;
      setName(datasUpdates.nom);
      setTitre(datasUpdates.titre);
      setQuantite(datasUpdates.quantite);
      // setCarracteristique(datasUpdates.carracteristique)
      setPrix(datasUpdates.prix);
      // setCouleur(datasUpdates.couleur)
      // setTaille(datasUpdates.taille)
      // setFournisseur(datasUpdates.fournisseur)
      // setPromo(datasUpdates.promo)
      setCategorie(datasUpdates.categorie);
      // setCategorieId(datasUpdates.categorieId)
      setDescription(datasUpdates.description);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

  const handleSelectChangeCategorie = (e) => {
    const selectedCategoryName = e.target.value;
    setCategorieSelect(selectedCategoryName);
    filtreProdCategorie();
  };

  // Récupération de tous les produits
  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const produitsAvecQuantiteProd = response.data.map((product) => ({
        ...product,
        quantiteProd: product.quantite,
        // Supprimer la clé "quantite" de l'objet
        quantite: undefined,
      }));
      setProducts(produitsAvecQuantiteProd);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
    }
  };

  const hanldleSubmit = (e) => {
    e.preventDefault();
    const recupInput = {
      name,
      image,
      description,
      quantite,
      categorie,
      prix,
    };
    if (soumettre === "Ajouter") {
      addProduit(recupInput);
    } else {
      updateProduit(recupInput);
    }
    setName("");
    setImage("");
    setTitre("");
    setDescription("");
    setQuantite("");
    setCategorie("");
    setPrix("");
  };

  //   const fetchProduitsCategorie = async (idCategory) => {
  //     try {
  //       const response = await axiosInstance.get(`/produits/categorie/${idCategory}`);
  //       setListeProduitsCategories(response.data)
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des produits de la catégories :', error);
  //     }
  //   };

  const filtreProdCategorie = () => {
    const selectedCategory = categories.find(
      (cat) => cat.nom === categorieSelect
    );

    // if (selectedCategory) {
    setCategorie(categorieSelect);
    setCategorieId(selectedCategory.id);
    //   fetchProduitsCategorie(categorieId)
    // setFiltreProduits(listeProduitsCategories);

    // } else {
    //   setFiltreProduits(produits)
    // }
  };

  const value = {
    valueInput,
    setValueInput,
    hanldleSubmit,
    selects,
    textarea,
    inputs,
    // products,
    // fetchProduitsCategorie,
    // listeProduitsCategories,
    handleSelectChangeCategorie,
    categoryNames,
    setCategoryNames,
    // categories,
    // handleSelectChange,
    filtreProducts,
    setFiltreProducts,
    setProducts,
    table,
    products,
    addProduit,
    fetchCategories,
    // setFiltreProduits,
    // filtreProdCategorie,
    fetchProduct,
    updateProduit,
    titreModal,
    setTitreModal,
    // corpModal, setCorpModal,
    actions,
    name,
    setName,
    titre,
    setTitre,
    description,
    setDescription,
    quantite,
    setQuantite,
    prix,
    setPrix,
    setCategorie,
    categorie,
    soumettre,
    setSoumettre,
    // categorieId,setCategorieId ,
  };

  return (
    <ProduitsContext.Provider value={value}>
      {children}
    </ProduitsContext.Provider>
  );
};

export default ProduitContextProvider;
