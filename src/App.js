import React from "react";
import Login from "./components/adminConnexion/Connexion";
import Inscription from "./components/adminInscription/Inscription";
import InterfaceAdmin from "./components/interfaceAdmin/InterfaceAdmin";
import Home from "./pages/clients/Home";
import IsLogin from "./pages/admin/isLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/clients/panier/Panier";
import CheckoutPage from "./pages/clients/checkout/Checkout";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/Admin" element={<InterfaceAdmin />} />
          {/* <Route path="/" element={<IsLogin />}></Route> */}
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/panier" element={<ShoppingCart />}></Route>
          <Route path="/Checkout" element={<CheckoutPage />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
