import React from 'react'; 

import ScenarioPage from '../components/ScenarioPage';

import MorningOutside from '../images/morning.png'; 

function Morning ({walletAmount, changeWalletAmount}){

    return(
        <div>
            <ScenarioPage
                title="EARLY IN THE MORNING. "
                scenario="I slept pretty badly last night, but today is a new day. My body and hair are starting to smell bad, and my clothes are so sweaty from being worn all the time. It’s so early, how should I freshen up?"
                image={MorningOutside}
                choice1="Shower"
                route1="/shower"
                coinValue1="-10"
                choice2="Wash clothes"
                route2="/laundry"
                coinValue2="-5"
                            walletAmount={walletAmount}
                            changeWalletAmount={changeWalletAmount}
            />
        </div>
    )
}

export default Morning; 