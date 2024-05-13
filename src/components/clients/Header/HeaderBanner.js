import React from 'react';
import Banner from './Banner';
import imgShop from '../../../assets/imgShop.jpg'
import { FaPlusSquare } from "react-icons/fa";


const HeaderBanner = () => {
  return (
    
    <div className=" shadow-lg sm:pt-8 overflow-hidden max-h-[450px] bg-no-repeat sm:min-h-[600px] flex  items-center pl-[25px] duration-200 ">
        <div className=" shadow-lg  overflow-hidden min-h-[590px] sm:min-h-[690px] flex justify-center pl-[12px] items-center  duration-200">
        <img imageUrl={imgShop} altText="Description de l'image" />
        <div>
            <h1 className="text-4xl font-bold z-0 text-black">Votre Boutique</h1>
            <p className="mt-2 text-lg text-black">Votre sous-titre ou contenu supplémentaire</p>
        <div >
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
        Acheter a la boutique
      </button>
        </div>
        </div>
      </div>

    </div>
  )
}

export default HeaderBanner
