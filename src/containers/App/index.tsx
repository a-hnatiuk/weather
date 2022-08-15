import React, { FC } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Routes, { history } from '../../components/Routes';

const App: FC = () => (
  <HistoryRouter history={history}>
    <Routes />
  </HistoryRouter>
);

export default App;
