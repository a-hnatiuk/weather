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

const theme = createTheme({
  palette: {
    primary: {
      main: '#3F8AE0',
    },
    secondary: {
      main: '#326eb3',
    },
  },
});

export default theme;
