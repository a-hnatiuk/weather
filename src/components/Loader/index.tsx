import { FC, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import LoaderIcon from '../../icons/Loader';

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

const StyledIcon = styled(({ className, ...props }: any) => (
  <span {...props} className={className}>
    <LoaderIcon fill={props.color} />
  </span>
))({
  position: 'absolute',
  left: 0,
  right: 0,
  textAlign: 'center',
  top: `${(props: { absolute?: boolean }) =>
    props.absolute && 'calc(50% - 12px)'}`,
});

const StyledIconWrapper = styled(({ className, ...props }: any) => (
  <span {...props} className={className}>
    {props.children}
  </span>
))`
  position: 'relative';
  width: '100%';
  display: 'block';
`;

const Loader: FC<LoaderPropsType> = ({ color, absolute, box }) => {
  const fill = useMemo(() => {
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
    <StyledIconWrapper>
      <StyledIcon color={fill} absolute={absolute} />
    </StyledIconWrapper>
  );
};

Loader.defaultProps = {
  color: LoaderColors.primary,
};

export default Loader;
