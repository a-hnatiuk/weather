import { styled, css } from '@mui/material/styles';
import { FC } from 'react';

interface IStyledLoader {
  absolute?: boolean;
  fill?: string;
  width?: string;
  height?: string;
  spin?: boolean;
}

export const StyledIcon = (component: FC) => styled(component, {
  shouldForwardProp: (prop) => !['absolute', 'spin'].includes(prop as string),
})<IStyledLoader>`
  position: static;
  width: 100px;
  height: 100px;
  fill: ${(props) => props.theme.palette.warning.light};

  ${({ absolute }) =>
    absolute &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  ${({ fill }) =>
    fill &&
    css`
      fill: ${fill};
    `}

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}

  ${({ spin, absolute }) =>
    spin &&
    css`
      @keyframes spin {
        0% {
          transform: ${absolute
            ? 'translate(-50%, -50%) rotate(0deg)'
            : 'rotate(0deg)'};
        }
        100% {
          transform: ${absolute
            ? 'translate(-50%, -50%) rotate(360deg)'
            : 'rotate(3600deg)'};
        }
      }
      animation: spin 4s linear infinite;
    `};
`;
