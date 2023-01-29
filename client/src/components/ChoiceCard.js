import React from 'react'; 

import Card from '@mui/material/Card';
import Box from '@mui/material/Box'; 

import DefaultButton from './DefaultButton';


function ChoiceCard({choice, route, moneyValue}){

    console.log(moneyValue);

    return(
        <Card 
        sx={{ display: 'flex' }}>
            <Box 
            sx={{ display: 'flex', alignItems: 'center', p: 1}}>
                <DefaultButton text={choice} route={route} coinValue={moneyValue}/> 
            </Box>
        </Card>
    )
}

export default ChoiceCard; 