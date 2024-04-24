import React from 'react';
import { FaUsers } from "react-icons/fa";

const TextAccueil = () => {
  return (
    <div className='flex gap-4 px-4 text-lg'>
        <div className='py-5 '>
            <div className='flex mx-auto text-2xl'>
            <FaUsers />
            </div>
            <h2>Livraison International</h2>
            <p>Il elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='py-5 '>
            <div className='flex text-center text-2xl'>
            <FaUsers />
            </div>
            <h2>Livraison International</h2>
            <p>Il elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='py-5 '>
            <div className='flex text-center text-2xl'>
            <FaUsers className='flex text-center'/>
            </div>
            <h2>Livraison International</h2>
            <p>Il elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='py-5 '>
            <div className='flex text-center text-2xl'>
            <FaUsers />
            </div>
            <h2>Livraison International</h2>
            <p>Il elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      
    </div>
  )
}

export default TextAccueil
