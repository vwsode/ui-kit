import React, { FC } from 'react';

import { StyledTabList } from './Tab.style';
import { TabListProps } from './types';

export const TabList: FC<TabListProps> = ({ children, testId }) => {
  return (
    <StyledTabList testId={testId} role="tablist">
      {children}
    </StyledTabList>
  );
};

TabList.displayName = 'Tabs.TabList';
