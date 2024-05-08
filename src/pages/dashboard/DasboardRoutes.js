import React from "react";
import Sidebar from "../../components/sidebare/Sidebare";
import { Routes, Route } from "react-router-dom";

import IsLogin from "../admin/isLogin";
import Commande from "../../components/commandes/Commande";
import Categorie from "../../components/categories/Categorie";
import Produis from "../../components/produits/Produis";
import GlobalContextProvider from "../../utils/context/GlobalContext";
import ProduitContextProvider from "../../utils/context/ProduitsContext";

function DashboardWithSidebar() {
  return (
    <GlobalContextProvider>
      <ProduitContextProvider>
        <Sidebar>
          <Routes>
            <Route path="/dashboard" element={<IsLogin />} />
            <Route path="/dashboard/commandes" element={<Commande />} />
            <Route path="/dashboard/categories" element={<Categorie />} />
            <Route path="/dashboard/produis" element={<Produis />} />
          </Routes>
        </Sidebar>
      </ProduitContextProvider>
    </GlobalContextProvider>
  );
}

export default DashboardWithSidebar;
