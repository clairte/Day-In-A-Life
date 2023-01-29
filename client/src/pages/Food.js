import React from 'react'; 

import ResultsPage from '../components/ResultsPage';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 

import ScenarioCard from '../components/ScenarioCard';
import ChoiceCard from '../components/ChoiceCard';

import FoodImage from '../images/night_food.png'; 

function Food () {
    return(
        <div>
            <ResultsPage 
                title="RELIGIOUS CENTER."
                results="They took one look at me and refused to serve. So much for “love thy neighbor”. I had to beg for food, and they still called me slurs! I found cheap food at the convenience store."
                image={FoodImage}
                nextRoute="/end"
                coinValue="10"
            />
        </div>
    )
}

export default Food; 