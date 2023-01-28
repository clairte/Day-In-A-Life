import React from 'react'; 

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ScenarioCard from '../components/ScenarioCard';
import ChoiceCard from '../components/ChoiceCard';

import PublicBath from '../images/publicBath.jpg'; 

function Morning (){

    return(
        <Grid>
            <Grid item>
                <Typography variant="h2">
                    EARLY IN THE MORNING. 
                </Typography>
            </Grid>
            <Grid item>
                <ScenarioCard 
                text="Michelle: I slept pretty badly last night, but today is a new day. My body and hair are starting to smell bad, and my clothes are so sweaty from being worn all the time. It’s so early, how should I freshen up?"
                image={PublicBath}
                />
            </Grid>
            <Grid item>
                <ChoiceCard 
                choice1="Shower at the public facilities"
                choice2="Wash my clothes at the laundromat"
                route1="/shower"
                route2="/laundromat"
                />
            </Grid>
        </Grid>
    )
}

export default Morning; 