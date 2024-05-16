import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiNotification } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

const ContentHeader = () => {
  const navigate = useNavigate();
  const [userShops, setUserShops] = useState([]);

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
        setUserShops(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserShops();
  }, []);

  return (

    <div className="flex items-center justify-between">
      <h1 className="text-[#526d82] text-2xl">
        Bienvenue sur le tableau de bord de :{" "}
      </h1>
      <ul>
        {Array.isArray(userShops) &&
          userShops.map((shop) => (
            <li key={shop.id}>
              <Link to={`/ShopDetail/${shop.id}`}>{shop.name}</Link>
            </li>
          ))}
      </ul>
      <div className="flex items-center gap-[20px]">
        <div className="bg-blue-300 px-5 py-1 rounded flex items-center">
          <input
            type="text"
            placeholder="recherche..."
            className="border-0 outline-none bg-transparent p-[5px]"
          />
          <BiSearch className="text-[#969393] text-md cursor-pointer ease-in-out duration-100 hover:cursor-pointer hover:scale-75" />
        </div>
        <Link to={'/dashboard/FormProfilUser'}>
        <div className="bg-[#dde6ed] p-[12px] rounded text-[#969393] flex items-center justify-center ">
          <BiNotification className="text-[#969393] text-md cursor-pointer ease-in-out duration-100 hover:cursor-pointer hover:scale-75" />
        </div>
        </Link>
      </div>
      </div>

    
  );
};

export default ContentHeader;
