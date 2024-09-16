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
} & TestableComponent;
