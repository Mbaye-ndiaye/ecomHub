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
import ShopDetailPage from "./pages/admin/pageCreerShop/ShopDetialPage";
import DetailCard from "./components/clients/details/DetailCard";
import FormProvider from "./utils/context/FormShopContext";
import BoutiqueCategorie from "./pages/clients/boutiqueCategorie/BoutiqueCategorie";

function App() {
  return (
    <div className="App">
      <Router>
        <FormProvider>
          <Routes>
            <Route path="/connexion" element={<Login />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="/" element={<InterfaceAdmin />} />
            <Route path="/panier" element={<ShoppingCart />}></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route path="/accueil/:name" element={<Accueil />}></Route>
            <Route path="/apropos" element={<AboutPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/profile" element={<FormProfilUser />} />
            <Route
              path="/boutiqueCategorie"
              element={<BoutiqueCategorie />}
            ></Route>
            <Route path="/detailCard" element={<DetailCard />}></Route>
            <Route path="/creeShop" element={<FormsShop />}></Route>
            <Route path="/Accueil" element={<Accueil />}></Route>
            <Route path="/Apropos" element={<AboutPage />}></Route>
            <Route path="/Contact" element={<ContactPage />}></Route>
            <Route path="/Boutique" element={<BoutiqueUser />} />
            <Route path="/ContactEcom" element={<ContactEcom />} />
            <Route path="/AproposEcom" element={<AproposEcom />} />
            <Route path="/ShopDetail" element={<ShopDetailPage />} />
            <Route path="/*" element={<DashboardWithSidebar />} />
          </Routes>
        </FormProvider>
      </Router>
    </div>
  );
}

export default App;
