import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#e28e18',
        },
        secondary: {
            main: '#dfe22c',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
