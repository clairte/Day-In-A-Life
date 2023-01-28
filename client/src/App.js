import React from 'react'; 
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Home from './pages/Home.js'; 
import Morning from './pages/Morning.js'; 

//Components for testing 
import ChoiceCard from './components/ChoiceCard.js';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/morning" element={<Morning />} />

            <Route path="/choiceCard" element={<ChoiceCard />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;