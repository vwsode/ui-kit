import { PropsWithChildren, ReactNode } from 'react';

import { IconVariant } from '../../icons';
import { TestableComponent } from '../../types/controls.ts';

export type ButtonAppearance = 'default' | 'primary' | 'subtle' | 'link' | 'subtle-link' | 'warning' | 'danger';

export type ButtonSpacing = 'default' | 'compact' | 'none';

export type BaseButtonProps = {
  /**
   *
   */
  spacing?: ButtonSpacing;

  /**
   *
   */
  appearance?: ButtonAppearance;

  /**
   *
   */
  fullWidth?: boolean;

  /**
   *
   */
  iconOnly?: boolean;

  /**
   *
   */
  isDisabled?: boolean;

  /**
   *
   */
  isLoading?: boolean;

  /**
   *
   */
  isSelected?: boolean;

  /**
   *
   */
  icon?: IconVariant | ReactNode;
} & PropsWithChildren &
  TestableComponent;

export type ButtonProps = {
  appearance: ButtonAppearance;

  fullWidth: boolean;

  iconOnly: boolean;

  isDisabled: boolean;

  isLoading: boolean;

  isSelected: boolean;

  spacing: ButtonSpacing;
} & TestableComponent;
