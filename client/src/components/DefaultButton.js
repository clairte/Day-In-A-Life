import React from 'react'; 

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 


function DefaultButton({text, route}) {
    return (
        <div>
            <Button 
            variant = "outlined"
            component={Link} to={route}
            size="small"
            style={textStyle}>
            {text} 
            </Button> 
        </div>
    )
}

const textStyle = {
    fontFamily: 'Roboto, sans-serif'
}

export default DefaultButton; 