import { MouseEvent } from 'react';

import { TestableComponent } from '@/types/controls';

export type NavigatorDirection = 'prev' | 'next';

export type NavigatorProps = {
  /**
   *
   */
  isDisabled?: boolean;

  /**
   *
   */
  direction: NavigatorDirection;

  /**
   *
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>, direction: NavigatorDirection) => void;
} & TestableComponent;

export type StyledNavigatorProps = Pick<NavigatorProps, 'isDisabled'>;
