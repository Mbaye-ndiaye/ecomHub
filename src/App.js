import React from "react";
import Login from "./components/adminConnexion/Connexion";
import Inscription from "./components/adminInscription/Inscription";
import InterfaceAdmin from "./components/interfaceAdmin/InterfaceAdmin";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/clients/checkout/Checkout";
import Accueil from "./pages/clients/accueil/Accueil";
import AboutPage from "./pages/clients/apropos/Apropos";
import ContactPage from "./pages/clients/contact/Contact";
import DashboardWithSidebar from "./pages/dashboard/DasboardRoutes";
import BoutiqueUser from "./components/navbarAdmin/naveLink/BoutiqueUser";
import ContactEcom from "./components/navbarAdmin/naveLink/ContactEcom";
import AproposEcom from "./components/navbarAdmin/naveLink/AproposEcom";
import FormsShop from "./pages/admin/pageCreerShop/CreerShop";
import ShopDetailPage from "./pages/admin/pageCreerShop/ShopDetialPage";
import DetailCard from "./components/clients/details/DetailCard";
import FormProvider from "./utils/context/FormShopContext";
import BoutiqueCategorie from "./pages/clients/boutiqueCategorie/BoutiqueCategorie";
import FormProfilUser from "./pages/admin/profilUser/FormProfilUser";
import GlobalContextProvider from "./utils/context/GlobalContext";
import CategorieContextProvider from "./utils/context/CategorieContext";
import PanierContextProvider from "./utils/context/PanierContext";
import Cart from "./pages/clients/panier/Cart";


function App() {
  return (
    <div className="App">
        <PanierContextProvider>
      <FormProvider>
        <Routes>
          <Route path="/connexion" element={<Login />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/" element={<InterfaceAdmin />} />
          <Route path="/panier/:name" element={<Cart />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/accueil/:name" element={<Accueil />}></Route>
          <Route path="/apropos" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route
            path="/boutiqueCategorie"
            element={<BoutiqueCategorie />}
          ></Route>
          <Route
            path="/dashboard/FormProfilUser"
            element={<FormProfilUser />}
          />
          <Route path="/detailCard" element={<DetailCard />}></Route>
          <Route path="/creeShop" element={<FormsShop />}></Route>
          <Route path="/Accueil" element={<Accueil />}></Route>
          <Route path="/Apropos/:name" element={<AboutPage />}></Route>
          <Route path="/Contact/:name" element={<ContactPage />}></Route>
          <Route path="/boutique" element={<BoutiqueUser />} />
          <Route path="/ContactEcom" element={<ContactEcom />} />
          <Route path="/AproposEcom" element={<AproposEcom />} />
          <Route path="/ShopDetail" element={<ShopDetailPage />} />
          <Route path="/*" element={<DashboardWithSidebar />} />
        </Routes>
      </FormProvider>
        </PanierContextProvider>
      {/* </CategorieContextProvider>
        </GlobalContextProvider> */}
    </div>
  );
}

export default App;
