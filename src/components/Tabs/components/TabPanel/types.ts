import React from 'react';

import { TestableComponent } from '../../../../types/controls';
import { SelectedType } from '../Tabs/types';

export type TabPanelProps = {
  children: React.ReactNode;
  index: SelectedType;
} & TestableComponent;
