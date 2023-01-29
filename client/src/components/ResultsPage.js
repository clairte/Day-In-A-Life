import React from 'react'; 

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 

import ScenarioCard from '../components/ScenarioCard';
import ChoiceCard from '../components/ChoiceCard';

function ResultsPage ({title, results, image, nextRoute}) {
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
                    text={results}
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
                            choice="next"
                            route={nextRoute}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ResultsPage; 