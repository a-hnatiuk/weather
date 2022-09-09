import { styled, css } from '@mui/material/styles';
import { Button } from '@mui/material';

import { IButton } from 'components/Button';

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'smallRound',
})<IButton>`
  ${({ smallRound }) =>
    smallRound &&
    css`
      display: flex;
      min-width: auto;
      width: 50px;
      border-radius: 50px;
    `}
`;
