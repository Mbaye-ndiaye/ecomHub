import React from 'react';
import Banner from './Banner';
import imgShop from '../../../assets/imgShop.jpg'


const HeaderBanner = () => {
  return (
    <div className="relative shadow-lg sm:pt-8 overflow-hidden max-h-[350px] sm:min-h-[500px] flex  items-center pl-[25px] duration-200">
        <div className="relative shadow-lg  overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center pl-[12px] items-center  duration-200">
        <img imageUrl={imgShop} altText="Description de l'image" />
        <div>
            <h1 className="text-4xl font-bold">Votre Boutique</h1>
            <p className="mt-2 text-lg">Votre sous-titre ou contenu supplémentaire</p>
        </div>
      </div>

    </div>
  )
}

export default HeaderBanner
