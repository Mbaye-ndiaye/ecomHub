import React from "react";
import Login from "./components/adminConnexion/Connexion";
import Inscription from "./components/adminInscription/Inscription";
import InterfaceAdmin from "./components/interfaceAdmin/InterfaceAdmin";
import IsLogin from "./pages/admin/isLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/clients/panier/Panier";
import CheckoutPage from "./pages/clients/checkout/Checkout";
import Accueil from "./pages/clients/accueil/Accueil";
import BoutiqueCategorie from "./pages/clients/boutiqueCategorie/BoutiqueCategorie";
import GlobalContextProvider from "./utils/context/GlobalContext";
import Sidebare from "./components/sidebare/Sidebare";
import AboutPage from "./pages/clients/apropos/Apropos";
import ContactPage from "./pages/clients/contact/Contact";
import FormProfilUser from "./pages/admin/profilUser/FormProfilUser";
import Categorie from "./components/categories/Categorie";
import Commande from "./components/commandes/Commande";
import ProduitContextProvider from "./utils/context/ProduitsContext";
import Produis from "./components/produits/Produis";
import DetailCard from "./components/clients/details/DetailCard";
import FormProvider from "./utils/context/FormShopContext";

function App() {
  return (
    <div className="App">
      {/* <IsLogin/> */}
      <Router>
        <FormProvider>
        <Routes>
          <Route path="/connexion" element={<Login />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/" element={<InterfaceAdmin />} />
          <Route path="/" element={<IsLogin />}></Route>
          <Route path="/panier" element={<ShoppingCart />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/Dashboard" element={<IsLogin />}></Route>
          <Route path="/panier" element={<ShoppingCart />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          {/* <Route path="/Dashboard" element={<ContentSidebar/>}></Route> */}
          <Route path="/accueil/:name" element={<Accueil />}></Route>
          <Route path="/apropos" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/profile" element={<FormProfilUser />} />

          <Route
            path="/boutiqueCategorie"
            element={<BoutiqueCategorie />}
          ></Route>

          <Route path="/detailCard" element={<DetailCard />}></Route>
          {/* <Route path="/Dashboard" element={<DashboardWithSidebar />} /> */}
        </Routes>
          </FormProvider>
        <GlobalContextProvider>
          <ProduitContextProvider>
            <Routes>
              <Route path="/dash" element={<IsLogin />}></Route>
              <Route path="/produits" element={<Produis />}></Route>
              <Route path="/categories" element={<Categorie />}></Route>
              <Route path="/commandes" element={<Commande />}></Route>

              {/* <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/comment" element={<Comment />} /> */}
              {/* <Route path="/about" element={<About />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productList" element={<ProductList />} /> */}
            </Routes>
          </ProduitContextProvider>
        </GlobalContextProvider>
      </Router>
    </div>
  );
}

export default App;
