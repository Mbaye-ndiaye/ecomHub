import React from "react";
import Login from "./components/adminConnexion/Connexion";
import Inscription from "./components/adminInscription/Inscription";
import InterfaceAdmin from "./components/interfaceAdmin/InterfaceAdmin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/clients/panier/Panier";
import CheckoutPage from "./pages/clients/checkout/Checkout";
import Accueil from "./pages/clients/accueil/Accueil";
import AboutPage from "./pages/clients/apropos/Apropos";
import ContactPage from "./pages/clients/contact/Contact";
import DashboardWithSidebar from "./pages/dashboard/DasboardRoutes";
import BoutiqueUser from "./components/navbarAdmin/naveLink/BoutiqueUser";
import ContactEcom from "./components/navbarAdmin/naveLink/ContactEcom";
import AproposEcom from "./components/navbarAdmin/naveLink/AproposEcom";
import FormsShop from "./pages/admin/pageCreerShop/CreerShop";

import FormProfilUser from "./pages/admin/profilUser/FormProfilUser";
import CategoriesAdmin from "./components/categories/CategoriesAdmin";
import Commande from "./components/commandes/Commande";
import ProduitContextProvider from "./utils/context/ProduitsContext";
import Produis from "./components/produits/Produis";
// import CategoriesAdmin from "./components/categories/CategoriesAdmin";

function App() {
  return (
    <div className="App">
      {/* <IsLogin/> */}
      <Router>
        <Routes>
          <Route path="/connexion" element={<Login />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/" element={<InterfaceAdmin />} />
          <Route path="/panier" element={<ShoppingCart />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/creeShop" element={<FormsShop />}></Route>
          <Route path="/Accueil" element={<Accueil />}></Route>
          <Route path="/Apropos" element={<AboutPage />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route path="/Boutique" element={<BoutiqueUser />} />
          <Route path="/ContactEcom" element={<ContactEcom />} />
          <Route path="/AproposEcom" element={<AproposEcom />} />
          <Route path="/*" element={<DashboardWithSidebar />} />
        </Routes>

        {/* <GlobalContextProvider>
          <ProduitContextProvider>
            <Routes>
              <Route path="/Dash" element={<IsLogin />}></Route>
              <Route path="/produits" element={<Produis />}></Route>
              <Route path="/categories" element={<CategoriesAdmin />}></Route>
              <Route path="/commandes" element={<Commande />}></Route>

            </Routes>
          </ProduitContextProvider>
        </GlobalContextProvider> */}
      </Router>
    </div>
  );
}

export default App;

// function DashboardWithSidebar() {
//   return (
//     <>
//       <Sidebare>
//       <Router>
//       <Routes>
//         <Route path="/Dash" element={<Sidebar />} />
//         <Route path="/Produis" element={<Produit />} />
//         {/* Add other Dashboard-related routes here */}
//       </Routes>
//       </Router>
//     </Sidebare>
//     </>
//   );
// }
