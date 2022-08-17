import { FC, useContext, MouseEvent } from 'react';
import { Chip as ChipUI, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { RouterLinks } from 'components/Routes';
import { ILastSeenRegion } from 'components/LastSeenRegions';
import { Coordinates } from 'containers/Context/Coordinates';

const Chip: FC<{
  region: ILastSeenRegion;
}> = ({ region }) => {
  const { setCoordinates } = useContext(Coordinates);
  const navigate = useNavigate();
  const {
    description,
    coordinates: { lat, lon },
  } = region;

  const handleClick = (e: MouseEvent) => {
    if (setCoordinates) {
      setCoordinates({ lat, lon });
      navigate(RouterLinks.forecast, { replace: true });
    }
  };

  return <ChipUI label={description} color="primary" onClick={handleClick} />;
};

export default Chip;
