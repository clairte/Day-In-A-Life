import React from 'react'; 

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 

import ScenarioCard from '../components/ScenarioCard';
import ChoiceCard from '../components/ChoiceCard';

import HomeImage from '../images/home.png';

function Home() {

    return (
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
                        HOMELESS SIMULATOR.
                    </Typography>
                    <Typography variant="subtitle1">
                        Anime themed. 
                    </Typography>
                </Grid>
                <Grid item>
                    <ScenarioCard 
                    text="My name is Michelle. I’m 34 years old, living in LA county. Really I’m an Orange County native, but I’m not welcome there anymore. When I started going by “Michelle”, my family cut contact with me. Getting back on your feet is tough when you don’t have a support system. There are millions of us here, but it’s definitely not a safe place. This is what a day in my life looks like, starting with 10 coins."
                    image={HomeImage}
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
                            choice="Begin"
                            route="/morning"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home; 