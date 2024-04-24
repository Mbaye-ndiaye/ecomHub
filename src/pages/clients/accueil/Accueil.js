import React from 'react';

const Accueil = () => {
  return (
    <nav className="p-4 ">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center">
          <p className="mx-4 text-xl font-semibold text-white">Logo</p>
          <div className='flex mx-4 mx-auto text-white'>
            <p>Home</p>
            <p>Product</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="hidden md:block">
          
        </div>

      </div>
    </nav>
  );
};

export default Accueil;

