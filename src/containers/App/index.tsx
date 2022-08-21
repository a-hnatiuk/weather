import { FC } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'containers/App/theme';

import Routes, { history } from 'components/Routes';
import { CoordinatesProvider } from 'containers/Context/Coordinates';

import { SRoot, SWrap } from 'containers/App/styled';

const App: FC = () => (
  <CoordinatesProvider>
    <ThemeProvider theme={theme}>
      <HistoryRouter history={history}>
        <SRoot>
          <SWrap>
            <Routes />
          </SWrap>
        </SRoot>
      </HistoryRouter>
    </ThemeProvider>
  </CoordinatesProvider>
);

export default App;
