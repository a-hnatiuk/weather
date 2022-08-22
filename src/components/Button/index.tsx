import { FC, ReactNode } from 'react';

import { StyledButton } from 'components/Button/styled';

export interface IButton {
  smallRound?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  variant?: 'text' | 'outlined' | 'contained';
}

const Button: FC<IButton> = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
