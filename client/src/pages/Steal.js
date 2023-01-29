import React from 'react'; 

import ResultsPage from '../components/ScenarioPage';

import DaySteal from '../images/day_steal.png'; 

function Steal (){

    return(
        <div>
            <ResultsPage
                title="PANHANDLING ON THE STREET."
                scenario="I reused someone else’s sign asking for donations to a “single mother”. I don’t have kids. I got some racist sneers, but I got some cash too, at least."
                image={DaySteal}
                nextRoute="/night"
                coinValue="0"
            />
        </div>
    )
}

export default Steal; 