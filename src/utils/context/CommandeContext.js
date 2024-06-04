import React, { createContext, useEffect, useState } from 'react';

import useGlobal from '../../utils/hooks/useGlobal';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export const CommandeContext = createContext();

const CommandeContextProvider = ({ children }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const commandeId = pathnames.pop();

  const table = ['Nom', 'Telephone', 'Statut', 'Actions'];

  const [product_id, setProduct_id] = useState('');
//   const [product_ids, setProduct_ids] = useState('');
  const [email, setEmail] = useState('');
  const [quantite, setQuantite] = useState(0);
  const [produits, setProduits] = useState('');
  const [statut, setStatut] = useState('');
  const [prixTotal, setPrixTotal] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [prixLivraison, setPrixLivraison] = useState('');
  const [prixProduit, setPrixProduit] = useState('');
  const [modif, setModifModal] = useState('');
  const [commandes, setCommandes] = useState([]);

  const { setShowModal } = useGlobal();

  const closeModal = () => {
    setShowModal(false)
  }

  const [editingCommandeId, setEditingCommandeId] = useState(null);

  const [selectsValue, setSelectsValue] = useState('');

  const [data, setData] = useState([]);
  
    const fetchCommande = async (commandeId) => {
      try {
        const response = await axios.get('http://localhost:8000/api/commandes' + commandeId);
        setData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de la commandes:', error);
      }
    };

  const handleDetail = (commandeId) => {
    const commandeIdCli = localStorage.getItem('commandeIdCli');
  };

  const handleEditCommande = async (id, newData) => {
    try {
      const response = await axios.put('http://localhost:8000/api/commandes' + id, newData);

      if (response.status === 200) {
     

        fetchCommandes();
        setModifModal(false);
      } else {
        throw new Error('Erreur lors de la modification');
      }
    } catch (error) {
      console.error('Erreur lors de la modification:', error);
    }
  };

  const [setIsEditing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validationCommande = {
        statut: selectsValue,
      };

      // Récupérer la commande en cours d'édition
      const commandeResponse = await axios.get(
        'http://localhost:8000/api/commandes' + editingCommandeId
      );
      const produitVente = commandeResponse.data;

      if (validationCommande.statut === 'livrée') {
        // Récupérer les produits associés à la commande
        const produitsPromises = produitVente.product_id.map(async (id) => {
          const produitResponse = await axios.get('http://localhost:8000/api/products' + id);
          return produitResponse.data;
        });
        const produits = await Promise.all(produitsPromises);

        // Calculer les nouvelles quantités et ventes
        const updatedProduits = produits.map((prod, index) => {
          const nouvelleQuantite = prod.quantite - produitVente.quantite[index];
          const nouvelleVente = prod.vente + produitVente.quantite[index];
          return { ...prod, quantite: nouvelleQuantite, vente: nouvelleVente };
        });

        // Mettre à jour les produits dans la base de données
        const updateProduitsPromises = updatedProduits.map(async (prod) => {
          const updateProduitResponse = await axios.put(
            'http://localhost:8000/api/products' + prod.id,
            prod
          );
          return updateProduitResponse.data;
        });
        await Promise.all(updateProduitsPromises);
      }

      // Mettre à jour l'état de la commande
      const updateCommandeResponse = await axios.put(
        'http://localhost:8000/api/commandes' + editingCommandeId,
        validationCommande
      );
      if (updateCommandeResponse.status === 200) {
        console.log('Statut modifié avec succès:', updateCommandeResponse.data);
        
        fetchCommandes();
        setModifModal(false);
        closeModal()
      } else {
        throw new Error('Erreur lors de la modification');
      }
    } catch (error) {
      console.error('Erreur lors de la modification:', error);
      
    }
  };

  const handleDelete = async (commandeId) => {
    try {
      // Effectuez une requête DELETE vers votre API avec axios
      await axios.delete(`http://localhost:8000/api/commandes/${commandeId}`);

      // Mettez à jour l'état des catégories en filtrant la catégorie supprimée de la liste
      const updatedCommande = commandes.filter(
        (commande) => commande.id !== commandeId
      );
      setCommandes(updatedCommande);

      fetchCommandes();
    } catch (error) {
      console.error('Erreur lors de la suppression de la commande:', error);
    }
  };

  const fetchCommandes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/commandes");
      const commandeAvecQuantiteProd = response.data.map((commande) => ({
        ...commande,
        quantiteCom: commande.quantite,
        // Supprimer la clé "quantite" de l'objet
        quantite: undefined,
      }));
      setCommandes(commandeAvecQuantiteProd);
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes:', error);
    }
  };

  useEffect(() => {
    fetchCommandes();
  }, []);


  const value = {
    
    fetchCommande,
    commandeId,
    fetchCommandes,
    commandeId,
    setShowModal,
    setEditingCommandeId,
    handleEditCommande,
    handleSubmit,
    handleDetail,
    handleDelete,
    setSelectsValue,
    setIsEditing,
    closeModal,
    table,
    commandes,
    produits,
    setProduits,
    product_id,
    setProduct_id,
    
    telephone,
    setTelephone,
    adresse,
    setAdresse,
    prixLivraison,
    setPrixLivraison,
    prixProduit,
    setPrixProduit,
    email,
    quantite,
    prixTotal,
    setPrixTotal,
    setEmail,
    statut,
    setStatut,
    setQuantite,
    modif,
    setModifModal,
    setCommandes,
    data,
    setData,
  };

  return (
    <CommandeContext.Provider value={value}>
      {children}
    </CommandeContext.Provider>
  );
};

export default CommandeContextProvider;