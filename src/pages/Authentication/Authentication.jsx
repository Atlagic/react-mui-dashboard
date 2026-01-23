import React from 'react'
import Grid from '@mui/material/Grid'
import BasicCard from "../../components/common/BasicCard/BasicCard.jsx";
import SearchBar from "../../components/common/SearchBar/SearchBar.jsx";
import CommonButton from "../../components/common/CommonButton/CommonButton.jsx";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from '@mui/icons-material/Refresh';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { cardHeaderStyles } from './styles';
import GridWrapper from "../../components/common/GridWrapper/GridWrapper.jsx";

const Authentication = () => {
    const getHeader = () => {
        const handleSearch = (value) => {
            console.log(value);
        }

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar
                    placeholder="Search by email address, phone number, or user UID"
                    onChange={(event) => handleSearch(event.target.value)}
                    searchBarWidth='720px'
                />
                <Box>
                    <CommonButton
                        variant="contained"
                        size="large"
                        sx={cardHeaderStyles.addUserButton}
                    >
                        Add user
                    </CommonButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )

    }

    const getContent = () => (
        <Typography
            align="center"
            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
        >
            No users for this project yet
        </Typography>
    );

    return (
        <GridWrapper>
            <BasicCard header={getHeader()} content={getContent()}/>
        </GridWrapper>
    )
}

export default Authentication
