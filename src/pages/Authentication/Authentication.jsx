import React from 'react'
import Grid from '@mui/material/Grid'
import CommonButton from "../../components/common/CommonButton/CommonButton.jsx";

const Authentication = () => {
    const buttonStyles = {
        fontWeight: 600,
        fontSize: '0.875rem',
        textTransform: 'capitalize',
        borderRadius: 2.5,

        '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
                backgroundColor: '#006db3',
            },
        },

        '&.MuiButton-outlined': {
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    }

    return (
        <Grid item xs={8} md={2} styles={{backgroundColor: '009be5'}}>
            This is authenticaion page.
            <CommonButton variant="contained" size="large" sx={buttonStyles} >
                Add user
            </CommonButton>
            <CommonButton variant="outlined" size="large" sx={buttonStyles} >
                Web setup
            </CommonButton>
            <CommonButton variant='contained' color="primary">
                Primary
            </CommonButton>
        </Grid>
    )
}

export default Authentication
