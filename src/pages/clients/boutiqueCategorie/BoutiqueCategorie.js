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
  const {categorie, setCategorie} = useContext(CategorieContext)
  const [produits, setProduits] = useState([]);
  const [activaCategorie, setActivaCategorie] = useState([])
  const [filterProduits, setFilterProduits] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const produitsAvecQuantite = response.data.map((produit) => ({
        ...produit
      }))
      setProduits(produitsAvecQuantite);
      console.log("produitsAvecQuantite", produitsAvecQuantite);
    } catch (error) {
      console.error('Error  lors de la recuperation des produits:', error);
    }
  };
  const afficheTousLesProduits = () => {
    setFilterProduits(produits)
    setActivaCategorie(null)
  };

  const filterParCategorie = (category) => {
    const filterProduits = produits.filter((produit) => 
    produit.categorie.toLowerCase().includes(category.toLowerCase())
  );
  setFilterProduits(filterProduits);
  setActivaCategorie(categorie);
    
  }
  const fecthFilterCategorie = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/categories")
      setCategorie(response.data)
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
      <div className=" flex items-center px-3 my-10">
        <div className="flex py-10">
          <div className='flex items-center flex-wrap px-3 my-10'>
          <ButtonComponent
            className={`mt-2 ml-6 w-auto px-3 py-2  tracking-widest click-event rounded ${
              activaCategorie === null 
              ? "bg-slate-800 out-click text-white"
              : "bg-gray-200"
            }`}
            texte={" Afficher tous les produits"}
            onClick={() => afficheTousLesProduits()}
  
          />
          </div>
          <div>
          <ButtonComponent
            className={'mt-2 ml-6 w-auto px-3 py-2 bg-white tracking-widest click-event rounded '}
            texte={"Categorie"}
          />
          </div>
          <div>
          <ButtonComponent
            className={'mt-2 ml-6 w-auto px-3 py-2 bg-white tracking-widest click-event rounded '}
            texte={"Categorie"}
          />
          </div>
          <div>
          <ButtonComponent
            className={'mt-2 ml-6 w-auto px-3 py-2 bg-white tracking-widest click-event rounded '}
            texte={"Categorie produit"}
          />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
      {produits.map((product, index) => (
          <div key={index} className="bg-white w-[300px] rounded-lg mt-5 overflow-hidden shadow-lg">
            {/* <div className='w-full h-full    '> */}
            <div>
            <img className="w-[180px]  mx-auto  h-48" src={produits.image} alt={product.title} />
            </div> 
            {/* </div>  */}
            <div className="p-3 ">
              <h3 className="text-sm text-black mb-2">{produits.category}</h3>
              <p className="text-black text-xs mb-2">{produits.category}</p>
              <div className='flex justify-between items-center px-0'>
              <p className="text-gray-900 text-black font-bold">${produits.price}</p>
              <button className=" bottom-0 left-10  bg-red-500 text-white px-2 py-1 rounded-lg">Ajouter au panier</button>
              </div>
            </div>
          </div>
        ))}
        </div>
        
      <div>
        {/* Afficher les produits filtrés sous les boutons */}
    
      </div>
    </div>
  );
};

export default BoutiqueCategorie;


      {/* <div>
        {filteredProducts.length > 0 ? (
          <div className="grid px-6 md:ps-9 md:pe-9  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((produit) => (
              <CardList produit={produit} key={produit._id} />
            ))}
          </div>
        ) : (
          <LoaderCard />
        )}
      </div> */}