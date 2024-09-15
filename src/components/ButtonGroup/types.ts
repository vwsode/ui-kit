import { PropsWithChildren } from 'react';

import type { PropWithAriaLabel, TestableComponent } from '@/types/controls';

export type ButtonGroupDirection = 'vertical' | 'horizontal';

export type ButtonGroupProps = {
  /**
   * Specifies the direction in which the buttons are arranged within the group.
   */
  direction?: ButtonGroupDirection;

  /**
   * If true, the ButtonGroup will stretch to fill the available width of its container.
   */
  fullWidth?: boolean;
} & TestableComponent &
  PropsWithChildren &
  PropWithAriaLabel;

export type StyledButtonGroupProps = Pick<ButtonGroupProps, 'direction' | 'testId' | 'fullWidth'>;
