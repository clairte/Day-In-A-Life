import React from 'react'; 

import ResultsPage from '../components/ResultsPage';

import PublicBath from '../images/bathroom.jpg';  

function Shower () {
    return(
        <div>
            <ResultsPage 
                title="PUBLIC BATHROOM."
                results="Where did my cell phone go? I only turned around for a moment. Why would I come back to a public place where people judge me and steal from me?"
                image={PublicBath}
                nextRoute="/day"
                coinValue="0"
            />
        </div>
    )
}

export default Shower; 