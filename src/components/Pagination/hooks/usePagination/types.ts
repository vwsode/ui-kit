export type UsePaginationProps = {
  /**
   * The total number of items available for pagination.
   * This value is used to calculate the number of pages.
   */
  totalCount: number;

  /**
   * The number of items to display per page.
   * Determines how many pages will be created based on the total count.
   */
  pageSize: number;

  /**
   * The number of sibling pages to show on either side of the current page.
   * This is optional and helps control how many page numbers are visible around the current page.
   * Defaults to 1 if not provided.
   */
  siblingCount?: number;

  /**
   * The current active page.
   * Used to determine which page is selected in the pagination range.
   */
  currentPage: number;
};

export type UsePaginationReturns = {
  /**
   * An array that represents the range of pages to display in the pagination.
   * This array can contain both numbers (for actual page numbers) and strings (e.g., for ellipses).
   */
  paginationRange: Array<string | number>;
};
