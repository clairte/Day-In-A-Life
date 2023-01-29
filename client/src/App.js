import React from 'react'; 
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Home from './pages/Home.js'; 
import Morning from './pages/Morning.js'; 
import Shower from './pages/Shower.js'; 
import Laundry from './pages/Laundry.js';
import Day from './pages/Day.js';
import Panhandle from './pages/Panhandle.js';
import Steal from './pages/Steal.js';
import Night from './pages/Night.js';
import Food from './pages/Food.js';
import Sleep from './pages/Sleep.js';
import End from './pages/End.js';

//Components for testing 
import ChoiceCard from './components/ChoiceCard.js';
import ScenarioCard from './components/ScenarioCard.js';
import CoinCard from './components/CoinCard.js';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/morning" element={<Morning />} />
            <Route path="/shower" element={<Shower />} />
            <Route path="/laundry" element={<Laundry />} />
            <Route path="/day" element={<Day />} />
            <Route path="/panhandle" element={<Panhandle />} />
            <Route path="/steal" element={<Steal />} />
            <Route path="/night" element={<Night />} />
            <Route path="/food" element={<Food />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/end" element={<End />} />

            <Route path="/choiceCard" element={<ChoiceCard />} />
            <Route path="/scenarioCard" element={<ScenarioCard />} />
            <Route path="/coinCard" element={<CoinCard />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
