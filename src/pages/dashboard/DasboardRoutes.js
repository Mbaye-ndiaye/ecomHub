import React from "react";
import Sidebar from "../../components/sidebare/Sidebare";
import { Routes, Route } from "react-router-dom";

import IsLogin from "../admin/isLogin";
import Commande from "../../components/commandes/Commande";
import Categorie from "../../components/categories/Categorie";
import Produis from "../../components/produits/Produis";

function DashboardWithSidebar() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/dashboard" element={<IsLogin />} />
        <Route path="/dashboard/commandes" element={<Commande />} />
        <Route path="/dashboard/categories" element={<Categorie />} />
        <Route path="/dashboard/produis" element={<Produis />} />
      </Routes>
    </Sidebar>
  );
}

export default DashboardWithSidebar;
