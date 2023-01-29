import React from 'react'; 

import ResultsPage from '../components/ResultsPage';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 

import ScenarioCard from '../components/ScenarioCard';
import ChoiceCard from '../components/ChoiceCard';

import SleepImage from '../images/night_sleep.png'; 

function Sleep () {
    return(
        <div>
            <ResultsPage 
                title="SKID ROW."
                results="I struggled to fall asleep because I was afraid of someone stealing my things or worse, assaulting me. LA is so loud, and smelly with all the pollution."
                image={SleepImage}
                nextRoute="/end"
            />
        </div>
    )
}

export default Sleep; 