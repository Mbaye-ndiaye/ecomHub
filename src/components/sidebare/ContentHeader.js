import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch, BiNotification } from "react-icons/bi";
const ContentHeader = () => {
  const navigate = useNavigate();
  const [shopName, setShopName] = useState("");

  useEffect(() => {
    // Récupérer le nom de la boutique depuis la base de données en utilisant l'ID de l'utilisateur
    const user_Id = localStorage.getItem("userId");
    console.log("tokenClient", user_Id);

    const fetchShopName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/shops/${user_Id}`,
          {
            headers: {
              Authorization: `Bearer ${user_Id}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setShopName(response.data.name);
        console.log("response", response.data.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShopName();
  }, []);

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[#526d82] text-2xl">
        Bienvenue sur le tableau de bord de :{" "}
        <Link to={`/ShopDetail`}>Seck</Link>
      </h1>
      <div className="flex items-center gap-[20px]">
        <div className="bg-blue-300 px-5 py-1 rounded flex items-center">
          <input
            type="text"
            placeholder="recherche..."
            className="border-0 outline-none bg-transparent p-[5px]"
          />
          <BiSearch className="text-[#969393] text-md cursor-pointer ease-in-out duration-100 hover:cursor-pointer hover:scale-75" />
        </div>
        <div className="bg-[#dde6ed] p-[12px] rounded text-[#969393] flex items-center justify-center ">
          <BiNotification className="text-[#969393] text-md cursor-pointer ease-in-out duration-100 hover:cursor-pointer hover:scale-75" />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
