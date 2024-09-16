import { FC, MouseEvent, useState } from 'react';

import { Ellipsis } from '../Ellipsis';
import { Navigator, NavigatorDirection } from '../Navigator';
import { Page } from '../Page';

import { Root } from './Pagination.styles';
import { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({
                                                  pages,
                                                  currentPage,
                                                  max,
                                                  onChange,
                                                  defaultSelectedPage,
                                                  isDisabled = false,
                                                  testId,
                                                }) => {
  const [selectedPage, setSelectedPage] = useState<number>(currentPage !== undefined ? currentPage : defaultSelectedPage);


  const handlePageChange = (event: MouseEvent, page: number) => {
    if (page > pages.length || page <= 0) {
      return;
    }

    setSelectedPage(page);

    if (onChange) {
      onChange(event, page);
    }
  };

  const handleNavigatorClick = (event: MouseEvent, direction: NavigatorDirection) => {
    handlePageChange(event, direction === 'next' ? selectedPage + 1 : selectedPage - 1);
  };

  const renderPages = (start: number, end: number) =>
    pages.slice(start, end).map((item, index) => (
      <Page
        onClick={handlePageChange}
        key={index}
        page={item}
        isSelected={selectedPage === item}
        testId={testId}
      />
    ));

  const renderPagination = () => {
    if (selectedPage < 5) {
      return (
        <>
          {renderPages(0, 5)}
          <Ellipsis testId={testId} />
          <Page testId={testId} page={pages[pages.length - 1]} onClick={handlePageChange} />
        </>
      );
    }

    if (selectedPage >= 5 && selectedPage < pages.length - 3) {
      return (
        <>
          <Page testId={testId} page={pages[0]} onClick={handlePageChange} />
          <Ellipsis testId={testId} />
          {renderPages(selectedPage - 2, selectedPage + 1)}
          <Ellipsis testId={testId} />
          <Page testId={testId} page={pages[pages.length - 1]} onClick={handlePageChange} />
        </>
      );
    }

    return (
      <>
        <Page testId={testId} page={pages[0]} onClick={handlePageChange} />
        <Ellipsis testId={testId} />
        {renderPages(pages.length - 4, pages.length)}
      </>
    );
  };


  return (
    <Root isDisabled={isDisabled} testId={testId}>
      <Navigator
        isDisabled={selectedPage <= 1}
        onClick={handleNavigatorClick}
        direction="prev"
        testId={testId}
      />
      {renderPagination()}
      <Navigator
        isDisabled={selectedPage >= pages.length}
        onClick={handleNavigatorClick}
        direction="next"
        testId={testId}
      />
    </Root>
  );
};

Pagination.displayName = 'Pagination';
