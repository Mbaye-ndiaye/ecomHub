import React from 'react';
import Input from '../../../components/clients/navbar/Input';
import CardProduit from '../../../components/clients/card/CardProduit';
import Navbar from '../../../components/clients/navbar/Navbar';
import Footer from '../../../components/footer/footer';

// import navbar from '../../../components/clients/navbar/Navbar';





const Accueil = () => {
  return (
    <div >
      <div className='  bg-black items-center'>
        <Navbar />
      </div>
      <div>
        <CardProduit />
      </div>
     <div>

		    <Footer />
     </div>
    </div>
  );
};

export default Accueil;
// </div>
{/* <div className=' flex items-center fs-5 mx-4'>
  <Input />
  <FaCartShopping className='text-white text-lg mx-4'/>
</div> */}
{/* <div> */}

