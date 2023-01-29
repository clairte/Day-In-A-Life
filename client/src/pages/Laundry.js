import React from 'react'; 

import ResultsPage from '../components/ResultsPage';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 

import ScenarioCard from '../components/ScenarioCard';
import ChoiceCard from '../components/ChoiceCard';

import LaundryRoom from '../images/laundry.jpg'; 

function Laundry () {
    return(
        <div>
            <ResultsPage 
                title="LAUNDRY ROOM"
                results="I don’t have cash on me to pay for using the laundry machine, and I don’t have any detergent either. I guess I just won’t wash my clothes today. Subtract 10 from wallet."
                image={LaundryRoom}
                nextRoute="/day"
            />
        </div>
    )
}

export default Laundry; 