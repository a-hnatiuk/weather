import { styled, css } from '@mui/material/styles';

interface IStyledIconWrapper {
  absolute?: boolean;
}

export const StyledIconWrapper = styled('span')<IStyledIconWrapper>`
  position: 'relative';
  width: '100%';
  display: 'block';

  ${({ absolute }) =>
    absolute &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;

export const StyledIcon = styled('span')`
  text-align: 'center';
`;
