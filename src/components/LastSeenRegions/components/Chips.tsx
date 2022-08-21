import { FC, useContext, MouseEvent } from 'react';
import { Chip as ChipUI } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { trancate } from 'helpers/trancate';

import { RouterLinks } from 'components/Routes';
import { ILastSeenRegion } from 'components/LastSeenRegions';
import { Coordinates } from 'containers/Context/Coordinates';
import Tooltip from 'components/Tooltip';

const TEXT_LENGTH_ALLOWED = 25;

interface IChip {
  region: ILastSeenRegion;
}

const Chip: FC<IChip> = ({ region }) => {
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

  return (
    <Tooltip
      description={description}
      visible={description.length > TEXT_LENGTH_ALLOWED}
    >
      <ChipUI
        label={trancate(description, TEXT_LENGTH_ALLOWED)}
        color="primary"
        onClick={handleClick}
      />
    </Tooltip>
  );
};

export default Chip;
