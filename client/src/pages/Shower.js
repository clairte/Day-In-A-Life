import React from 'react'; 

import ResultsPage from '../components/ResultsPage';

import PublicBath from '../images/bathroom.jpg';  

function Shower ({walletAmount, changeWalletAmount}) {
    return(
        <div>
            <ResultsPage 
                title="PUBLIC BATHROOM."
                results={"Where did my cell phone go? I only turned around for a moment. Why would I come back to a public place where people judge me and steal from me?\n Lost 10 coins."}
                image={PublicBath}
                nextRoute="/day"
                coinValue="5"
                            walletAmount={walletAmount}
                            changeWalletAmount={changeWalletAmount}
            />
        </div>
    )
}

export default Shower; 