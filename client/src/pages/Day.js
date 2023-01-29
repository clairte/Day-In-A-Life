import React from 'react'; 

import ScenarioPage from '../components/ScenarioPage';

import DayStreet from '../images/day.png'; 

function Day (){

    return(
        <div>
            <ScenarioPage
                title="A DAY IN THE LIFE OF AN UNHOUSED. "
                scenario="My day is already starting off badly. Surviving on the street is like a full time job, and my only realistic options are to either steal or panhandle. LA county maintenance and police trashed my things, so how should I replace them all?"
                image={DayStreet}
                choice1="Panhandle"
                route1="/panhandle"
                choice2="Steal"
                route2="/steal"
                coinValue="0"
            />
        </div>
    )
}

export default Day; 