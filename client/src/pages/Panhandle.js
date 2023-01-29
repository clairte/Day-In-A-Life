import React from 'react'; 

import ResultsPage from '../components/ResultsPage';

import DayPanhandle from '../images/day_panhandle.png'; 

function Panhandle ({walletAmount, changeWalletAmount}){

    return(
        <div>
            <ResultsPage
                title="PANHANDLING ON THE STREET."
                results="I reused someone else’s sign asking for donations to a “single mother”. I don’t have kids. I got some racist sneers, but I got some cash too, at least."
                image={DayPanhandle}
                nextRoute="/night"
                coinValue="0"
                walletAmount={walletAmount}
                changeWalletAmount={changeWalletAmount}
            />
        </div>
    )
}

export default Panhandle; 