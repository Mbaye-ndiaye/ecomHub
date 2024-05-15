import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <h1>Liste de vos boutiques :</h1>
      <ul>
        {Array.isArray(userShops) &&
          userShops.map((shop) => (
            <li key={shop.id}>
              <Link to={`/ShopDetail/${shop.id}`}>{shop.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContentHeader;
