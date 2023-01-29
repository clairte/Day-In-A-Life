import React from 'react'; 

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 

import ScenarioCard from '../components/ScenarioCard';
import ChoiceCard from '../components/ChoiceCard';

import EndImage from '../images/end.png'; 

function End ({walletAmount, changeWalletAmount}) {
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
                        END.
                    </Typography>
                </Grid>
                <Grid item>
                    <div style={{ whiteSpace: "pre-line" }}>
                    <ScenarioCard 
                    text= {`How much money did you end up with? You’re probably in the negatives, and that’s my reality every day. It will be morning again soon, and I’ll have to repeat today every day. But, you can help me change that. The developers will donate $1 to a charity for unhoused people for every time you play.\n"Home was never a dream for homeless people as they used to have their homes. Living in a home was their reality. Now we need to help them to find the lost reality – again."\n– Munia Khan`}
                    image={EndImage}
                    />
                    </div>
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
                            choice="Return to Home"
                            route="/"
                            walletAmount={walletAmount}
                            changeWalletAmount={changeWalletAmount}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
    
}

export default End; 