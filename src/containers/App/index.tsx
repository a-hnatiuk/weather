import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Routes, { history } from '../../components/Routes';
import { CoordinatesProvider } from '../Context/Coordinates';

const SRoot = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SWrap = styled('div')`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
