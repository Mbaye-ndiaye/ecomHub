<<<<<<< HEAD
import React from 'react';
import Login from './components/adminConnexion/Connexion';
import Inscription from './components/adminInscription/Inscription';
import InterfaceAdmin from './components/interfaceAdmin/InterfaceAdmin';
import IsLogin from './pages/admin/isLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingCart from './pages/clients/panier/Panier';
import CheckoutPage from './pages/clients/checkout/Checkout';
import Accueil from './pages/clients/accueil/Accueil';
=======
import React from "react";
import Login from "./components/adminConnexion/Connexion";
import Inscription from "./components/adminInscription/Inscription";
import InterfaceAdmin from "./components/interfaceAdmin/InterfaceAdmin";
import IsLogin from "./pages/admin/isLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/clients/panier/Panier";
import CheckoutPage from "./pages/clients/checkout/Checkout";
import Accueil from "./pages/clients/accueil/Accueil";
import GlobalContextProvider from './utils/context/GlobalContext';
>>>>>>> cf0c4d5ef035070e55fbbb72e3a58ce7df53d414

import BoutiqueCategorie from './pages/clients/boutiqueCategorie/BoutiqueCategorie';

<<<<<<< HEAD
import Produit from './components/produis/Produis';
import Sidebare from './components/sidebare/Sidebare';

import AboutPage from './pages/clients/apropos/Apropos';
import ContactPage from './pages/clients/contact/Contact';

function App() {
	return (
		<div className="App">
			{/* <IsLogin/> */}
			<Router>
				<Routes>
					<Route path="/connexion" element={<Login />} />
					<Route path="inscription" element={<Inscription />} />
					<Route path="/Admin" element={<InterfaceAdmin />} />
					<Route path="/" element={<IsLogin />}></Route>
					<Route path="/panier" element={<ShoppingCart />}></Route>
					<Route path="/checkout" element={<CheckoutPage />}></Route>
					<Route path="/Dashboard" element={<IsLogin />}></Route>
					<Route path="/panier" element={<ShoppingCart />}></Route>
					<Route path="/checkout" element={<CheckoutPage />}></Route>
					{/* <Route path="/Dashboard" element={<ContentSidebar/>}></Route> */}
					<Route path="/Accueil" element={<Accueil />}></Route>
					<Route path="/Apropos" element={<AboutPage />}></Route>
					<Route path="/Contact" element={<ContactPage />}></Route>
					<Route path="/Dash" element={<IsLogin />} />
					<Route path="/produis" element={<Produit />} />
					<Route
						path="/BoutiqueCategorie"
						element={<BoutiqueCategorie />}
					></Route>
					{/* <Route path="/Dashboard" element={<DashboardWithSidebar />} /> */}
				</Routes>
			</Router>
		</div>
	);
=======
import Produit from "./components/produits/Produis";
import Sidebare from "./components/sidebare/Sidebare";

import AboutPage from "./pages/clients/apropos/Apropos";
import ContactPage from "./pages/clients/contact/Contact";
import Categorie from "./components/categories/Categorie";
import Commande  from "./components/commandes/Commande";
import ProduitContextProvider from "./utils/context/ProduitsContext";


function App() {
  return (
    <div className="App">
      {/* <IsLogin/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/Admin" element={<InterfaceAdmin />} />
          <Route path="/" element={<IsLogin />}></Route>
          <Route path="/panier" element={<ShoppingCart />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/Dashboard" element={<IsLogin />}></Route>
          <Route path="/panier" element={<ShoppingCart />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          {/* <Route path="/Dashboard" element={<ContentSidebar/>}></Route> */}
          <Route path="/Accueil" element={<Accueil />}></Route>
          <Route path="/Apropos" element={<AboutPage />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route
            path="/BoutiqueCategorie"
            element={<BoutiqueCategorie />}
          ></Route>
          {/* <Route path="/Dashboard" element={<DashboardWithSidebar />} /> */}
        </Routes>
      <GlobalContextProvider>
        <ProduitContextProvider>
          <Routes>
          <Route path="/Dash" element={<IsLogin/>}></Route>
          <Route path="/produits" element={<Produit/>}></Route>
          <Route path="/categories" element={<Categorie/>}></Route>
          <Route path="/commandes" element={<Commande/>}></Route>



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
>>>>>>> cf0c4d5ef035070e55fbbb72e3a58ce7df53d414
}

export default App;
