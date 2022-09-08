import { FC } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { theme } from 'containers/App/theme';
import { ThemeProvider } from '@mui/material/styles';

import Routes, { history } from 'components/Routes';
import { CoordinatesProvider } from 'containers/Context/Coordinates';

import { SRoot } from 'containers/App/styled';

const App: FC = () => (
  <CoordinatesProvider>
    <ThemeProvider theme={theme}>
      <HistoryRouter history={history}>
        <SRoot>
          <Routes />
        </SRoot>
      </HistoryRouter>
    </ThemeProvider>
  </CoordinatesProvider>
);

export default App;
