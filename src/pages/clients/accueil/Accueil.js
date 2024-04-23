import React from 'react';

const Accueil = () => {
  return (
    <nav className=" p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-white text-xl font-semibold mx-4">Logo</p>
          <div className='flex mx-auto text-white mx-4'>
            <p>Home</p>
            <p>Product</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="hidden md:block">
          
        </div>
        {/* <div className="md:hidden">
          <button className="text-white focus:outline-none">
           
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Accueil;

