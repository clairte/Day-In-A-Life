import React from 'react'; 

import ResultsPage from '../components/ResultsPage';

import DaySteal from '../images/day_steal.png'; 

function Steal (){

    return(
        <div>
            <ResultsPage
                title="STEALING ESSENTIALS."
                results="Security called the police on me for just being in the store! I left empty handed. Even if I had enough money to pay, they might not have believed it was real currency."
                image={DaySteal}
                nextRoute="/night"
                coinValue="0"
            />
        </div>
    )
}

export default Steal; 