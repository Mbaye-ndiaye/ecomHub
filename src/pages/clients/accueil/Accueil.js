import React, {useEffect, useState} from "react";
import CardProduit from "../../../components/clients/card/CardProduit";
import Navbar from "../../../components/clients/navbar/navbar";
import Footer from "../../../components/footer/footer";
import image2 from "../../../assets/images.jpg";
import TextAccueil from "../../../components/clients/text/TextAccueil";
import HeaderBanner from "../../../components/clients/Header/HeaderBanner";
import { useParams } from "react-router-dom";
import useFormContext from "../../../utils/hooks/useFormContext";
import axios from "axios";


const Accueil = () => {
  const {name} = useParams();
  const {formData} = useFormContext();
  const [nomBoutique, setNomBoutique] = useState();

  useEffect(() => {
    
    const afficheUneBoutique = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/shops/${name}`)
        setNomBoutique(response.data)
        console.log("Accueil", response.data);

      } catch (error) {
        console.error("Erreur lors de la recuperation d'une boutique");
        
      }
    }
    afficheUneBoutique()
  }, [name])

  if(!nomBoutique) 
  return <div>Chargement en cour...</div>
  
 

  return (
    <div >
      <div
      
        className="items-center bg-white "
        style={{ backgroundImage: `url(${image2})` }}
      >
        <Navbar />
			<HeaderBanner /> 
      </div>
      
      <div>
        <CardProduit />
      </div>
      <div>
        <TextAccueil />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Accueil;
