import { FC, useMemo } from 'react';

import LoaderIcon from 'icons/Loader';

import { StyledIcon, StyledIconWrapper } from 'components/Loader/styled';

interface LoaderPropsType {
  absolute?: boolean;
  box?: boolean;
  color?: string;
}

const Loader: FC<LoaderPropsType> = ({ color, absolute, box }) => (
  <StyledIconWrapper absolute={absolute}>
    <StyledIcon>
      <LoaderIcon fill={color} fontSize="large" />
    </StyledIcon>
  </StyledIconWrapper>
);

Loader.defaultProps = {
  color: 'yellow',
};

export default Loader;
