import { useMemo } from 'react';

import { ELLIPSIS_SYMBOL } from '../../components/Ellipsis';
import { createRange } from '../../helpers';

import type { UsePaginationProps, UsePaginationReturns } from './types';

export const usePagination = ({
  totalCount,
  pageSize,
  currentPage,
  siblingCount = 1,
}: UsePaginationProps): UsePaginationReturns => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return createRange(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = createRange(1, leftItemCount);

      return [...leftRange, ELLIPSIS_SYMBOL, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = createRange(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, ELLIPSIS_SYMBOL, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = createRange(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, ELLIPSIS_SYMBOL, ...middleRange, ELLIPSIS_SYMBOL, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return { paginationRange: paginationRange ?? [] };
};
