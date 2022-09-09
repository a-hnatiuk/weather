import { FC } from 'react';
import { Typography } from '@mui/material';

import { dateFormat } from 'helpers/weather';

import {
  StyledTitleSmall,
  StyledDivider,
} from 'pages/WeatherForecast/components/styled';

interface IDateTitle {
  dateString: string;
}

const TitleSmall: FC<IDateTitle> = ({ dateString }) => {
  const { day, month, date } = dateFormat(dateString);

  return (
    <StyledTitleSmall>
      <Typography fontSize={26} color="primary" fontWeight={700}>
        {date}
      </Typography>
      <Typography
        fontSize={26}
        color="primary"
        fontWeight={700}
        className="month"
      >
        {month}
      </Typography>
      <StyledDivider orientation="vertical" flexItem />
      <Typography fontSize={20} fontWeight={400} className="day">
        {day}
      </Typography>
    </StyledTitleSmall>
  );
};

export default TitleSmall;
