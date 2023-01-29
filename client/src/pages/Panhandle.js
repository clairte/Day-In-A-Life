import React from 'react'; 

import ResultsPage from '../components/ScenarioPage';

import DayPanhandle from '../images/day_panhandle.png'; 

function Panhandle (){

    return(
        <div>
            <ResultsPage
                title="PANHANDLING ON THE STREET."
                scenario="I reused someone else’s sign asking for donations to a “single mother”. I don’t have kids. I got some racist sneers, but I got some cash too, at least."
                image={DayPanhandle}
                nextRoute="/night"
                coinValue="10"
            />
        </div>
    )
}

export default Panhandle; 