import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    // backgroundColor: 'red',
                    // fontSize: '3em!important'
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#bada55'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    spacing: [4, 8, 12, 16, 20]
    //theme.spacing(4)
});
