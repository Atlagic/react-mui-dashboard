import React from "react";
import Grid from "@mui/material/Grid";
import { gridWrapperStyles} from "./styles.js";

const GridWrapper = ({ children }) => {
    return (
        <Grid size={{xs:12}} sx={gridWrapperStyles}>
            { children }
        </Grid>
    )
}

export default GridWrapper
