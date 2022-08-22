import { FC } from 'react';
import { Container, Grid, Typography } from '@mui/material';

import CityPicker from 'components/CityPicker';
import LastSeenRegions from 'components/LastSeenRegions';

import { StyledGrid } from 'pages/Home/styled';

const Home: FC = () => (
  <Container maxWidth="lg">
    <StyledGrid container mt={2}>
      <Grid item>
        <Typography variant="h2">Recently search:</Typography>
      </Grid>
      <Grid item mt={1}>
        <LastSeenRegions />
      </Grid>
    </StyledGrid>
    <CityPicker />
  </Container>
);

export default Home;
