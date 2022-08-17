import { Box } from '@mui/material';
import React from 'react';
import CityPicker from '../../components/CityPicker';
import LastSeenRegions from '../../components/LastSeenRegions/Index';

const Home = () => (
  <Box>
    <LastSeenRegions />
    <CityPicker />
  </Box>
);

export default Home;
