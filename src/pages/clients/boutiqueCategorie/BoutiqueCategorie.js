import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../../components/clients/navbar/navbar';
import ButtonComponent from '../../../components/clients/button/ButtonComponent';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import CardProduit from '../../../components/clients/card/CardProduit';
import LoaderCard from '../loaderCard/LoaderCard';
import CardList from '../../../components/clients/card/CardList';
import { CategorieContext } from '../../../utils/context/CategorieContext';

const BoutiqueCategorie = () => {
  const {categories, setCategories} = useContext(CategorieContext)
  const [produits, setProduits] = useState([]);
  const [activaCategorie, setActivaCategorie] = useState([])
  const [filterProduits, setFilterProduits] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:8000/api/products');
      const produitsAvecQuantite = response.data.map((produit) => ({
        ...produit
      }))
      setProduits(produitsAvecQuantite);
      console.log("produitsAvecQuantite", produitsAvecQuantite);

    } catch (error) {
    console.error('Error  lors de la recuperation des produits:', error);
    }
  }
  const afficheTousLesProduits = () => {
    setFilterProduits(produits)
    setActivaCategorie(null)
  };

  const filterParCategorie = (category) => {
    const filterProduits = produits.filter((produit) => 
    produit.categorie.toLowerCase().includes(category.toLowerCase())
  );
  setFilterProduits(filterProduits);
  setActivaCategorie(categories);
    
  }
  const fecthFilterCategorie = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/categories")
      setCategories(response.data)
      console.log("Categorie", response.data);
    } catch (error) {
      console.error("Erreur lors de la recuperation des categories:", error);
      
    }
  }
  window.onload = () => {
    afficheTousLesProduits()
  }
  useEffect(() => {
    fecthFilterCategorie()
  }, [])

  useEffect(() => {

    fetchData();
  }, []);

  useEffect(() => {
  setFilterProduits(produits)
  }, [produits])


  return (
    <div>
      <Navbar />
      <div className="flex items-center px-3 my-10">
        <div className="py-10">
          <div className=' flex items-center  px-3 my-10'>
            <div className='flex flex-wrap'>
          <ButtonComponent
            className={`mt-2 ml-6 w-auto px-3 py-2  tracking-widest click-event rounded ${
              activaCategorie === null 
              ? "bg-slate-800 out-click text-white"
              : "bg-gray-200"
            }`}
            texte={" Afficher tous les produits"}
            onClick={() => afficheTousLesProduits()}
  
          />
          {categories?.map((categorie, index) => (
            <NavLink
            className={`mt-2 ml-6 w-auto px-3 py-2 tracking-windexest click-event rounded ${
              activaCategorie === categorie.name
              ? " text-white out-click"
              : "bg-gray-200"
            }`}
            onClick={() => filterParCategorie(categorie.name)}
            key={index}>
              {categorie.name}

            </NavLink>
          ))}
          </div>
            </div>
            <div className='grid grid-cols-1 sm:grid:cols-4'>
              {produits.length > 0 ? (
                <div className=''>
                  {produits.map((produit) => (
                    <CardList produit={produit} key={produit.id} />
                  ))}
                </div>
              ) : (
                <LoaderCard />
              )}
            </div>
          {/* <div>
          <ButtonComponent
            className={'mt-2 ml-6 w-auto px-3 py-2 bg-white tracking-widest click-event rounded '}
            texte={"Categorie"}
          />
          </div> */}
          {/* <div>
          <ButtonComponent
            className={'mt-2 ml-6 w-auto px-3 py-2 bg-white tracking-widest click-event rounded '}
            texte={"Categorie"}
          />
          </div> */}
          {/* <div>
          <ButtonComponent
            className={'mt-2 ml-6 w-auto px-3 py-2 bg-white tracking-widest click-event rounded '}
            texte={"Categorie produit"}
          />
          </div> */}
        </div>
      </div>
       
        
      <div>
        {/* Afficher les produits filtrés sous les boutons */}
    
      </div>
    </div>
  );
};

export default BoutiqueCategorie;


    