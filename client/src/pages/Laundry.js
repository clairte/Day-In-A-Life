import React from 'react'; 

import ResultsPage from '../components/ResultsPage';

import LaundryRoom from '../images/laundry.jpg'; 

function Laundry () {
    return(
        <div>
            <ResultsPage 
                title="LAUNDRY ROOM"
                results="I don’t have enough cash on me to pay for using the laundry machine, and I don’t have any detergent either. I guess I just won’t wash my clothes today. Subtract 10 from wallet."
                image={LaundryRoom}
                nextRoute="/day"
                coinValue="5"
            />
        </div>
    )
}

export default Laundry; 