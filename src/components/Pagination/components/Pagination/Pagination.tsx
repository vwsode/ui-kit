import { FC, MouseEvent, useState } from 'react';

import { isEllipsis } from '../../helpers';
import { usePagination } from '../../hooks/usePagination';
import { Ellipsis } from '../Ellipsis';
import { Navigator, NavigatorDirection } from '../Navigator';
import { Page } from '../Page';

import { Root } from './Pagination.styles';

import type { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({
  pages,
  onChange,
  testId,
  defaultSelectedPage,
  isDisabled = false,
  max = 1,
  currentPage = 1,
  siblingCount = 1,
}) => {
  const [selectedPage, setSelectedPage] = useState<number>(
    defaultSelectedPage !== undefined ? defaultSelectedPage : currentPage,
  );

  const { paginationRange } = usePagination({
    currentPage: selectedPage,
    siblingCount,
    totalCount: pages.length,
    pageSize: max,
  });

  const lastPage = paginationRange[paginationRange.length - 1];

  const handlePageChange = (event: MouseEvent, page: number | string) => {
    setSelectedPage(Number(page));

    if (Number(page) > pages.length || Number(page) <= 0) {
      return;
    }

    if (onChange) {
      onChange(event, Number(page));
    }
  };

  const handleNavigatorClick = (event: MouseEvent, direction: NavigatorDirection) => {
    handlePageChange(event, direction === 'next' ? selectedPage + 1 : selectedPage - 1);
  };

  return (
    <Root isDisabled={isDisabled} testId={testId}>
      <Navigator
        isDisabled={isDisabled || selectedPage === 1}
        onClick={handleNavigatorClick}
        direction="prev"
        testId={testId}
      />
      {paginationRange.map((page, index) => {
        if (isEllipsis(page)) {
          return <Ellipsis key={index} testId={testId} />;
        }

        return (
          <Page
            isDisabled={isDisabled}
            onClick={handlePageChange}
            key={index}
            page={page}
            isSelected={page === selectedPage}
          />
        );
      })}
      <Navigator
        isDisabled={isDisabled || selectedPage === lastPage}
        onClick={handleNavigatorClick}
        direction="next"
        testId={testId}
      />
    </Root>
  );
};

Pagination.displayName = 'Pagination';
