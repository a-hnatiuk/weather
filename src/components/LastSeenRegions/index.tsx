import { FC, useEffect, useState } from 'react';
import localForage from 'localforage';
import { styled } from '@mui/material/styles';

import { ICoordinates } from 'containers/Context/Coordinates';
import Chip from 'components/LastSeenRegions/components/Chips';

const StyledRegions = styled('div')`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 40px;
`;

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
    <StyledRegions>
      {regions &&
        regions.length > 0 &&
        regions.map((region) => <Chip key={region.id} region={region} />)}
    </StyledRegions>
  );
};

export default LastSeenRegions;
