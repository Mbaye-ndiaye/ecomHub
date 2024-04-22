import React from "react";
import Login from "./components/adminConnexion/Connexion";
import Inscription from "./components/adminInscription/Inscription";
import InterfaceAdmin from "./components/interfaceAdmin/InterfaceAdmin";
import IsLogin from "./pages/admin/isLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/clients/Home";





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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
