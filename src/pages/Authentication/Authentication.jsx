import React from 'react'
import Grid from '@mui/material/Grid'
import CommonButton from "../../components/common/CommonButton/CommonButton.jsx";
import NotificationBell from "../../components/common/NotificationBell/NotificationBell.jsx";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu.jsx";
import Avatar from "@mui/material/Avatar";

const Authentication = () => {
    const [open, setOpen] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Grid item xs={8} md={2} >
            This is authenticaion page.
            <CommonButton variant="default">Go to docs</CommonButton>
            <NotificationBell iconColor="primary" badgeContent={4} anchorEl={anchorEl} onClick={handleOpen} />
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
        </Grid>
    )
}

export default Authentication
