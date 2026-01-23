import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React from "react";

const BasicCard = ({header, content}) => {
    return (
        <Card>
            { header }
            <CardContent>
                { content }
            </CardContent>
        </Card>

    )
}

export default BasicCard
