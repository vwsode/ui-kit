import React, { FC } from 'react';

import { KEY } from '../../../../constants/KeyCodes';
import { useTabContext } from '../../contexts/TabContext';

import { StyledTab } from './Tab.style';
import { TabProps } from './types';

export const Tab: FC<TabProps> = ({ children, testId, index }) => {
  const { selected, onChange } = useTabContext();
  const isSelected = selected === index;

  const handleClick = (event: React.MouseEvent) => {
    if (typeof onChange === 'function') {
      onChange(index, event);
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    const { key } = event;
    if (key === KEY.ENTER && typeof onChange === 'function') {
      onChange(index, event);
    }
  };

  return (
    <StyledTab
      tabIndex={0}
      aria-selected={isSelected}
      isSelected={isSelected}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      testId={testId}
      role="tab"
    >
      {children}
    </StyledTab>
  );
};

Tab.displayName = 'Tabs.Tab';
