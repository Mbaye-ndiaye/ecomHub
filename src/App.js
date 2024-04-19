import React from 'react';
import IsLogin from './pages/admin/isLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<IsLogin />}></Route>
        </Routes>
      </Router>
      {/* <IsLogin /> */}
    </div>
  );
}

export default App;
