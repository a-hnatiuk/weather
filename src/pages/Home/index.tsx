import { FC } from 'react';
import { Container } from '@mui/material';

import CityPicker from 'components/CityPicker';
import LastSeenRegions from 'components/LastSeenRegions';

const Home: FC = () => (
  <Container>
    <LastSeenRegions />
    <CityPicker />
  </Container>
);

export default Home;
