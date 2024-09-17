import { PropsWithChildren } from 'react';

import { TestableComponent } from '@/types/controls';

export type FlagAppearance = 'error' | 'info' | 'success' | 'warning' | 'normal';

export type FlagProps = {
  /**
   *
   */
  appearance?: FlagAppearance;
} & TestableComponent &
  PropsWithChildren;
