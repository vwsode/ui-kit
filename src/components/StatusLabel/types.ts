import React from 'react';

import { TestableComponent } from '../../types/controls';

export type StatusLabelProps = {
  /**
   * The type of the status label.
   * Can be one of: 'critical', 'error', 'warning', 'success', 'info'.
   */
  type: 'critical' | 'error' | 'warning' | 'success' | 'info';
  /**
   * The title text to be displayed in the status label.
   */
  title: string;
  /**
   * An optional icon to be displayed alongside the title in the status label.
   */
  icon?: React.ReactNode;
} & TestableComponent;

export type StyledStatusLabelProps = Omit<StatusLabelProps, 'title' | 'icon'>;
