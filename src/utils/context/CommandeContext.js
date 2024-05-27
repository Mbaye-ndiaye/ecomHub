import React, {createContext, useState} from 'react';
import { useLocation } from 'react-router-dom';
import useGlobal from '../hooks/useGlobal';
import axios from 'axios';



export const CommandeContext = createContext()
const CommandeContextProvider = ({children}) => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x);
    const commandeId = pathnames.pop();
    const table = ['Nom', 'Telephone', 'Etat de la commande', 'Action'];

    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('')
    const [name, setNom] = useState('');
    const [telephone, setTelephone] = useState();
    const [adresse, setAdresse] = useState('');
    const [ville, setVille] = useState('');   
    const [quantite, setQuantite] = useState(0);
    const [statut, setStatut] = useState('');
    const [prixProduit, setPrixProduit] = useState();
    const [prixTotal, setPrixTotal] = useState('');
    const [product_id, setProduct_id] = useState('');
    const [prixLivraison, setPrixLivraison] = useState('');
    const [produits, setProduits]  = useState('');
    const [commande, setCommande] = useState([]);

    const { setShowModal } = useGlobal();
    const closeModal = () => {
        setShowModal(false)
    }

    const [editingCommandeId, setEditingCommandeId]= useState(null);
    const [ selectValue, setSelectValue] = useState('');
    const [data, setData] = useState([]);
    const fetchCommande = async (commandeId) => {
        try {
            const response = await axios.get("http://localhost:8000/api/commandes" +commandeId);
            setData(response.data);
            
        } catch (error) {
            console.error('Erreur lors de la recuperation de la commandes');
            
        }

    }
  return (
    <CommandeContext.Provider >
        {children}
        </CommandeContext.Provider>
  )
}

export default CommandeContextProvider
