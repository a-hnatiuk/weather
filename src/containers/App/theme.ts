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

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3F8AE0',
    },
    secondary: {
      main: '#326eb3',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
});
