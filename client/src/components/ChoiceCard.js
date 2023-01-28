import React from 'react'; 

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import DefaultButton from './DefaultButton';


function ChoiceCard({choice1, choice2, route1, route2}){
    return(
        <Card sx={{ maxWidth: 345}}>
            <DefaultButton text={choice1} route={route1} /> 
            <DefaultButton text={choice2} route={route2} /> 
        </Card>
    )
}

export default ChoiceCard; 