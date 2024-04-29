import React from "react";
import Login from "./components/adminConnexion/Connexion";
import Inscription from "./components/adminInscription/Inscription";
import InterfaceAdmin from "./components/interfaceAdmin/InterfaceAdmin";
import IsLogin from "./pages/admin/isLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/clients/panier/Panier";
import CheckoutPage from "./pages/clients/checkout/Checkout";
import Accueil from "./pages/clients/accueil/Accueil";
import Produit from "./components/produis/Produis";
import Sidebare from "./components/sidebare/Sidebare";
import AboutPage from "./pages/clients/apropos/Apropos";
import ContactPage from "./pages/clients/contact/Contact";
import Sidebar from "./components/sidebare/Sidebare";
import DashboardWithSidebar from "./pages/dashboard/DasboardRoutes";
import ContentSidebar from "./components/sidebare/ContentSidebar";

function App() {
  return (
    <div className="App">
      {/* <IsLogin/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/Admin" element={<InterfaceAdmin />} />
          <Route path="/Dashboard" element={<IsLogin />}></Route>
          <Route path="/panier" element={<ShoppingCart />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          {/* <Route path="/Dashboard" element={<ContentSidebar/>}></Route> */}
          <Route path="/Accueil" element={<Accueil />}></Route>
          <Route path="/Apropos" element={<AboutPage />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route path="/Dash" element={<IsLogin />} />
          <Route path="/produis" element={<Produit/>} />
          {/* <Route path="/Dashboard" element={<DashboardWithSidebar />} /> */}
        </Routes>

        {/* <Sidebare>
          <Routes>
          <Route path="/Dash" element={<IsLogin/>}></Route>
          <Route path="/produis" element={<Produit/>}></Route>
            {/* <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/comment" element={<Comment />} /> */}
            {/* <Route path="/about" element={<About />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productList" element={<ProductList />} /> */}
          {/* </Routes>
        </Sidebare> */}
      </Router> 
            {/* <DashboardWithSidebar/> */}
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
