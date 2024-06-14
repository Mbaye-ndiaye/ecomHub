import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiNotification } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import useGlobal from "../../utils/hooks/useGlobal";


const ContentHeader = () => {
  const navigate = useNavigate();
  const [userShop, setUserShop] = useState(null);
  const { handleLogout } = useGlobal()

  const deconnexion = () => {
    handleLogout()

  }
 

  useEffect(() => {
    const fetchUserShops = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user/shops",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tokenClient")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setUserShop(response.data);
        console.log("response", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserShops();
  }, []);

  if (!userShop) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span>Votre boutique : {userShop.name}</span>
        <Link to={`/accueil/${userShop.name}`}>Voir mon boutique</Link>
      </div>

      <div className="flex items-center gap-[20px]">
        <div className="bg-blue-300 px-5 py-1 rounded flex items-center">
          <input
            type="text"
            placeholder="recherche..."
            className="border-0 outline-none bg-transparent p-[5px]"
          />
          <BiSearch className="text-[#969393] text-md cursor-pointer ease-in-out duration-100 hover:cursor-pointer hover:scale-75" />
        </div>
        <Link to={"/dashboard/FormProfilUser"}>
          <div className="bg-[#dde6ed] p-[12px] rounded text-[#969393] flex items-center justify-center ">
            <BiNotification className="text-[#969393] text-md cursor-pointer ease-in-out duration-100 hover:cursor-pointer hover:scale-75" />
          </div>
        </Link>
        <button onClick={deconnexion} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Déconnexion
          </button>
      </div>
    </div>
  );
};

export default ContentHeader;
