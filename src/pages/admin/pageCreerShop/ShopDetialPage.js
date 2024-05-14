// ShopDetailPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShopDetailPage = () => {
  const { shop_Id } = useParams(); // Récupérer l'ID de la boutique depuis l'URL
  const [shopDetails, setShopDetails] = useState(null);

  useEffect(() => {
    const fetchShopDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/shops/${shop_Id}`,
          {
            headers: {
              Authorization: `Bearer ${shop_Id}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setShopDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShopDetails();
  }, [shop_Id]);

  if (!shopDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{shopDetails.name}</h1>
      <p>Description: {shopDetails.description}</p>
      {/* Affichez d'autres détails de la boutique ici */}
    </div>
  );
};

export default ShopDetailPage;
