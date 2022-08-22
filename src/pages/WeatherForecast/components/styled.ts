import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTitleSmall = styled('div')`
  padding: 5px 10px;
  font-size: 30px;
  box-shadow: #0003 0px 4px 4px 0px;
  display: flex;
  align-items: baseline;
  ${(props) => props.theme.breakpoints.up('sm')} {
    padding: 5px 15px;
  }
  .day {
    text-transform: lowercase;
    font-size: 0.8em;
    font-weight: 700;
  }
  .month {
    padding-left: 5px;
  }
`;

export const StyledDivider = styled(Divider)`
  background-color: ${(props) => props.theme.palette.primary.main};
  margin: 0 5px;
`;
