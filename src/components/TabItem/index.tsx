import { FC, ReactNode } from 'react';

interface ITabItem {
  children?: ReactNode;
  index: number;
  value: number;
}

export const tabPrefix = 'weather';

const TabItem: FC<ITabItem> = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`${tabPrefix}-tabpanel-${index}`}
    aria-labelledby={`${tabPrefix}-tab-${index}`}
    {...other}
  >
    {value === index && children}
  </div>
);

export default TabItem;
