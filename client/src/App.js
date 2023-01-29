import React from 'react'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './pages/Home.js'; 
import Morning from './pages/Morning.js'; 
import Laundry from './pages/Laundry.js';

//Components for testing 
import ChoiceCard from './components/ChoiceCard.js';
import ScenarioCard from './components/ScenarioCard.js';
import CoinCard from './components/CoinCard.js';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/morning" element={<Morning />} />
            <Route path="/laundry" element={<Laundry />} />

            <Route path="/choiceCard" element={<ChoiceCard />} />
            <Route path="/scenarioCard" element={<ScenarioCard />} />
            <Route path="/coinCard" element={<CoinCard />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
