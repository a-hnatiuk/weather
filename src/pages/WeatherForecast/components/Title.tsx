import { FC } from 'react';
import { styled } from '@mui/material/styles';

import { dateFormat } from 'helpers/weather';

const StyledTitle = styled('div')`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  .day {
    text-transform: uppercase;
    font-size: 18px;
  }
  .date-and-month {
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .month {
    font-size: 14px;
  }
  .date {
    line-height: 1;
    margin-bottom: 10px;
  }
`;

interface IDateTitle {
  dateString: string;
}

const Title: FC<IDateTitle> = ({ dateString }) => {
  const { dayShort, month, date } = dateFormat(dateString);

  return (
    <StyledTitle>
      <div className="day">{dayShort}</div>
      <div className="date-and-month">
        <strong className="date">{date}</strong>
        <span className="month">{month}</span>
      </div>
    </StyledTitle>
  );
};

export default Title;
