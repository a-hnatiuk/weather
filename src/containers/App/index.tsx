import { FC } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'containers/App/theme';

import Routes, { history } from 'components/Routes';
import { CoordinatesProvider } from 'containers/Context/Coordinates';

import { SRoot, SWrap } from 'containers/App/styled';
import { Typography } from '@mui/material';

const App: FC = () => (
  <CoordinatesProvider>
    <ThemeProvider theme={theme}>
      <HistoryRouter history={history}>
        <SRoot>
          <SWrap>
            <Typography variant="h1">H1</Typography>
            <Typography variant="h2">H2</Typography>
            <Typography variant="h3">H3</Typography>
            <Typography variant="h4">H4</Typography>
            <Typography variant="h5">H5</Typography>
            <Typography variant="h6">H6</Typography>
            <Routes />
          </SWrap>
        </SRoot>
      </HistoryRouter>
    </ThemeProvider>
  </CoordinatesProvider>
);

export default App;
