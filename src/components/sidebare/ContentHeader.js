import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiNotification } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

const ContentHeader = () => {
  const navigate = useNavigate();
  const [userShop, setUserShop] = useState("");
  const [selectedShop, setSelectedShop] = useState("");

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
        // if (response.data.length > 0) {
        setUserShop(response.data.name); // Suppose que le premier magasin est celui de l'utilisateur
        console.log("response", response.data.name);
        // } else {
        //   console.log("No shops found");
        // }
        // console.log("response", response.data.name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserShops();
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span>Votre boutique : {userShop}</span>
        <Link to={`/accueil/${userShop}`}>Voir mon boutique</Link>
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
      </div>
    </div>
  );
};

export default ContentHeader;
