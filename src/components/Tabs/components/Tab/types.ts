import React from 'react';

import { TestableComponent } from '../../../../types/controls';
import { SelectedType } from '../Tabs/types';

export type TabProps = {
  children: React.ReactNode;
  index: SelectedType;
} & TestableComponent;

export type StyledTabProps = {
  isSelected: boolean;
} & TestableComponent;
