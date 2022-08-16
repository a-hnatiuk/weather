import React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const tabPrefix = 'weather';

const TabBodyItem = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
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
};

export default TabBodyItem;
