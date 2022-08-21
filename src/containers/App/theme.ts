import { createBreakpoints } from '@mui/system';
import { createTheme } from '@mui/material/styles';

export interface CustomTheme {
  bg?: {
    main?: string;
    light?: string;
  };
  text?: {
    main?: string;
    light?: string;
  };
}

const breakpoints = createBreakpoints({
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
      fontSize: 20,
      [breakpoints.up('md')]: {
        fontSize: 28,
      },
    },
    h2: {
      fontSize: 18,
      [breakpoints.up('md')]: {
        fontSize: 24,
      },
    },
    h3: {
      fontSize: 16,
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
});
