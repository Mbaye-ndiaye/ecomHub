
import React from "react";
import Login from "./components/adminConnexion/Connexion";
import Inscription from "./components/adminInscription/Inscription";
import InterfaceAdmin from "./components/interfaceAdmin/InterfaceAdmin";

import IsLogin from "./pages/admin/isLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/clients/accueil/Accueil";
import BoutiqueCategorie from "./pages/clients/boutiqueCategorie/BoutiqueCategorie";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/Admin" element={<InterfaceAdmin />} />
          <Route path="/Dashboard" element={<IsLogin />}></Route>
          <Route path="/Accueil" element={<Accueil />}></Route>
          <Route path="/Boutique" element={<BoutiqueCategorie />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
