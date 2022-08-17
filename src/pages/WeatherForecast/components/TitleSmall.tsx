import { FC } from 'react';
import { styled } from '@mui/material/styles';

import { dateFormat } from 'helpers/weather';

const StyledTitleSmall = styled('div')`
  padding: 5px;
  font-size: 30px;
  box-shadow: #0003 0px 4px 4px 0px;
  .day {
    text-transform: capitalize;
    font-size: 0.8em;
  }
  .month {
    padding-right: 40px;
    padding-left: 5px;
  }
  .scarlet {
    color: #f94a2f;
  }
`;

interface IDateTitle {
  dateString: string;
}

const TitleSmall: FC<IDateTitle> = ({ dateString }) => {
  const { day, month, date } = dateFormat(dateString);

  return (
    <StyledTitleSmall>
      <span className="scarlet">{date}</span>
      <span className="month scarlet">{month}</span>
      <span className="day">{day}</span>
    </StyledTitleSmall>
  );
};

export default TitleSmall;
