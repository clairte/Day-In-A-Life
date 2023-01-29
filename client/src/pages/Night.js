import React from 'react'; 

import ScenarioPage from '../components/ScenarioPage';

import NightImage from '../images/night.png'; 

function Night ({walletAmount, changeWalletAmount}){

    return(
        <div>
            <ScenarioPage
                title="NIGHT ON THE STREET. "
                scenario="Michelle: All day, I’ve done nothing except grind for money. I’m so hungry. The church food pantry is nearby, but I’m also so sleepy from trying to survive on so little. It’s so late, how should I end my day?"
                image={NightImage}
                choice1="Food"
                route1="/food"
                coinValue1="-5"
                choice2="Sleep"
                route2="/sleep"
                coinValue2="-5"
                walletAmount={walletAmount}
                changeWalletAmount={changeWalletAmount}
            />
        </div>
    )
}

export default Night; 