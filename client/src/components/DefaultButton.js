import React from 'react'; 

import Button from '@mui/material/Button';


function DefaultButton({text, route, coinValue}) {

    const handleClick = (e) => { 
        e.preventDefault();
        window.location.href = route;
        let finalValue = JSON.parse(sessionStorage.getItem("Money")) + parseInt(coinValue);
        sessionStorage.setItem("Money", JSON.stringify(finalValue)); 
    }

    return (
        <div>
                <Button 
                size="small"
                onClick= {handleClick}
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