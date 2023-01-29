import React from 'react'; 

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 

import ScenarioCard from '../components/ScenarioCard';
import ChoiceCard from '../components/ChoiceCard';
import CoinCard from './CoinCard';

function ScenarioPage ({title, scenario, image, choice1, route1, choice2, route2, coinValue}){

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
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <ScenarioCard 
                    text={scenario}
                    image={image}
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
                            choice={choice1}
                            route={route1}
                            />
                        </Grid>
                        <Grid item>
                            <ChoiceCard 
                            choice={choice2}
                            route={route2}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <CoinCard value={coinValue} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ScenarioPage; 