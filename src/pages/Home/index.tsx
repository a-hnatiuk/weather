import { FC } from 'react';
import { Container, Grid, Typography } from '@mui/material';

import CityPicker from 'components/CityPicker';
import LastSeenRegions from 'components/LastSeenRegions';

const Home: FC = () => (
  <Container maxWidth="lg">
    <Grid container mt={2}>
      <Grid item>
        <Typography variant="h2">Recently search</Typography>
      </Grid>
      <Grid item mt={1}>
        <LastSeenRegions />
      </Grid>
    </Grid>
    <CityPicker />
  </Container>
);

export default Home;
