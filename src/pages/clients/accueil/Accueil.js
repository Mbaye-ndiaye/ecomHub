import React from "react";
import CardProduit from "../../../components/clients/card/CardProduit";
import Navbar from "../../../components/clients/navbar/navbar";
import Footer from "../../../components/footer/footer";
import image2 from "../../../assets/images.jpg";
import TextAccueil from "../../../components/clients/text/TextAccueil";
import HeaderBanner from "../../../components/clients/Header/HeaderBanner";

const Accueil = () => {
  return (
    <div>
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
