import { ElementType, PropsWithChildren } from 'react';

import type { TestableComponent } from '@/types/controls';

export type FlagActionProps<C extends ElementType> = {
  /**
   * Allows overriding the underlying HTML element used for rendering the FlagAction.
   */
  component?: C;

  /**
   *
   */
  fullWidth?: boolean;
} & TestableComponent &
  PropsWithChildren;

export type StyledFlagActionProps = {
  fullWidth: boolean;
} & TestableComponent;
