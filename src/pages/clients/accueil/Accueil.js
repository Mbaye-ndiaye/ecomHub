import React from 'react';
import Input from '../../../components/clients/navbar/Input';
import CardProduit from '../../../components/clients/card/CardProduit';
import Navbar from '../../../components/clients/navbar/navbar';
import Footer from '../../../components/footer/footer';
import BackgroundImage from '../../../components/clients/bcakgroundImage/BackgroundImage';
import image2 from '../../../assets/images.jpg';
import TextAccueil from '../../../components/clients/text/TextAccueil';



const Accueil = () => {

  return (
    <div >
      <div className='items-center bg-black ' style={{backgroundImage:  `url(${image2})`}}>
        <Navbar />
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
