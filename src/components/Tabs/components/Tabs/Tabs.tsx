import React, { FC, useCallback, useEffect, useState } from 'react';

import { TabContextProvider } from '../../contexts/TabContext';
import { Tab } from '../Tab';
import { TabList } from '../TabList';
import { TabPanel } from '../TabPanel';

import { Root } from './Tabs.style';

import type { SelectedType, TabsProps } from './types';

export const TabsComponent: FC<TabsProps> = ({ selected, onChange, children, testId, id }) => {
  const [selectedTab, setSelectedTab] = useState<SelectedType>(selected || 0);

  const handleChange = useCallback(
    (index: SelectedType, event?: React.KeyboardEvent | React.MouseEvent) => {
      if (typeof onChange === 'function') {
        onChange(index, event);
      }

      setSelectedTab(index);
    },
    [onChange],
  );

  useEffect(() => {
    setSelectedTab(selected);
  }, [selected]);

  return (
    <TabContextProvider value={{ onChange: handleChange, selected: selectedTab }}>
      <Root testId={testId} aria-labelledby={id}>
        {children}
      </Root>
    </TabContextProvider>
  );
};

TabsComponent.displayName = 'Tabs';

export const Tabs = Object.assign(TabsComponent, {
  Tab: Tab,
  TabList: TabList,
  TabPanel: TabPanel,
});
