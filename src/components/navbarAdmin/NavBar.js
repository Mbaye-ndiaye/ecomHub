
import React, { useState, useEffect} from "react";
import image2 from "../../assets/hero_image.png";
import image3 from "../../assets/Image.png";
import Footer from "../footer/footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import Temoigne from "../temoigneAdmin/Temoigne";
import { useFormContext } from "react-hook-form";
import axios from "axios";

import NaveLinks from "./NavLinks";



const Header = () => {
  // const {name} = useParams();
  const navigate = useNavigate();
  const {formData} = useFormContext();
  let Links = [
    { name: "APROPOS", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  const [boutiques, setBoutique] = useState([]);
  const [selectedBoutique, setSelectedBoutique] = useState([])

  useEffect(() => {
    const fetchBoutique = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/shops");
        setBoutique(response.data);
        console.log("response.data", response.data);
        
      } catch (error) {
        console.error("Erreur lors de la recuperer des donnees", error);
        
      }
    }

    fetchBoutique()
  }, [])



  const hanldeSelectedChange = (e) => {
  setSelectedBoutique(e.target.value)
  navigate(`/accueil/${e.target.value}`)
}


  // Fonction pour ouvrir et fermer la modal
  const toggleModal = () => {
    setOpen(!open);
  }; 




  return (
    <>
      <div className=" relative w-full min-h-screen ">
        <img
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={image3}
          alt="/"
        />

       <NaveLinks className="flex relative z-30"/>

        <div className="text-white relative mt-[10rem] p-5">
          <h1 className="text-white text-3xl">Bienvenu Chez ECOMHUB</h1>
          <p className="text-white text-lg mt-1">
            Ici on vous donne la possibilité de creer votre site ecommerce
            facilment
          </p>
        </div>

        <img
          src={image2}
          className="w-full h-[35rem] xl:w-1/2 xl:absolute bottom-0 right-20 z-0"
          alt="/"
        />
      </div>

      <Temoigne />
      <Footer />
    </>
  );
};

export default Header;
