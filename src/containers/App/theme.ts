import { createBreakpoints } from '@mui/system';
import { createTheme } from '@mui/material/styles';

export const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1440,
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3F8AE0',
      light: '#c7e1ff',
    },
    secondary: {
      main: '#326eb3',
    },
  },
  breakpoints,
  typography: {
    fontFamily: 'Montserrat, Arial, sens-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    h1: {
      fontSize: 28,
      fontWeight: 700,
      [breakpoints.up('md')]: {
        fontSize: 32,
      },
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
      [breakpoints.up('md')]: {
        fontSize: 26,
      },
    },
    h3: {
      fontSize: 16,
      fontWeight: 700,
      [breakpoints.up('md')]: {
        fontSize: 18,
      },
    },
    h4: {
      fontSize: 14,
      [breakpoints.up('md')]: {
        fontSize: 16,
      },
    },
    h5: {
      fontSize: 14,
      [breakpoints.up('md')]: {
        fontSize: 16,
      },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 10,
          paddingRight: 10,
          [breakpoints.up('sm')]: {
            paddingLeft: 15,
            paddingRight: 15,
          },
          [breakpoints.up('md')]: {
            paddingLeft: 20,
            paddingRight: 20,
          },
        },
      },
    },
  },
});
