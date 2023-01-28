import React from 'react'; 

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 

import ScenarioCard from '../components/ScenarioCard';
import ChoiceCard from '../components/ChoiceCard';

import PublicBath from '../images/bathroom.jpg'; 

function Morning (){

    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
            <Grid 
            container 
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
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
                    <Grid 
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                        <Grid item>
                            <ChoiceCard 
                            choice="Shower"
                            route="/shower"
                            />
                        </Grid>
                        <Grid item>
                            <ChoiceCard 
                            choice="Wash clothes"
                            route="/laundromat"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Morning; 