import React from 'react'; 

import ScenarioPage from '../components/ScenarioPage';

import NightImage from '../images/night.png'; 

function Night (){

    return(
        <div>
            <ScenarioPage
                title="NIGHT ON THE STREET. "
                scenario="Michelle: All day, I’ve done nothing except grind for money. I’m so hungry. The church food pantry is nearby, but I’m also so sleepy from trying to survive on so little. It’s so late, how should I end my day?"
                image={NightImage}
                choice1="Food"
                route1="/food"
                choice2="Sleep"
                route2="/sleep"
                coinValue="10"
            />
        </div>
    )
}

export default Night; 