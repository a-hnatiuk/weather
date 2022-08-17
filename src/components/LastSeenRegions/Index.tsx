import { useContext, useEffect, useState } from 'react';
import localForage from 'localforage';
import { Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Coordinates,
  ICoordinates,
} from '../../containers/Context/Coordinates';
import { RouterLinks } from '../Routes';

export interface ILastSeenRegion {
  id: string;
  description: string;
  coordinates: ICoordinates;
}

const LastSeenRegions = () => {
  const [regions, setRegions] = useState<Array<ILastSeenRegion>>();
  const { setCoordinates } = useContext(Coordinates);
  const navigate = useNavigate();

  const handleClick = (region: ILastSeenRegion) => {
    if (setCoordinates) {
      setCoordinates(region.coordinates);
      navigate(RouterLinks.forecast, { replace: true });
    }
  };

  useEffect(() => {
    localForage.getItem('lastRegion').then((list) => {
      setRegions(JSON.parse(list as string));
    });
  }, []);

  return (
    <Box>
      {regions &&
        regions.length > 0 &&
        regions.map((region) => (
          <Chip
            key={region.id}
            label={region.description}
            color="primary"
            onClick={() => handleClick(region)}
          />
        ))}
    </Box>
  );
};

export default LastSeenRegions;
