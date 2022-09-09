import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Button, List, ListItemButton } from '@mui/material';

export const StyledCityPicker = styled('div')`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
`;

export const StyledInputWrapper = styled('div')`
  display: flex;
  column-gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  ${(props) => props.theme.breakpoints.up('sm')} {
    padding-left: 15px;
    padding-right: 15px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const StyledSearchBtn = styled(Button)`
  display: flex;
  min-width: auto;
  width: 50px;
  border-radius: 50px;
`;

interface IStyledList {
  children?: ReactNode;
  component?: string | ReactNode;
}

export const StyledList = styled(List)<IStyledList>`
  position: absolute;
  left: 0;
  width: 100%;
`;

export const StyledListItemButton = styled(ListItemButton)`
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.light};
  }
`;
