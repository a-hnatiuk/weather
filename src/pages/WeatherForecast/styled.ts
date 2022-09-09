import { styled } from '@mui/material/styles';
import { Box, Container, Tab } from '@mui/material';

export const StyledBox = styled(Box)`
  background-color: transparent;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  padding: 0;

  .icon {
    width: 60px;
    height: 60px;
    min-height: 60px;
    position: static;
  }

  .temp {
    font-size: 24px;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    display: block;
    .icon {
      min-height: 120px;
      min-width: 120px;
    }
    .temp {
      font-size: 40px;
    }
  }
`;

export const StyledContainer = styled(Container)`
  padding-top: 10px;
  padding-bottom: 10px;
  ${(props) => props.theme.breakpoints.up('sm')} {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const StyledTab = styled(Tab)`
  &:not(.Mui-selected) {
    background-color: ${(props) => props.theme.palette.primary.light};
  }
  &.MuiTabs-scrollButtons {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;
