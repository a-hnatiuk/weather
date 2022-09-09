import { FC, ReactElement } from 'react';
import { Tooltip as TooltipUI } from '@mui/material';

interface ITooltip {
  description: string;
  visible: boolean;
  children: ReactElement;
}

const Tooltip: FC<ITooltip> = ({ description, visible, children }) => {
  if (visible) {
    return (
      <TooltipUI title={description} arrow>
        {children}
      </TooltipUI>
    );
  }
  return children;
};

export default Tooltip;
