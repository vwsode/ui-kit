import React, { FC } from 'react';

import { useTabContext } from '../../contexts/TabContext';

import { StyledTabPanel } from './TabPanel.style';
import { TabPanelProps } from './types';

export const TabPanel: FC<TabPanelProps> = ({ children, testId, index }) => {
  const { selected } = useTabContext();

  const isSelected = index === selected;

  if (!isSelected) {
    return null;
  }

  return (
    <StyledTabPanel testId={testId} role="tabpanel">
      {children}
    </StyledTabPanel>
  );
};

TabPanel.displayName = 'Tabs.TabPanel';
