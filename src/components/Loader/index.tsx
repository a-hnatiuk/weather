import { FC, useMemo } from 'react';

import LoaderIcon from 'icons/Loader';

import { StyledIcon, StyledIconWrapper } from 'components/Loader/styled';

// Error: 'LoaderColors' is already declared in the upper scope on line 8 column
// eslint-disable-next-line
export enum LoaderColors {
  white = 'white',
  primary = 'primary',
  secondary = 'secondary',
}

interface LoaderPropsType {
  absolute?: boolean;
  box?: boolean;
  color?: LoaderColors;
}

const Loader: FC<LoaderPropsType> = ({ color, absolute, box }) => {
  const fill = useMemo(() => {
    // TODO fix colors. Now does not work
    switch (color) {
      case LoaderColors.primary: {
        return 'green';
      }
      case LoaderColors.secondary: {
        return 'blue';
      }
      default: {
        return '#fff';
      }
    }
  }, [color]);

  return (
    <StyledIconWrapper absolute={absolute}>
      <StyledIcon>
        <LoaderIcon fill={fill} fontSize="large" />
      </StyledIcon>
    </StyledIconWrapper>
  );
};

Loader.defaultProps = {
  color: LoaderColors.primary,
};

export default Loader;
