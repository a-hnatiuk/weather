import { FC } from 'react';
import { Box } from '@mui/material';

import CityPicker from 'components/CityPicker';
import LastSeenRegions from 'components/LastSeenRegions';

const Home: FC = () => (
  <Box>
    <LastSeenRegions />
    <CityPicker />
  </Box>
);

export default Home;
