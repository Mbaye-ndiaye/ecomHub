import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ContentHeader = () => {
  const navigate = useNavigate();
  const [userShops, setUserShops] = useState([]);
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
        setUserShops(response.data);
        console.log("catégories", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserShops();
  }, []);

  const handleShopChange = (event) => {
    setSelectedShop(event.target.value);
  };

  return (
    <div>
      <h1>Sélectionnez une boutique :</h1>
      <select value={selectedShop} onChange={handleShopChange}>
        <option value="">Choisissez une boutique</option>
        {userShops.map((shop) => (
          <option key={shop.id} value={shop.id}>
            {shop.name}
          </option>
        ))}
      </select>
      {selectedShop && (
        <Link to={`/accueil/${selectedShop}`}>Voir les détails</Link>
      )}
    </div>
  );
};

export default ContentHeader;
