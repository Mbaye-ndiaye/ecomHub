import React, { useContext, useEffect, useState } from "react";
import CardProduit from "../../../components/clients/card/CardProduit";
import Navbar from "../../../components/clients/navbar/navbar";
import Footer from "../../../components/footer/footer";
import image2 from "../../../assets/images.jpg";
import TextAccueil from "../../../components/clients/text/TextAccueil";
import HeaderBanner from "../../../components/clients/Header/HeaderBanner";
import { useParams } from "react-router-dom";
// import useFormContext from "../../../utils/hooks/useFormContext";
import axios from "axios";
import NaveLinks from "../../../components/navbarAdmin/NavLinks";
import { FormShopContext } from "../../../utils/context/FormShopContext";
import SpinnerLoader from "../../../components/spinnerLoader/SpinnerLoader";

const Accueil = () => {
  const { name } = useParams();
  const { afficheUneBoutique, boutique } = useContext(FormShopContext);
  console.log("4", boutique);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    afficheUneBoutique(name)
      .then(() => setLoading(false)) // Arrête le chargement une fois que les données sont chargées
      .catch(() => setLoading(false)); // Arrête le chargement en cas d'erreur
  }, []);

  if (loading) return <SpinnerLoader />;

  return (
    <div className="bg-gray-100 ">
      <div
        className=" bg-white bg-cover bg-no-repeat   w-full "
        style={{ backgroundImage: `url(${boutique?.banniere})` }}
      >
        <Navbar />

			<HeaderBanner /> 

        {/* <NaveLinks className="bg-gray-700"/> */}
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
