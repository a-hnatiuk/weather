import { FC } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import Routes, { history } from 'components/Routes';
import { CoordinatesProvider } from 'containers/Context/Coordinates';

import { SRoot, SWrap } from 'containers/App/styled';

const App: FC = () => (
  <CoordinatesProvider>
    <HistoryRouter history={history}>
      <SRoot>
        <SWrap>
          <Routes />
        </SWrap>
      </SRoot>
    </HistoryRouter>
  </CoordinatesProvider>
);

export default App;
