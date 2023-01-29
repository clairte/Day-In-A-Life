import React from 'react'; 

import ResultsPage from '../components/ResultsPage';

import LaundryRoom from '../images/laundry.jpg'; 

function Laundry ({walletAmount, changeWalletAmount}) {
    return(
        <div>
            <ResultsPage 
                title="LAUNDRY ROOM."
                results="I didn’t have enough money to pay for detergent, so my clothes are still stained. At least they don’t smell as bad."
                image={LaundryRoom}
                nextRoute="/day"
                walletAmount={walletAmount}
                changeWalletAmount={changeWalletAmount}
            />
        </div>
    )
}

export default Laundry; 
