import React from 'react'; 
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Home from './pages/Home.js'; 
import Morning from './pages/Morning.js'; 
import Laundry from './pages/Laundry.js';
import Night from './pages/Night.js';
import Food from './pages/Food.js';
import Sleep from './pages/Sleep.js';

//Components for testing 
import ChoiceCard from './components/ChoiceCard.js';
import ScenarioCard from './components/ScenarioCard.js';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/morning" element={<Morning />} />
            <Route path="/laundry" element={<Laundry />} />
            <Route path="/night" element={<Night />} />
            <Route path="/food" element={<Food />} />
            <Route path="/sleep" element={<Sleep />} />

            <Route path="/choiceCard" element={<ChoiceCard />} />
            <Route path="/scenarioCard" element={<ScenarioCard />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
