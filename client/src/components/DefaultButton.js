import React from 'react'; 

import Button from '@mui/material/Button';


function DefaultButton({walletAmount, changeWalletAmount, text, route, coinValue}) {

    const handleClick = (e) => { 
        e.preventDefault();
        changeWalletAmount(walletAmount + Number(coinValue));
        window.location.href = route; 
    }

    return (
        <div>
                <Button 
                size="small"
                onClick={handleClick}
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