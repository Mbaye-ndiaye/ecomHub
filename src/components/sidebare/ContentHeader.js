import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch, BiNotification } from "react-icons/bi";
const ContentHeader = () => {
  const navigate = useNavigate();
  const [shopName, setShopName] = useState("");

  useEffect(() => {
    const user_Id = localStorage.getItem("userId");

    const fetchShopName = async () => {
      try {
        // Créer une nouvelle requête OPTIONS
        const optionsResponse = await fetch(
          `http://localhost:8000/api/shops/${user_Id}`,
          {
            method: "OPTIONS",
            headers: {
              // Assurez-vous d'inclure tous les en-têtes requis, par exemple :
              Authorization: `Bearer ${user_Id}`,
              "Content-Type": "application/json", // Assurez-vous d'adapter le type de contenu en fonction de votre API
            },
          }
        );

        // Afficher la réponse de la requête OPTIONS dans la console
        console.log("OPTIONS Response:", optionsResponse);

        // Analyser la réponse pour extraire les en-têtes CORS
        const accessControlAllowOrigin = optionsResponse.headers.get(
          "Access-Control-Allow-Origin"
        );
        console.log("Access-Control-Allow-Origin:", accessControlAllowOrigin);

        // Si vous recevez une réponse 200 OK, la requête OPTIONS a réussi
        // Vous pouvez ensuite continuer avec la requête GET ou POST comme d'habitude
        // N'oubliez pas d'ajuster la configuration en fonction de la réponse OPTIONS que vous obtenez
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
        <Link to={`/ShopDetail`}>{shopName}</Link>
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
