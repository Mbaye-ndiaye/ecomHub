import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function NaveLinks({ className }) {
  let [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // Fonction pour ouvrir et fermer la modal

  const handleCreateShopClick = () => {
    const token = localStorage.getItem("tokenClient");
    if (token) {
      // L'utilisateur est connecté, ouvrez la modal
      navigate("/creeShop");
    } else {
      // L'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
      navigate("/connexion");
    }
  };
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className={className}>
        <div className=" w-full fixed top-0 left-0">
          <div className="md:flex items-center justify-between text-white py-4 md:px-10 px-7">
            <NavLink
              exact
              to="/"
              className="font-bold text-2xl cursor-pointer flex items-center gap-1"
            >
              <h1 className="w-[300px] h-7 text-blue-600">MARHABA Store</h1>
            </NavLink>
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-6 relative z-30 cursor-pointer md:hidden w-7 h-7"
            >
              {open ? <FaXmark /> : <FaBars />}
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-12" : "top-[-490px]"
              }`}
            >
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <NavLink
                  className="text-white hover:text-blue-400 duration-500"
                  exact
                  to="/Admin"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <NavLink
                  className="text-white hover:text-blue-400 duration-500"
                  exact
                  to="/Boutique"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Voir les Boutique
                </NavLink>
              </li>
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <NavLink
                  className="text-white hover:text-blue-400 duration-500"
                  exact
                  to="/AproposEcom"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  A propos
                </NavLink>
              </li>
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <NavLink
                  className="text-white hover:text-blue-400 duration-500"
                  exact
                  to="/ContactEcom"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </li>

              <button
                onClick={handleCreateShopClick}
                className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
              >
                Creer mon boutique
              </button>

              <button className="btn bg-transparant border border-blue-600 hover:bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
                Connexion
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NaveLinks;
