import React from 'react'; 

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 

import ScenarioCard from '../components/ScenarioCard';
import ChoiceCard from '../components/ChoiceCard';
import CoinCard from './CoinCard';

function ResultsPage ({walletAmount, changeWalletAmount, title, results, image, nextRoute, coinValue}) {
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
                            moneyValue="0"
                            walletAmount={walletAmount}
                            changeWalletAmount={changeWalletAmount}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <CoinCard
                            walletAmount={walletAmount}
                            changeWalletAmount={changeWalletAmount}
                                
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ResultsPage; 