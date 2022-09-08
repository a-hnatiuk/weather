import { FC } from 'react';
import { Link, Typography } from '@mui/material';
import { RouterLinks } from 'components/Routes';

const NotFound: FC = () => (
  <>
    <Typography marginTop={10} fontSize="70px" align="center">
      404
    </Typography>
    <Typography marginTop={1} fontSize="40px" align="center">
      The page was not found.
    </Typography>
    <Typography align="center" fontSize="36px">
      Back to <Link href={RouterLinks.home}>Home</Link>
    </Typography>
  </>
);

export default NotFound;
