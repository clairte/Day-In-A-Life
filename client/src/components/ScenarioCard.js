import React from 'react'; 

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ScenarioCard ({text, image}) {
    return (
        <Card sx={{ maxWidth: 600}}>
            <CardMedia
                component="img"
                alt="shower"
                image={image}
                height="300"
                width="500"
             />
             <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {text}
                 </Typography>
             </CardContent>
        </Card>
    )
}

export default ScenarioCard;