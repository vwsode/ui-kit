import { MouseEvent } from 'react';

import { TestableComponent } from '@/types/controls';

export type PaginationProps = {
  /**
   *
   */
  pages: number[];

  /**
   *
   */
  currentPage?: number;

  /**
   *
   */
  onChange?: (event: MouseEvent, page: number) => void;

  /**
   *
   */
  max?: number;

  /**
   *
   */
  isDisabled?: boolean;

  /**
   *
   */
  defaultSelectedPage: number;
} & TestableComponent;

export type StyledPaginationProps = {
  isDisabled: boolean;
} & TestableComponent;