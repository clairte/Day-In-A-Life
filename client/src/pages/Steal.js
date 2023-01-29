import React from 'react'; 

import ResultsPage from '../components/ResultsPage';

import DaySteal from '../images/day_steal.png'; 

function Steal ({walletAmount, changeWalletAmount}){

    return(
        <div>
            <ResultsPage
                title="STEALING ESSENTIALS."
                results={"Security called the police on me for just being in the store! I left empty handed. Even if I had enough money to pay, they might not have believed it was real currency.\n No coins gained or lost."}
                image={DaySteal}
                nextRoute="/night"
                coinValue="0"
                walletAmount={walletAmount}
                changeWalletAmount={changeWalletAmount}
            />
        </div>
    )
}

export default Steal; 