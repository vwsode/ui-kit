import { PropsWithChildren, ReactNode } from 'react';

import { IconVariant } from '@/icons';
import { TestableComponent } from '@/types/controls';

export type FlagAppearance = 'error' | 'info' | 'success' | 'warning' | 'normal';

export type FlagProps = {
  /**
   *
   */
  appearance?: FlagAppearance;

  /**
   *
   */
  title?: string;

  /**
   *
   */
  icon?: IconVariant | ReactNode;

  /**
   *
   */
  fullWidth?: boolean;
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
  isExpanded: boolean;
};
