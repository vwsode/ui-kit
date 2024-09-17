import { MouseEvent } from 'react';

import { TestableComponent } from '@/types/controls';

export type PaginationProps = {
  /**
   * An array representing the pages available for pagination.
   * Each number in the array corresponds to a page number.
   */
  pages: number[];

  /**
   * The current active page.
   * This is optional and may not be provided, in which case default behavior is used.
   */
  currentPage?: number;

  /**
   * Callback function triggered when a page is changed.
   * The event and the new page number are passed as arguments.
   *
   * @param {MouseEvent} event - The click event object.
   * @param {number} page - The page number that was clicked.
   */
  onChange?: (event: MouseEvent, page: number) => void;

  /**
   * The maximum number of pages to be displayed.
   * This is optional and defaults to showing all pages if not provided.
   */
  max?: number;

  /**
   * Whether the pagination component is disabled.
   * If `true`, pagination controls will be unclickable.
   */
  isDisabled?: boolean;

  /**
   * The page number that is selected by default when the component is first rendered.
   */
  defaultSelectedPage?: number;

  /**
   * The number of sibling pages to display on either side of the current page.
   * This is optional and can be used to control how many pages are visible around the current page.
   */
  siblingCount?: number;
} & TestableComponent;

export type StyledPaginationProps = {
  isDisabled: boolean;
} & TestableComponent;
