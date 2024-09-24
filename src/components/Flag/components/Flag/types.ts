import { PropsWithChildren, ReactNode } from 'react';

import { IconVariant } from '@/icons';
import { TestableComponent } from '@/types/controls';

export type FlagAppearance = 'error' | 'info' | 'success' | 'warning' | 'normal';

export type FlagProps = {
  /**
   * A unique identifier used for controlling Flag
   */
  id: string;

  /**
   * Controls the appearance of the Flag.
   * Choose from "error", "info", "success", "warning", "normal"
   */
  appearance?: FlagAppearance;

  /**
   * The title of the Flag, displayed prominently.
   */
  title?: string;

  /**
   *  An icon to visually represent the Flag.
   */
  icon?: IconVariant | ReactNode;

  /**
   * If true, the Flag will stretch to fill the available width of its container.
   */
  fullWidth?: boolean;

  /**
   *
   */
  isDismissible?: boolean;

  /**
   *
   */
  onDismissed?: (id: string) => void;
} & TestableComponent &
  PropsWithChildren;

export type StyledFlagProps = {
  appearance: FlagAppearance;
  fullWidth: boolean;
} & TestableComponent;

export type StyledExpendedAreaProps = {
  isExpanded: boolean;
  maxHeight: number | 'max-height';
};

export type StyledButtonIconProps = {
  isExpanded?: boolean;
};
