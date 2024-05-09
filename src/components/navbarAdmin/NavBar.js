import React, { useState, useEffect} from "react";
import Modal from "./modal/Modal";
import image2 from "../../assets/hero_image.png";
import image3 from "../../assets/Image.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Footer from "../footer/footer";

import FormsModal from "./modal/FormsModal";
import { Link, useNavigate, useParams } from "react-router-dom";
import Temoigne from "../temoigneAdmin/Temoigne";
import { useFormContext } from "react-hook-form";
import axios from "axios";



const Header = () => {
  // const {name} = useParams();
  const navigate = useNavigate();
  const {formData} = useFormContext();
  let Links = [
    { name: "APROPOS", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  const [boutiques, setBoutique] = useState([]);
  const [selectedBoutique, setSelectedBoutique] = useState([])

  useEffect(() => {
    const fetchBoutique = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/shops");
        setBoutique(response.data);
        console.log("response.data", response.data);
        
      } catch (error) {
        console.error("Erreur lors de la recuperer des donnees", error);
        
      }
    }

    fetchBoutique()
  }, [])



  const hanldeSelectedChange = (e) => {
  setSelectedBoutique(e.target.value)
  navigate(`/accueil/${e.target.value}`)
}


  // Fonction pour ouvrir et fermer la modal
  const toggleModal = () => {
    setOpen(!open);
  }; 

  return (
    <>
      <div className=" relative w-full min-h-screen ">
        <img
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={image3}
          alt="/"
        />

        <nav className="flex relative z-30">
          {/* <img src={image1} alt="/" /> */}
          <div className=" w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between text-white py-4 md:px-10 px-7">
              {/* logo section */}
              <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                {/* <Link to="/Accueil"> */}
                  <h1 className="w-7 h-7 text-blue-600">ECOMHUB</h1>
                {/* </Link> */}
              </div>
              {/* Menu icon */}
              <div
                onClick={() => setOpen(!open)}
                className="absolute right-8 top-6 relative z-30 cursor-pointer md:hidden w-7 h-7"
              >
                {open ? <FaXmark /> : <FaBars />}
              </div>
              {/* linke items */}
              <ul
                className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-12" : "top-[-490px]"
                }`}
              >
                <select 
                className="btn bg-white text-black md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static w-48"
                value={selectedBoutique}
                onChange={hanldeSelectedChange}>
                  <option value="">Voir des boutique</option>
                  {boutiques?.map((boutique) => (
                  
                    <option key={boutique.id} value={boutique.id}>
                      <img src={boutique.logo} alt={boutique.name} className="w-6 h-6 mr-2"/>
                      {boutique.name}
                    </option>
                  ))}
                  
                </select>
                {Links.map((link) => (
                  <li className="md:ml-8 md:my-0 my-7 font-semibold">
                    <a
                      href={link.link}
                      className="text-white hover:text-blue-400 duration-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <button
                  onClick={toggleModal}
                  className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
                >
                  Creer mon boutique
                </button>
              </ul>
              {/* button */}
            </div>
          </div>
          {/* <img src={image2} alt="/" /> */}
        </nav>
        <div className="text-white relative mt-[10rem] p-5">
          <h1 className="text-white text-3xl">Bienvenu Chez ECOMHUB</h1>
          <p className="text-white text-lg mt-1">
            Ici on vous donne la possibilité de creer votre site ecommerce
            facilment
          </p>
        </div>

        <img
          src={image2}
          className="w-full h-[35rem] xl:w-1/2 xl:absolute bottom-0 right-20 z-0"
          alt="/"
        />
      </div>
      {open && (
        <Modal onClose={toggleModal}>
          <FormsModal />
        </Modal>
      )}

      <Temoigne />
      <Footer />
    </>
  );
};

export default Header;
