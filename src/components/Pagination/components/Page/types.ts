import { MouseEvent } from 'react';

import { TestableComponent } from '@/types/controls';

export type PageProps = {
  /**
   *
   */
  isSelected?: boolean;

  /**
   *
   */
  page: number;

  /**
   *
   */
  onClick?: (event: MouseEvent, page: number) => void;
} & TestableComponent;
