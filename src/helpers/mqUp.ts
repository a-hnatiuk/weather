import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Breakpoint } from '@mui/system';

export const mqUp = (bp: Breakpoint): boolean => {
  const theme = useTheme();
  return !useMediaQuery(`(max-width:${theme.breakpoints.values[bp]}px)`);
};
