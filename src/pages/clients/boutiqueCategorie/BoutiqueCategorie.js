import React from 'react';
import Navbar from '../../../components/clients/navbar/navbar';
import ButtonComponent from '../../../components/clients/button/ButtonComponent';
import { NavLink } from 'react-router-dom';


const BoutiqueCategorie = ({onClick}) => {
  return (
    <div>
      <div>
        <Navbar />
        </div>
        <div className="flex items-center px-3 my-10">
          <div className="">
            <ButtonComponent
              className={"mt-10 w-auto px-3 py-2 text-white  rounded "}
              texte={"MARHABA SHOP"}  
            />
          </div>
        </div>
        
    </div>
  )
}

export default BoutiqueCategorie
