import {
  FC,
  useContext,
  useEffect,
  useState,
  useCallback,
  MouseEvent,
} from 'react';
import localForage from 'localforage';
import { Chip as ChipUI, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {
  Coordinates,
  ICoordinates,
} from '../../containers/Context/Coordinates';
import Chip from './components/Chips';

export interface ILastSeenRegion {
  id: string;
  description: string;
  coordinates: ICoordinates;
}

const LastSeenRegions: FC = () => {
  const [regions, setRegions] = useState<Array<ILastSeenRegion>>();

  useEffect(() => {
    localForage.getItem('lastRegion').then((list) => {
      setRegions(JSON.parse(list as string));
    });
  }, []);

  return (
    <Box>
      {regions &&
        regions.length > 0 &&
        regions.map((region) => <Chip key={region.id} region={region} />)}
    </Box>
  );
};

export default LastSeenRegions;
