import React from 'react';

import { TestableComponent } from '../../../../types/controls';

export type SelectedType = number;

export type OnChangeCallback = (index: SelectedType, event?: React.KeyboardEvent | React.MouseEvent) => void;

export type TabsProps = {
  /**
   *
   */
  selected: number;
  /**
   *
   *
   */
  onChange: OnChangeCallback;
  /**
   *
   */
  children: React.ReactNode;
  /**
   *
   */
  id: string;
} & TestableComponent;

export type StyledTabProps = TestableComponent;
