import { FC, ReactNode } from 'react';

import { mediaQueryUp } from 'helpers/mediaQueryUp';

interface ITabItem {
  children?: ReactNode;
  index: number;
  value: number;
}

export const tabPrefix = 'weather';

const TabItem: FC<ITabItem> = ({ children, value, index, ...other }) => {
  const desktop = mediaQueryUp('lg');

  return (
    <div
      role="tabpanel"
      hidden={desktop && value !== index}
      id={`${tabPrefix}-tabpanel-${index}`}
      aria-labelledby={`${tabPrefix}-tab-${index}`}
      {...other}
    >
      {desktop && value === index && children}
      {!desktop && children}
    </div>
  );
};

export default TabItem;
