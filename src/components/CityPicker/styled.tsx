import { styled } from '@mui/material/styles';

export const StyledCityPicker = styled(({ className, children }: any) => (
  <div className={className}>{children}</div>
))({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 600,
});
