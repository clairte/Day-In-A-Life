import React from 'react'; 
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Home from './pages/Home.js'; 
import Start from './pages/Start.js'; 

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/start" element={<Start />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
