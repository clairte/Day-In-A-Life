import React from 'react'; 

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Wallet from '../images/wallet.png'; 

function CoinCard ({walletAmount, changeWalletAmount}) {

    

    return(
        <Card 
        sx={{ display:'flex'}} 
        >
            <CardMedia
                component="img"
                alt="shower"
                image={Wallet}
                height="100"
                width="200"
            />
            <CardContent sx={{ flex: '1 0 auto', p:'2' }}>
                <Typography variant="body1">
                    {walletAmount}
                 </Typography>
            </CardContent>
        </Card>
    )
}

export default CoinCard; 