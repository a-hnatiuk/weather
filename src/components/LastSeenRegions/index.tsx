import { FC, useEffect, useState } from 'react';

import { getLocalStorageItem, lsKyes } from 'helpers/localforage';

import { ICoordinates } from 'containers/Context/Coordinates';
import Chip from 'components/LastSeenRegions/components/Chips';

import { StyledRegions } from 'components/LastSeenRegions/styled';

export interface ILastSeenRegion {
  id: string;
  description: string;
  coordinates: ICoordinates;
}

const LastSeenRegions: FC = () => {
  const [regions, setRegions] = useState<Array<ILastSeenRegion>>();

  useEffect(() => {
    getLocalStorageItem(lsKyes.LAST_REGION, setRegions);
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
