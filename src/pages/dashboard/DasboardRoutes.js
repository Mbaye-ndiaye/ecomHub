import React from "react";
import Sidebar from "../../components/sidebare/Sidebare";
import { Routes, Route } from "react-router-dom";

import IsLogin from "../admin/isLogin";

import Produis from "../../components/produits/Produis";
import GlobalContextProvider from "../../utils/context/GlobalContext";
import ProduitContextProvider from "../../utils/context/ProduitsContext";
import CategoriesAdmin from "../../components/categories/CategoriesAdmin";
import SidebareContextProvider from "../../utils/context/SidebareContext";
import CommandeAdmin from "../../components/commandes/CommandeAdmin";
import CommandeContextProvider from "../../utils/context/CommandeContext";
import Messages from "../../components/message/Messages";


function DashboardWithSidebar() {
  return (
    // <GlobalContextProvider>
    <SidebareContextProvider>
      {/* <ProduitContextProvider> */}
      <CommandeContextProvider>
        <Sidebar>
          <Routes>
            <Route path="/dashboard" element={<IsLogin />} />
            <Route path="/dashboard/commandes" element={<CommandeAdmin />} />
            <Route path="/dashboard/categories" element={<CategoriesAdmin />} />
            <Route path="/dashboard/produis" element={<Produis />} />
            <Route path="/dashboard/message" element={<Messages />} />
          </Routes>
        </Sidebar>
        {/* </ProduitContextProvider> */}
      </CommandeContextProvider>
    </SidebareContextProvider>
  );
}

export default DashboardWithSidebar;
