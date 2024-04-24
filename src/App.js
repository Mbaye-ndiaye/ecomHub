import Login from './components/adminConnexion/Connexion';
import Inscription from './components/adminInscription/Inscription';
import InterfaceAdmin from './components/interfaceAdmin/InterfaceAdmin';
import Home from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/Admin" element={<InterfaceAdmin />} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
