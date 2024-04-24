import imgShop from '../../../assets/imgShop.jpg';
import React from 'react';

const BackgroundImage = () => {
  return (
    <div>
        <img
            className="absolute object-cover w-full h-full mix-blend-overlay"
            src={imgShop}
                alt="/"
            />

        {/* <div className="text-white relative ">
				<h1 className="text-3xl text-black">Bienvenu Chez ECOMHUB</h1>
				<p className="mt-1 text-lg text-black fs-6">
                    Des offres pluvieuses pour un été chaud !
                    25% de réduction sur tous les produits
					</p>
                    <button type='submit' className=''>Acheter maintenant</button>
				</div> */}
    </div>
  );
}

export default BackgroundImage;

