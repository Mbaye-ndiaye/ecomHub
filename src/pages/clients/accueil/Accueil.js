import React from 'react';
import Input from '../../../components/clients/navbar/Input';
import CardProduit from '../../../components/clients/card/CardProduit';
import Navbar from '../../../components/clients/navbar/Navbar';
import Footer from '../../../components/footer/footer';

// import navbar from '../../../components/clients/navbar/Navbar';

const Accueil = () => {
	return (
		<div>
			<div className="items-center bg-black ">
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
{
	/* <div className='flex items-center mx-4 fs-5'>
  <Input />
  <FaCartShopping className='mx-4 text-lg text-white'/>
</div> */
}
{
	/* <div> */
}
