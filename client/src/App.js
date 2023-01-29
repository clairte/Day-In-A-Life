import React, { useEffect } from 'react'; 
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

const defaultWalletAmount = 0;

function App() {

  const [walletAmount, setWalletAmount] = React.useState(defaultWalletAmount);

  useEffect(() => {
    let walletString = sessionStorage.getItem("Money");
    
    if (typeof walletString === "string") {
        if (walletString !== "NaN") {
            setWalletAmount(Number(walletString));
        }
    }
  });

  const changeWalletAmount = (walletValue) => {
    setWalletAmount(walletValue);
    sessionStorage.setItem("Money", walletValue);
  }

  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
            <Route path="/morning" element={<Morning walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
            <Route path="/shower" element={<Shower walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
            <Route path="/laundry" element={<Laundry walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
            <Route path="/day" element={<Day walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
            <Route path="/panhandle" element={<Panhandle walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
            <Route path="/steal" element={<Steal walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
            <Route path="/night" element={<Night walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
            <Route path="/food" element={<Food walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
            <Route path="/sleep" element={<Sleep walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
            <Route path="/end" element={<End walletAmount={walletAmount} changeWalletAmount={changeWalletAmount} />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
