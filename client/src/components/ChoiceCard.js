import React from 'react'; 

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import DefaultButton from './DefaultButton';


function ChoiceCard(){
    return(
        <Card sx={{ maxWidth: 345}}>
            <DefaultButton text="Choice 1" route="/choice1page" /> 
            <DefaultButton text="Choice 2" route="/choice2page" /> 
        </Card>
    )
}

export default ChoiceCard; 